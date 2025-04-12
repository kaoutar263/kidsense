import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import storyData from "../data/storiesData"; // ✅

const StoryReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = storyData.find((s) => s.id === parseInt(id)); // ✅ corrigé ici
  const [pageIndex, setPageIndex] = useState(0);

  if (!story) return <p>Histoire introuvable</p>;

  return (
    <div className="min-h-screen bg-[#FFEAF5] flex flex-col items-center p-6 font-handwriting relative">
      <button
        onClick={() => navigate("/stories")}
        className="absolute top-4 left-4 bg-[#AEEAF5] px-4 py-2 rounded-xl text-black shadow"
      >
        ⬅ Retour
      </button>

      <h1 className="text-3xl text-red-600 font-bold text-center mb-6 max-w-xl">
        {story.title}
      </h1>

      <div className="bg-black rounded-2xl shadow-lg p-6 w-full max-w-[700px] text-white text-center">
        <img
          src={story.slides[pageIndex].image}
          alt="Illustration"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <p className="text-xl leading-relaxed">
          {story.slides[pageIndex].text}
        </p>

        <button
          onClick={() =>
            pageIndex < story.slides.length - 1
              ? setPageIndex(pageIndex + 1)
              : navigate("/stories")
          }
          className="mt-6 bg-[#FCD4B2] px-6 py-2 rounded-full text-black shadow hover:bg-[#eac39e]"
        >
          {pageIndex < story.slides.length - 1 ? "chapitre suivant" : "terminer l'histoire"}
        </button>
      </div>
    </div>
  );
};

export default StoryReader;


