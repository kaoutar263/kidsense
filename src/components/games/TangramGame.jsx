import { useState } from "react";

const pieces = [
  { id: 1, shape: "triangle", emoji: "🔺", color: "bg-red-300" },
  { id: 2, shape: "square", emoji: "⬛", color: "bg-yellow-300" },
  { id: 3, shape: "parallelogram", emoji: "🟪", color: "bg-green-300" },
];

const TangramGame = ({ onBack }) => {
  const [placed, setPlaced] = useState({});

  const handleDrop = (e, targetShape) => {
    const draggedShape = e.dataTransfer.getData("shape");
    if (draggedShape === targetShape) {
      setPlaced((prev) => ({ ...prev, [targetShape]: true }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#DFF6FF] relative">
      {/* Retour */}
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

      <div className="bg-white rounded-2xl shadow-lg p-6 w-[360px] text-center">
        <div className="bg-[#c7ecfb] rounded-t-xl py-2 mb-4">
          <h2 className="text-lg font-semibold text-[#333]">Tangram 📐</h2>
        </div>

        <p className="mb-4 text-gray-600">Recompose la silhouette avec les pièces ci-dessous</p>

        <div className="grid grid-cols-3 gap-4 justify-center mb-6">
          {pieces.map((p) => (
            <div
              key={p.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, p.shape)}
              className="w-20 h-20 rounded-xl bg-gray-200 flex items-center justify-center shadow"
            >
              {placed[p.shape] && <span className="text-3xl">{p.emoji}</span>}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {pieces.map(
            (p) =>
              !placed[p.shape] && (
                <div
                  key={p.id}
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("shape", p.shape)}
                  className={`w-16 h-16 rounded-xl ${p.color} flex items-center justify-center text-3xl cursor-move shadow`}
                >
                  {p.emoji}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TangramGame;
