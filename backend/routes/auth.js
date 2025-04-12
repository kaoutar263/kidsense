const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// POST /api/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("➡️ Données reçues :", req.body);

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création et sauvegarde du nouvel utilisateur
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès ✅" });
  } catch (err) {
    console.error("❌ Erreur backend :", err); // 👈 C'est ce qu'on veut voir
    res.status(500).json({ message: "Erreur serveur." });
  }
});
//  POST /api/login
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Vérifier si l'utilisateur existe
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Email invalide ❌" });
      }
  
      // Vérifier le mot de passe
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Mot de passe incorrect ❌" });
      }
  
      // Créer un token JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
  
      res.status(200).json({
        message: "Connexion réussie ✅",
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error("Erreur login:", error);
      res.status(500).json({ message: "Erreur serveur." });
    }
  });
module.exports = router;
