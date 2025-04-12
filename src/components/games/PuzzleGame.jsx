// PuzzleGame.jsx
import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import elephantImg from "../../assets/puzzle1.png"; // ton image

const size = 100;
const rows = 3;
const cols = 3;

const PuzzlePiece = ({ row, col, image, index }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "piece",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${image})`,
        backgroundPosition: `-${col * size}px -${row * size}px`,
        backgroundSize: `${cols * size}px ${rows * size}px`,
        opacity: isDragging ? 0.4 : 1,
        border: "1px solid #ccc",
        cursor: "grab",
      }}
    />
  );
};

const DropZone = ({ expectedIndex, placedPieces, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "piece",
    drop: (item) => onDrop(expectedIndex, item.index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const placedPiece = placedPieces[expectedIndex];
  const row = Math.floor(placedPiece?.index / cols);
  const col = placedPiece?.index % cols;

  return (
    <div
      ref={drop}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: isOver ? "#f0f0f0" : "#e2e8f0",
        border: "1px dashed #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {placedPiece && (
        <PuzzlePiece
          row={row}
          col={col}
          image={elephantImg}
          index={placedPiece.index}
        />
      )}
    </div>
  );
};

const PuzzleGame = () => {
  const pieces = [];
  for (let i = 0; i < rows * cols; i++) {
    pieces.push(i);
  }

  const [shuffled, setShuffled] = useState(pieces.sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState({});

  const handleDrop = (dropIndex, draggedIndex) => {
    setPlaced((prev) => ({
      ...prev,
      [dropIndex]: { index: draggedIndex },
    }));
  };

  const isCompleted = Object.keys(placed).length === rows * cols &&
    Object.entries(placed).every(([dropIdx, data]) => parseInt(dropIdx) === data.index);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#DFF6FF] flex flex-col items-center justify-center p-6">
        <h2 className="text-xl font-bold mb-4">Puzzle de formes 🧩</h2>
        <p className="mb-4 text-gray-700">Assemble l'image correctement !</p>

        <div className="grid grid-cols-3 gap-1 mb-6">
          {pieces.map((_, idx) => (
            <DropZone
              key={idx}
              expectedIndex={idx}
              placedPieces={placed}
              onDrop={handleDrop}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {shuffled.map((index) => {
            const alreadyPlaced = Object.values(placed).some((p) => p.index === index);
            const row = Math.floor(index / cols);
            const col = index % cols;
            return !alreadyPlaced ? (
              <PuzzlePiece
                key={index}
                row={row}
                col={col}
                image={elephantImg}
                index={index}
              />
            ) : null;
          })}
        </div>

        {isCompleted && <p className="mt-4 text-green-600 font-bold">✅ Bravo ! Tu as réussi le puzzle 🎉</p>}
      </div>
    </DndProvider>
  );
};

export default PuzzleGame;


