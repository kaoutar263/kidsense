import React, { useState, useEffect } from "react";
import appleImg from "../../assets/apple.webp";
import bananaImg from "../../assets/banana.jpg";

const LogiqueGame = ({ onBack }) => {
  const [images, setImages] = useState([]);
  const [intruderIndex, setIntruderIndex] = useState(null);
  const [message, setMessage] = useState("");

  const generateImages = () => {
    const mainItem = Math.random() > 0.5 ? "apple" : "banana";
    const intruderItem = mainItem === "apple" ? "banana" : "apple";

    const intruderPos = Math.floor(Math.random() * 6);
    const newImages = Array(6).fill(mainItem);
    newImages[intruderPos] = intruderItem;

    setImages(newImages);
    setIntruderIndex(intruderPos);
    setMessage("");
  };

  useEffect(() => {
    generateImages();
  }, []);

  const handleClick = (index) => {
    if (index === intruderIndex) {
      setMessage("✅ Bravo !");
      setTimeout(() => generateImages(), 1000);
    } else {
      setMessage("❌ Essaie encore !");
    }
  };

  const imageMap = {
    apple: appleImg,
    banana: bananaImg,
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
          <h2 className="text-lg font-semibold text-[#333]">Logique</h2>
        </div>

        <h3 className="text-md text-orange-500 font-semibold mb-4">
          Trouve l’intrus 🍏🍌
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {images.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="bg-yellow-100 rounded p-2 hover:bg-yellow-300 shadow"
            >
              <img src={imageMap[item]} alt={item} className="w-14 h-14" />
            </button>
          ))}
        </div>

        {message && <p className="mt-2 text-lg">{message}</p>}
      </div>
    </div>
  );
};

export default LogiqueGame;

