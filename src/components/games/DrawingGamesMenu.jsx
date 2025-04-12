import { useState } from "react";
import DrawingGame from "./DrawingGame";

const DrawingGamesMenu = ({ onBack }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const renderGame = () => {
    switch (selectedGame) {
      case "libre":
        return <DrawingGame onBack={() => setSelectedGame(null)} />;
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

            {/* Menu principal des jeux de dessin */}
            <div className="relative z-10 bg-white rounded-3xl p-6 shadow-lg w-[340px] text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Jeux de dessin 🎨
              </h2>
              <p className="text-sm text-red-500 mb-4">
                Choisis un jeu pour t’exprimer avec des couleurs
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  className="bg-[#AEEAF5] p-4 rounded-xl shadow font-semibold"
                  onClick={() => setSelectedGame("libre")}
                >
                  <p className="text-2xl">✏️</p>
                  <p className="text-sm font-bold">Dessiner libre</p>
                </button>

                <button className="bg-[#FBC9D4] p-4 rounded-xl shadow font-semibold" disabled>
                  <p className="text-2xl">🎨</p>
                  <p className="text-sm text-gray-500">Coloriage</p>
                </button>

                <button className="bg-[#B8F3C1] p-4 rounded-xl shadow font-semibold col-span-2" disabled>
                  <p className="text-2xl">📐</p>
                  <p className="text-sm text-gray-500">Reproduire une forme</p>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div className="min-h-screen overflow-hidden">{renderGame()}</div>;
};

export default DrawingGamesMenu;

