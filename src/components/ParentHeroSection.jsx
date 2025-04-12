import { Link } from "react-router-dom";


const ParentHeroSection = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 py-4 md:flex-row md:items-center md:px-16">

      {/* Colonne gauche : logo + contenu texte + actions */}
      <div className="flex flex-col gap-4 md:w-1/2">
        {/* Logo + boutons en haut */}
        <div className="flex items-center justify-between">
          <img src="/logo.jpg" alt="Kidsense Logo" className="w-28 h-auto" />

          <div className="flex gap-2">
            <Link to="/">
              <button className="bg-green-100 border border-green-400 text-green-800 font-semibold px-4 py-1 rounded-full text-sm hover:bg-green-200">
                Enfant 🧒
              </button>
            </Link>
            <Link to="/parent">
              <button className="bg-green-100 border border-green-400 text-green-800 font-semibold px-4 py-1 rounded-full text-sm hover:bg-green-200">
                Parent 👨‍👩‍👧‍👦
              </button>
            </Link>
          </div>
        </div>

        {/* Titre & Texte */}
        <h1 className="text-4xl font-bold leading-snug mt-4">
          Empowering parents <br />
          with insights into their <br />
          childs growth
        </h1>

        {/* Boutons d’âge */}
        <div className="grid grid-cols-4 gap-2 mt-2 text-sm">
          {"5 6 7 8 9 10 11 12".split(" ").map((age) => (
            <button key={age} className="bg-white border px-4 py-2 rounded shadow-sm hover:bg-gray-100">
              age - {age}
            </button>
          ))}
        </div>

        {/* Bouton orange */}
        <button className="mt-4 bg-orange-400 text-white font-semibold px-6 py-2 rounded hover:bg-orange-500 transition">
          INSCRIRE VOTRE FILS
        </button>

        {/* Lien de connexion */}
        <p className="text-xs text-gray-500 mt-2">
          Êtes-vous déjà inscrit ?
          <Link to="/login" className="text-orange-600 font-semibold ml-1">
            SIGN IN ICI.
          </Link>
        </p>

        {/* Lien mot de passe */}
        <p className="text-xs text-blue-700 underline">Mot De Passe Oublié</p>
      </div>

      {/* Colonne droite : image de la fille */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 animate-bounce-slow">
        <img
          src="/parent.png"
          alt="parent"
          className="w-full max-w-md object-contain transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ParentHeroSection;
