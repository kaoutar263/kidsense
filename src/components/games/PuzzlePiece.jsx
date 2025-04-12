import { useDrag } from "react-dnd";

const PuzzlePiece = ({ id, pieceStyle }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "piece",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        ...pieceStyle,
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        border: "1px solid #ccc",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f0f0f0",
      }}
    />
  );
};

export default PuzzlePiece;



