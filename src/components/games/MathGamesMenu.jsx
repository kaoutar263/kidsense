import { useState } from "react";
import CountGame from "./CountGame";
import MatchGame from "./MatchGame";
import PatternGame from "./PatternGame";
import LogiqueGame from "./LogiqueGame";

const MathGamesMenu = ({ onBack }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const renderGame = () => {
    switch (selectedGame) {
      case "count":
        return <CountGame onBack={() => setSelectedGame(null)} />;
      case "match":
        return <MatchGame onBack={() => setSelectedGame(null)} />;
      case "pattern":
        return <PatternGame onBack={() => setSelectedGame(null)} />;
      case "logique":
        return <LogiqueGame onBack={() => setSelectedGame(null)} />;
      default:
        return (
          <div className="relative min-h-screen overflow-hidden bg-[#B6ECF4] flex items-center justify-center">
            {/* 🌟 Bouton retour vers GamesPage */}
            {onBack && (
              <div className="absolute top-4 left-4 z-10">
                <button
                  onClick={onBack}
                  className="bg-[#AEEAF5] text-black px-3 py-2 rounded-xl shadow hover:bg-[#8dd6e4]"
                >
                  ⬅ Retour
                </button>
              </div>
            )}

            {/* Fond décoratif */}
            <div
              className="absolute w-full h-full bg-no-repeat bg-cover z-0"
              style={{ backgroundImage: 'url("/decor-bg.svg")' }}
            ></div>

            {/* Carte centrale */}
            <div className="relative z-10 bg-[#FFF9DC] rounded-[2rem] p-6 shadow-lg w-[330px] text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-1">
                Jeux de mathématiques
              </h2>
              <p className="text-sm text-red-500 mb-4">
                il restera un peu pour prochain stage
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  className="bg-[#B8F3C1] p-4 rounded-xl shadow font-semibold"
                  onClick={() => setSelectedGame("count")}
                >
                  <p className="text-sm">1 2 3</p>
                  <p className="text-sm">Count</p>
                </button>

                <button
                  className="bg-[#AEEAF5] p-4 rounded-xl shadow font-semibold"
                  onClick={() => setSelectedGame("match")}
                >
                  <p className="text-sm">Match</p>
                </button>

                <button
                  className="bg-[#FBC9D4] p-4 rounded-xl shadow font-semibold"
                  onClick={() => setSelectedGame("pattern")}
                >
                  <p className="text-sm leading-none">1<br />2 2<br />3 3 3</p>
                  <p className="text-sm">Pattern</p>
                </button>

                <button
                  className="bg-[#FFEDB8] p-4 rounded-xl shadow font-semibold"
                  onClick={() => setSelectedGame("logique")}
                >
                  <p className="text-2xl">⚙️</p>
                  <p className="text-sm">Logique</p>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div className="min-h-screen overflow-hidden">{renderGame()}</div>;
};

export default MathGamesMenu;



