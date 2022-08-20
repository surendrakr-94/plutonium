const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    authorId: { type: Number, require: true },
    authorName: { type: String },
    age: { type: Number },
    address: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authorsk", authorSchema);