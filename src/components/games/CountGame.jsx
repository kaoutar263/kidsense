import React, { useState, useEffect } from "react";
import bearImg from "../../assets/bear.png";

const CountGame = ({ onBack }) => {
  const [bearCount, setBearCount] = useState(0);
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const generateNewQuestion = () => {
    const count = Math.floor(Math.random() * 5) + 2; // 2 à 6
    setBearCount(count);

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
    if (num === bearCount) {
      setMessage("✅ Bravo !");
      setTimeout(generateNewQuestion, 1000);
    } else {
      setMessage("❌ Essaie encore !");
    }
  };

  const getButtonColor = (num) => {
    const colorMap = {
      1: "bg-pink-300",
      2: "bg-blue-200",
      3: "bg-gray-200",
      4: "bg-green-200",
      5: "bg-yellow-200",
      6: "bg-orange-200",
    };
    return colorMap[num] || "bg-gray-100";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#DFF6FF] relative">
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
          <h2 className="text-lg font-semibold text-[#333]">Count</h2>
        </div>

        <h3 className="text-md text-orange-500 font-semibold mb-4">
          Combien d'ours ? 🐻
        </h3>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[...Array(bearCount)].map((_, i) => (
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

export default CountGame;

