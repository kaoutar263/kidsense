const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const gameRoutes = require("./routes/games");
const storyRoutes = require("./routes/stories");
const missionRoutes = require("./routes/missions");

dotenv.config(); // ✅ Charger les variables du .env

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/games", gameRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/missions", missionRoutes);

// ✅ Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connecté à MongoDB"))
.catch((err) => console.error("❌ Erreur MongoDB :", err));
app.get("/", (req, res) => {
    res.send("✅ Kidsense backend is running!");
  });
  
// ✅ Routes d’authentification
app.use("/api", authRoutes);

// ✅ Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});
