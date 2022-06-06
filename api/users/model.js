const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: { type: String, required: [true, "Password is required"] },
  favs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Fav",
      required: true,
    },
  ],
});

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

module.exports = { Model: model("User", UserSchema) };
