import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const AnimatedResearchSection = () => {
  const borderRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Animate the border gradient
    gsap.to(borderRef.current, {
      backgroundPosition: "200% 0",
      duration: 3,
      repeat: -1,
      ease: "linear"
    });
    // Animate the text
    gsap.fromTo(
      textRef.current,
      { scale: 0.7, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" }
    );
  }, []);

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <button
        ref={borderRef}
        className="p-[4px] rounded-3xl w-full max-w-xl mx-auto focus:outline-none"
        style={{
          background:
            "linear-gradient(270deg, #0f172a, #2563eb, #0ea5e9, #7c3aed, #0f172a)",
          backgroundSize: "200% 200%",
          transition: "background-position 0.5s"
        }}
        onClick={() => navigate("/research")}
        aria-label="Go to Research"
        type="button"
      >
        <div className="bg-[#0d3570] rounded-3xl flex justify-center items-center h-40 sm:h-48 md:h-56 cursor-pointer">
          <h2
            ref={textRef}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-white animate-gradient"
          >
            Research Publications
          </h2>
        </div>
      </button>
      <style>
        {`
          @media (max-width: 640px) {
            .h-40 { height: 8rem; }
          }
          @media (min-width: 640px) {
            .h-48 { height: 12rem; }
          }
          @media (min-width: 768px) {
            .h-56 { height: 14rem; }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedResearchSection;