import { useEffect, useState } from "react";

const ParentDashboard = () => {
  const [childData, setChildData] = useState(null);

  useEffect(() => {
    // TODO: récupérer les données de l’enfant depuis un backend ou localStorage
    setChildData({
      name: "Lina",
      age: 8,
      progress: {
        math: 80,
        logic: 60,
        drawing: 70,
        stories: ["Le Petit Rêveur", "Capitaine Plume"],
      },
      strengths: ["Logique", "Créativité"],
      weaknesses: ["Attention", "Calcul mental"],
    });
  }, []);

  if (!childData) return <p>Chargement...</p>;

  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <h1 className="text-2xl font-bold mb-6">📊 Tableau de bord de {childData.name}</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Progression par domaine */}
        {Object.entries(childData.progress).map(([key, value]) =>
          key !== "stories" ? (
            <div key={key} className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold capitalize">{key}</h2>
              <div className="bg-gray-200 h-2 rounded-full mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${value}%` }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{value}% complété</p>
            </div>
          ) : null
        )}

        {/* Liste des histoires */}
        <div className="bg-white p-4 rounded shadow col-span-2">
          <h2 className="font-semibold mb-2">📚 Histoires lues</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {childData.progress.stories.map((story, index) => (
              <li key={index}>{story}</li>
            ))}
          </ul>
        </div>

        {/* Analyse IA */}
        <div className="bg-white p-4 rounded shadow col-span-2">
          <h2 className="font-semibold mb-2">🧠 Analyse IA (bêta)</h2>
          <p><strong>Forces :</strong> {childData.strengths.join(", ")}</p>
          <p><strong>Faiblesses :</strong> {childData.weaknesses.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;

