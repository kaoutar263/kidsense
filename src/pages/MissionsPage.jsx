import { useState } from "react";
import planetMission from "../assets/mission-planet.png";
import wordsMission from "../assets/mission-words.png";
import puzzleMission from "../assets/mission-puzzle.png";
import MissionCuriosity from "../components/missions/MissionCuriosity";

const missions = [
  {
    id: 1,
    title: "Mission : Sauver la Planète",
    description: "Accomplir des tâches pour protéger l'environnement et sauver la planète.",
    image: planetMission,
    titleColor: "text-red-500",
    progress: 80,
  },
  {
    id: 2,
    title: "Le Défi des Mots Magiques",
    description: "Apprendre de nouveaux mots et phrases tout en s'amusant.",
    image: wordsMission,
    titleColor: "text-cyan-700",
    progress: 40,
  },
  {
    id: 3,
    title: "L'Énigme du Professeur Curiosité",
    description: "Résoudre une série d'énigmes pour aider le Professeur Curiosité à retrouver un objet perdu.",
    image: puzzleMission,
    titleColor: "text-yellow-600",
    progress: 60,
  },
];

const MissionsPage = () => {
  const [selectedMission, setSelectedMission] = useState(null);

  if (selectedMission === 3) {
    return <MissionCuriosity onBack={() => setSelectedMission(null)} />;
  }

  return (
    <div className="bg-yellow-50 min-h-screen p-10">
      {/* Titre */}
      <h1 className="text-3xl text-center text-purple-600 font-bold mb-10 flex items-center justify-center gap-2">
        🏆 une nouvelle mission 🏆
      </h1>

      {/* Liste des missions */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-yellow-100"
            onClick={() => setSelectedMission(mission.id)}
          >
            {/* Image de la mission */}
            <img src={mission.image} alt={mission.title} className="w-14 h-14 rounded-full" />

            {/* Infos */}
            <div className="flex-1">
              <h2 className={`text-lg font-semibold ${mission.titleColor}`}>{mission.title}</h2>
              <p className="text-gray-600">{mission.description}</p>

              {/* Barre de progression */}
              <div className="w-full bg-gray-200 h-2 mt-3 rounded-full">
                <div
                  className="h-2 bg-green-400 rounded-full"
                  style={{ width: `${mission.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionsPage;
