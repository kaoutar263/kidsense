import React, { useState, useEffect } from "react";
import bearImg from "../../assets/bear.png";

const MatchGame = ({ onBack }) => {
  const [correctCount, setCorrectCount] = useState(0);
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const count = Math.floor(Math.random() * 5) + 1;
    setCorrectCount(count);

    const wrongAnswers = new Set();
    while (wrongAnswers.size < 3) {
      const rand = Math.floor(Math.random() * 6) + 1;
      if (rand !== count) wrongAnswers.add(rand);
    }

    const shuffled = [...wrongAnswers, count].sort(() => Math.random() - 0.5);
    setOptions(shuffled);
    setMessage("");
  };

  const checkAnswer = (num) => {
    if (num === correctCount) {
      setMessage("✅ Bravo !");
      setTimeout(generateQuestion, 1000);
    } else {
      setMessage("❌ Essaie encore !");
    }
  };

  const getButtonColor = (num) => {
    const colorMap = {
      1: "bg-pink-300",
      2: "bg-blue-200",
      4: "bg-green-200",
      6: "bg-yellow-200",
    };
    return colorMap[num] || "bg-gray-200";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#DFF6FF] relative">
      {/* Header stylisé */}
      <div className="absolute top-4 left-4">
        <button
          onClick={onBack}
          className="bg-[#AEEAF5] text-black px-3 py-2 rounded-xl shadow hover:bg-[#8dd6e4]"
        >
          ⬅ Retour
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[340px] text-center">
        <div className="bg-[#c7ecfb] rounded-t-xl py-2 mb-4">
          <h2 className="text-lg font-semibold text-[#333]">Match</h2>
        </div>

        <h3 className="text-md text-orange-500 font-semibold mb-4">
          How many bears? 🐻
        </h3>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[...Array(correctCount)].map((_, i) => (
            <img
              key={i}
              src={bearImg}
              alt="bear"
              className="w-16 h-16"
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {options.map((num, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-xl text-black shadow ${getButtonColor(num)} hover:opacity-80`}
              onClick={() => checkAnswer(num)}
            >
              {num}
            </button>
          ))}
        </div>

        {message && <p className="mt-4 text-lg">{message}</p>}
      </div>
    </div>
  );
};

export default MatchGame;

