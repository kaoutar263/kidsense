const express = require("express");
const Game = require("../models/Game");

const router = express.Router();

router.get("/", async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

router.post("/", async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).json({ message: "Jeu ajouté !" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur." });
  }
});

module.exports = router;
