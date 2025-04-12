import { useState } from "react";
import stories from "../../data/storiesData";

const StoryPlayer = ({ story, onBack }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const currentSlide = stories.find((s) => s.id === story.id)?.slides[currentPage];

  const nextPage = () => {
    if (currentPage < story.slides.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (!currentSlide) return null;

  return (
    <div className="min-h-screen bg-[#FFEAF5] flex flex-col items-center justify-center relative">
      <div className="absolute top-4 left-4">
        <button
          onClick={onBack}
          className="bg-[#AEEAF5] text-black px-4 py-2 rounded-xl shadow"
        >
          ⬅ Retour
        </button>
      </div>

      <h1 className="text-3xl text-center font-bold text-red-600 mt-4 mb-2">
        {story.title}
      </h1>

      <div className="bg-white shadow-lg rounded-2xl w-[700px] h-[400px] flex flex-col items-center justify-center text-center p-6">
        <img
          src={currentSlide.image}
          alt="illustration"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <p className="text-xl font-handwritten text-[#222]">{currentSlide.text}</p>

        {currentPage < story.slides.length - 1 && (
          <button
            onClick={nextPage}
            className="mt-4 bg-[#EACBB8] px-6 py-2 rounded shadow hover:bg-[#d8bba6]"
          >
            next chapter
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryPlayer;