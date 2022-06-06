const FavsModel = require("./model");
// Get all favs
exports.getAllFavs = (req, res) => {
  FavsModel.find()
    .exec()
    .then((response) => {
      res.status(200).json({ success: true, Allfavs: response });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};
// Get fav by id
exports.getFavById = async (req, res) => {
  const { id } = req.params;
  const lists = await FavsModel.findById(id);
  if (!lists)
    return res.status(400).json({ success: false, error: "Fav not found" });

  return res.status(200).json(lists);
};
//  Create a new fav
exports.createFav = async (req, res) => {
  const { name, items } = req.body;
  const data = {
    name,
    items,
    user: req.user._id,
  };
  const Fav = new FavsModel(data);
  await Fav.save()
    .then((response) => {
      res.status(200).json({
        success: true,
        data: response,
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};
// Delete fav by id
exports.deleteFav = (req, res) => {
  const id = req.params.id;
  FavsModel.findByIdAndDelete(id)
    .then((response) => {
      res.status(200).json({ success: true, message: "Fav deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};
// Update fav by id
exports.updateFav = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  FavsModel.findByIdAndUpdate(id, body, { new: true })
    .then((response) => {
      res.status(200).json({ success: true, data: response });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};
