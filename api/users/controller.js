const { Model } = require("./model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//  login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await Model.findOne({ email: email });
  if (!user) {
    return res.status(401).json({ message: "invalid email or password3" });
  }
  let isValid = await bcrypt.compare(password, user.password);
  if (!isValid)
    return res.status(401).json({ message: "invalid email or password" });

  const token = jwt.sign({ id: user._id, email: user.email }, "user", {
    expiresIn: 86400, //24hrs
  });
  res.json({ token });
};

// Create a new user
exports.signupUser = async (req, res) => {
  const { password, email } = req.body;
  const findUser = await Model.findOne({ email: email });
  if (findUser)
    return res.status(400).json({ message: "email already exists" });
  const User = new Model({
    password: password,
    email: email,
  });
  const value = bcrypt.genSaltSync(10);
  User.password = bcrypt.hashSync(password, value);
  await User.save()
    .then((response) => {
      res.status(200).json({ success: true, user: response.email });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};
