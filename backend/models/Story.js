const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String
});

module.exports = mongoose.model("Story", storySchema);
