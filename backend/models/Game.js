const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  category: { type: String, enum: ["math", "drawing", "geometry"], required: true }
});

module.exports = mongoose.model("Game", gameSchema);
