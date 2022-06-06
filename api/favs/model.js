const { Schema, model } = require("mongoose");

const favsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  items: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        trim: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
});

favsSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject();
  return data;
};

module.exports = model("Fav", favsSchema);
