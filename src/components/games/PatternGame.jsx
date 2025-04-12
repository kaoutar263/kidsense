import React, { useState, useEffect } from "react";
import appleImg from "../../assets/apple.webp";
import bananaImg from "../../assets/banana.jpg";

const patterns = [
  {
    sequence: ["apple", "banana", "apple", "banana"],
    correct: "apple",
  },
  {
    sequence: ["banana", "apple", "banana", "apple"],
    correct: "banana",
  },
  {
    sequence: ["apple", "apple", "banana", "apple", "apple"],
    correct: "banana",
  },
];

const imageMap = {
  apple: appleImg,
  banana: bananaImg,
};


const PatternGame = ({ onBack }) => {
  const [currentPattern, setCurrentPattern] = useState(null);
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateNewPattern();
  }, []);

  const generateNewPattern = () => {
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    setCurrentPattern(pattern);

    const optionSet = new Set([pattern.correct]);
    while (optionSet.size < 3) {
      const random = Math.random() > 0.5 ? "apple" : "banana";
      optionSet.add(random);
    }

    const shuffledOptions = [...optionSet].sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);
    setMessage("");
  };

  const handleAnswer = (choice) => {
    if (choice === currentPattern.correct) {
      setMessage("✅ Bravo !");
      setTimeout(generateNewPattern, 1000);
    } else {
      setMessage("❌ Essaie encore !");
    }
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
          <h2 className="text-lg font-semibold text-[#333]">Pattern</h2>
        </div>

        <h3 className="text-md text-orange-500 font-semibold mb-4">
          Complète la séquence 🍎🍌
        </h3>

        <div className="flex justify-center mb-4">
          {currentPattern &&
            currentPattern.sequence.map((item, idx) => (
              <img
                key={idx}
                src={imageMap[item]}
                alt={item}
                className="w-12 h-12 mx-1"
              />
            ))}
          <span className="text-2xl ml-2">❓</span>
        </div>

        <div className="flex justify-center gap-4">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className="p-2 rounded-xl bg-pink-100 hover:bg-pink-300 shadow"
            >
              <img src={imageMap[opt]} alt={opt} className="w-10 h-10" />
            </button>
          ))}
        </div>

        {message && <p className="mt-4 text-lg">{message}</p>}
      </div>
    </div>
  );
};

export default PatternGame;



