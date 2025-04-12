import { useNavigate } from "react-router-dom";
import oceanStory from "../assets/ocean-story.png"; // Image de l'histoire 1
import pirateStory from "../assets/pirate-story.png"; // Image de l'histoire 2
import dreamStory from "../assets/dream-story.png"; // Image de l'histoire 3



const stories = [
  {
    id: 1,
    title: "L’Océan Magique du Livre Oublié",
    img: oceanStory,
    borderColor: "border-brown-500",


  },
  {
    id: 2,
    title: "Le Journal de Capitaine Plume et son Navire Enchanté",
    img: pirateStory,
    borderColor: "border-red-500",
  },
  {
    id: 3,
    title: "Le Voyage de Petit Rêveur dans le Ciel Étoilé",
    img: dreamStory,
    borderColor: "border-purple-500",
  },
];

const StoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-pink-100 min-h-screen p-10">
      {/* Titre */}
      <h1 className="text-3xl font-bold text-red-500 mb-8">📖 Rêver avec une histoire</h1>

      {/* Conteneur des histoires */}
      <div className="flex items-center gap-4">
        {/* Flèche gauche */}
        <button className="text-4xl text-gray-600 hover:text-gray-800">{"<"}</button>

        {/* Liste des histoires */}
        <div className="flex gap-6 bg-white p-6 rounded-lg shadow-lg">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate(`/story/${story.id}`)}
            >
              <div className={`p-4 rounded-lg shadow-md border-4 ${story.borderColor}`}>
                <img src={story.img} alt={story.title} className="w-32 h-32" />
              </div>
              <p className="mt-2 text-center text-gray-700 font-semibold">{story.title}</p>
            </div>
          ))}
        </div>

        {/* Flèche droite */}
        <button className="text-4xl text-gray-600 hover:text-gray-800">{">"}</button>
      </div>
    </div>
  );
};

export default StoriesPage;
