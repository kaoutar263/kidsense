import { useState, useEffect } from "react";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleSlot from "./PuzzleSlot";

const PuzzleBoard = ({ image, onBack }) => {
  const gridSize = 3;
  const pieceSize = 100;

  const generateShuffledPieces = () => {
    return Array.from({ length: gridSize * gridSize }, (_, i) => i).sort(() => Math.random() - 0.5);
  };

  const [pieces, setPieces] = useState(generateShuffledPieces()); // tableau d’indices (0 à 8)
  const [placedPieces, setPlacedPieces] = useState(Array(9).fill(null)); // indices placés

  const handleDrop = (dragIndex, dropIndex) => {
    const newPlaced = [...placedPieces];
    newPlaced[dropIndex] = dragIndex;
    setPlacedPieces(newPlaced);
  };

  const isCorrect = placedPieces.every((val, i) => val === i);

  return (
    <div className="min-h-screen bg-[#DFF6FF] flex flex-col items-center justify-center relative">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-4 left-4 px-4 py-2 bg-[#AEEAF5] rounded-xl shadow"
        >
          ⬅ Retour
        </button>
      )}

      <div className="bg-white p-6 rounded-xl shadow-xl text-center">
        <h2 className="text-lg font-semibold mb-2 bg-[#c7ecfb] py-2 rounded-t-xl">
          Puzzle de formes 🧩
        </h2>
        <p className="mb-4 text-gray-700">Reconstitue cette image :</p>

        <div className="grid grid-cols-3 gap-1">
          {placedPieces.map((val, i) => (
            <PuzzleSlot
              key={i}
              id={i}
              acceptId={val}
              onDrop={handleDrop}
            >
              {val !== null && (
                <PuzzlePiece
                  id={val}
                  pieceStyle={{
                    width: `${pieceSize}px`,
                    height: `${pieceSize}px`,
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `-${(val % 3) * pieceSize}px -${Math.floor(val / 3) * pieceSize}px`,
                    backgroundSize: `${pieceSize * 3}px ${pieceSize * 3}px`,
                  }}
                />
              )}
            </PuzzleSlot>
          ))}
        </div>

        {isCorrect && <p className="mt-4 text-green-500 font-semibold">🎉 Bravo, puzzle complété !</p>}
      </div>
    </div>
  );
};

export default PuzzleBoard;



