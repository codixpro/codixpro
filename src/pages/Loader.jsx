import React, { useEffect, useState } from "react";
import { LaserFlow } from "../components/LaserFlow"; // Make sure this path is correct

const Loader = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2000); // Show for 2s
    const end = setTimeout(() => onFinish && onFinish(), 1500);
    return () => {
      clearTimeout(timer);
      clearTimeout(end);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black overflow-hidden transition-opacity duration-700 z-50 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      

      {/* Metallic Logo/Text */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 animate-shine">
          CodixPro
        </h1>
        <p className="text-gray-300 mt-2 text-center">
          Crafting Digital Experiences
        </p>
        
      </div>
      {/* Background LaserFlow animation */}
      <div className="absolute bottom-[-15%] left-[-20%] inset-0">
        <LaserFlow color="#FF79C6" />
      </div>
    </div>
  );
};

export default Loader;
