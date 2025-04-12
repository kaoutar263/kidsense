import { useState } from "react";
import storyImg from "../../assets/m1.png"; // Remplace avec ton image
import logicImg from "../../assets/m2.png";
import objectImg from "../../assets/m3.png";

const MissionCuriosity = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const goToNext = () => setStep((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-[#FFF8DC] flex flex-col items-center p-6 text-gray-800 relative">
      <button onClick={onBack} className="absolute top-4 left-4 bg-[#AEEAF5] px-4 py-2 rounded-xl shadow">
        ⬅ Retour
      </button>

      <h1 className="text-2xl font-bold text-center mb-6 text-yellow-700">🧠 L'Énigme du Professeur Curiosité</h1>

      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md">
          <img src={storyImg} alt="Histoire" className="w-full h-52 object-cover mb-4 rounded-lg" />
          <p className="mb-4">Le professeur a perdu son carnet dans le jardin magique. Où l’a-t-il vu pour la dernière fois ?</p>
          <div className="flex flex-col gap-2">
            <button onClick={goToNext} className="bg-green-200 py-2 rounded hover:bg-green-300">Sous l’arbre étoilé</button>
            <button className="bg-red-200 py-2 rounded hover:bg-red-300">Dans la bibliothèque</button>
            <button className="bg-red-200 py-2 rounded hover:bg-red-300">Sur le toit</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md">
          <img src={logicImg} alt="Mini-jeu logique" className="w-full h-52 object-cover mb-4 rounded-lg" />
          <p className="mb-4">Bravo ! Pour ouvrir la cachette, clique ici 👇</p>
          <button onClick={goToNext} className="mt-2 bg-blue-400 px-4 py-2 text-white rounded">Résoudre l’énigme 🔐</button>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md">
          <img src={objectImg} alt="Objet retrouvé" className="w-full h-52 object-cover mb-4 rounded-lg" />
          <h2 className="text-green-600 font-bold text-xl mb-2">🎉 Mission réussie !</h2>
          <p>Tu as aidé le professeur à retrouver son carnet secret !</p>
          <button onClick={onBack} className="mt-4 bg-yellow-400 px-6 py-2 rounded">Retour aux missions</button>
        </div>
      )}
    </div>
  );
};

export default MissionCuriosity;
