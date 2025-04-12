import { useState } from "react";

const shapes = [
  { name: "Cercle", emoji: "⚪" },
  { name: "Carré", emoji: "⬛" },
  { name: "Triangle", emoji: "🔺" }
];

const GeometryGame = ({ onBack }) => {
  const [shape] = useState(shapes[Math.floor(Math.random() * shapes.length)]);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleCheck = () => {
    setFeedback(
      guess.toLowerCase().trim() === shape.name.toLowerCase()
        ? "✅ Correct !"
        : "❌ Mauvaise réponse"
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#DFF6FF] relative overflow-hidden">
      {/* Bouton retour bleu clair */}
      {onBack && (
        <div className="absolute top-4 left-4">
          <button
            onClick={onBack}
            className="bg-[#AEEAF5] text-black px-3 py-2 rounded-xl shadow hover:bg-[#8dd6e4]"
          >
            ⬅ Retour
          </button>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg p-6 w-[340px] text-center">
        <div className="bg-[#c7ecfb] rounded-t-xl py-2 mb-4">
          <h2 className="text-lg font-semibold text-[#333]">Forme mystère 🧩</h2>
        </div>

        <div className="text-6xl mb-4">{shape.emoji}</div>

        <input
          type="text"
          placeholder="Quel est cette forme ?"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />

        <button
          onClick={handleCheck}
          className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-xl shadow"
        >
          Vérifier
        </button>

        {feedback && <p className="mt-4 text-lg">{feedback}</p>}
      </div>
    </div>
  );
};

export default GeometryGame;

