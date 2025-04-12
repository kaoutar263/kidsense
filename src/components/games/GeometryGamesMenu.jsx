import { useState } from "react";
import GeometryGame from "./GeometryGame"; // Jeu de reconnaissance
import PuzzleGame from "./PuzzleGame";
import TangramGame from "./TangramGame";


const GeometryGamesMenu = ({ onBack }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const renderGame = () => {
    switch (selectedGame) {
      case "recognize":
        return <GeometryGame onBack={() => setSelectedGame(null)} />;
        case "puzzle":
  return <PuzzleGame onBack={() => setSelectedGame(null)} />;
  case "tangram":
  return <TangramGame onBack={() => setSelectedGame(null)} />;


      // Les autres jeux à venir...
      default:
        return (
          <div className="relative min-h-screen overflow-hidden bg-[#DFF6FF] flex items-center justify-center">
            {/* Bouton retour vers GamesPage */}
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

            {/* Carte principale */}
            <div className="bg-[#FFF9DC] rounded-[2rem] p-6 shadow-lg w-[340px] text-center z-10">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Jeux de géométrie 📐
              </h2>
              <p className="text-sm text-red-500 mb-4">
                Apprends en jouant avec les formes !
              </p>

              <div className="grid grid-cols-1 gap-4">
                <button
                  className="bg-[#B8F3C1] p-4 rounded-xl shadow font-semibold"
                  onClick={() => setSelectedGame("recognize")}
                >
                  <p className="text-2xl">🔺</p>
                  <p className="text-sm font-bold">Reconnaitre une forme</p>
                </button>
                <button
  className="bg-[#FBC9D4] p-4 rounded-xl shadow font-semibold"
  onClick={() => setSelectedGame("puzzle")}
>
  <p className="text-2xl">🧩</p>
  <p className="text-sm font-bold">Puzzle de formes</p>
</button>

<button
  className="bg-[#AEEAF5] p-4 rounded-xl shadow font-semibold"
  onClick={() => setSelectedGame("tangram")}
>
  <p className="text-2xl">📐</p>
  <p className="text-sm font-bold">Tangram</p>
</button>

              </div>
            </div>
          </div>
        );
    }
  };

  return <div className="min-h-screen">{renderGame()}</div>;
};

export default GeometryGamesMenu;
