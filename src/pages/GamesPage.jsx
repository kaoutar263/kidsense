import { useState } from "react";
import mathGame from "../assets/math-game.png";
import drawingGame from "../assets/drawing-game.png";
import geometryGame from "../assets/geometry-game.png";
import puzzleIcon from "../assets/puzzle1.png"; // Ajoute une image si tu veux pour l’icône du puzzle

// DnD pour le puzzle
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Composants de jeux
import PuzzleBoard from "../components/games/PuzzleBoard";
import MathGamesMenu from "../components/games/MathGamesMenu";
import DrawingGamesMenu from "../components/games/DrawingGamesMenu";
import GeometryGamesMenu from "../components/games/GeometryGamesMenu";

// Images de puzzle
import elephant from "../assets/puzzle1.png";
import lion from "../assets/puzzle2.jpg";
import panda from "../assets/puzzle3.png";

const puzzleImages = [elephant, lion, panda];

const games = [
  { id: 1, name: "Jeux de mathématique", key: "math", img: mathGame, color: "border-purple-500 bg-purple-100" },
  { id: 2, name: "Jeux de dessin", key: "drawing", img: drawingGame, color: "border-green-500 bg-green-100" },
  { id: 3, name: "Jeux de Géométrie", key: "geometry", img: geometryGame, color: "border-orange-500 bg-orange-100" },
  { id: 4, name: "Puzzle de formes", key: "puzzle", img: puzzleIcon, color: "border-blue-500 bg-blue-100" },
];

const GamesPage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const renderSelectedGame = () => {
    switch (selectedGame) {
      case "math":
        return <MathGamesMenu onBack={() => setSelectedGame(null)} />;
      case "drawing":
        return <DrawingGamesMenu onBack={() => setSelectedGame(null)} />;
      case "geometry":
        return <GeometryGamesMenu onBack={() => setSelectedGame(null)} />;
      case "puzzle":
        const randomImage = puzzleImages[Math.floor(Math.random() * puzzleImages.length)];
        return (
          <DndProvider backend={HTML5Backend}>
            <PuzzleBoard image={randomImage} onBack={() => setSelectedGame(null)} />
          </DndProvider>
        );
      default:
        return null;
    }
  };
  if (selectedGame === "puzzle") {
    const randomImage = puzzleImages[Math.floor(Math.random() * puzzleImages.length)];
    return (
      <DndProvider backend={HTML5Backend}>
        <PuzzleBoard image={randomImage} onBack={() => setSelectedGame(null)} />
      </DndProvider>
    );
  }
  
  // Menu principal
  if (selectedGame) return renderSelectedGame();

  return (
    <div className="flex flex-col items-center bg-blue-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-orange-500 mb-8">S’amuser par un jeu</h1>

      <div className="flex items-center gap-4">
        <div className="flex gap-6 bg-white p-6 rounded-lg shadow-lg">
          {games.map((game) => (
            <div
              key={game.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedGame(game.key)}
            >
              <div className={`p-4 rounded-lg shadow-md border-4 ${game.color}`}>
                <img src={game.img} alt={game.name} className="w-24 h-24" />
              </div>
              <div className="mt-2 px-4 py-2 text-lg font-semibold rounded-lg border-2 border-blue-300 bg-white text-center">
                {game.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;




