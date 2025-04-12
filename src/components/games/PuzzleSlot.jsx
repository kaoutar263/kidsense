import { useDrop } from "react-dnd";

const PuzzleSlot = ({ id, acceptId, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "piece",
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="w-[100px] h-[100px] border border-gray-400"
      style={{ backgroundColor: isOver ? "#d0f0ff" : "transparent" }}
    >
      {children}
    </div>
  );
};

export default PuzzleSlot;
