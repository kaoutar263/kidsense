import { useRef, useEffect } from "react";

const DrawingGame = ({ onBack }) => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#333"; // Couleur du trait
    ctx.lineWidth = 2;        // Épaisseur

    const start = (e) => {
      isDrawing.current = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    const draw = (e) => {
      if (!isDrawing.current) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };

    const stop = () => {
      isDrawing.current = false;
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stop);
    canvas.addEventListener("mouseleave", stop);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stop);
      canvas.removeEventListener("mouseleave", stop);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#DFF6FF] relative">
      {/* Bouton retour */}
      <div className="absolute top-4 left-4">
        <button
          onClick={onBack}
          className="bg-[#AEEAF5] text-black px-3 py-2 rounded-xl shadow hover:bg-[#8dd6e4]"
        >
          ⬅ Retour
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 w-[340px] text-center">
        {/* Titre encadré */}
        <div className="bg-[#c7ecfb] rounded-t-xl py-2 mb-4">
          <h2 className="text-lg font-semibold text-[#333]">Jeu de dessin 🎨</h2>
        </div>

        {/* Canvas centré */}
        <canvas
          ref={canvasRef}
          width={280}
          height={280}
          className="border-2 border-gray-300 rounded-xl mx-auto bg-white"
        />

        <p className="text-sm text-gray-500 mt-3">Dessine librement avec ta souris !</p>
      </div>
    </div>
  );
};

export default DrawingGame;

