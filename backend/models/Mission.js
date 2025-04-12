const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  progress: { type: Number, default: 0 }
});

module.exports = mongoose.model("Mission", missionSchema);
