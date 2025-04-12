import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8 flex-1">
      
      {/* Texte à gauche */}
      <div className="md:w-1/2 max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold">Bienvenue, les amis !</h1>
        <p className="text-gray-500 mt-2 text-xl">
          Prêts pour une nouvelle aventure ?
        </p>
        <p className="text-purple-600 text-2xl font-semibold">
          Choisis ce qui te fait envie :
        </p>

        {/* Cartes interactives avec navigation */}
        <div className="mt-6 flex gap-4 flex-wrap">
          <Link to="/games" className="bg-blue-100 p-4 rounded-lg shadow-md w-48 text-center hover:bg-blue-200">
            <p className="text-lg">🎲 S’amuser par un jeu</p>
          </Link>

          <Link to="/stories" className="bg-red-100 p-4 rounded-lg shadow-md w-48 text-center hover:bg-red-200">
            <p className="text-lg">📖 Rêver avec une histoire</p>
          </Link>

          <Link to="/missions" className="bg-yellow-100 p-4 rounded-lg shadow-md w-48 text-center hover:bg-yellow-200">
            <p className="text-lg">🧩 Une nouvelle mission</p>
          </Link>
        </div>
      </div>

      {/* Image à droite */}
      <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
        <img
          src="/koko.png"
          alt="Illustration d'accueil"
          className="w-full max-w-2xl max-h-[500px] object-contain transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      
    </div>
  );
};

export default HeroSection;



  