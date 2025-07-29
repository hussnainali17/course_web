import React from "react";
import Layout from "../components/Layout";

const journals = [
  {
    name: "PubMed",
    img: "https://i.postimg.cc/Bt9Zxyk1/IMG-20250729-WA0030.jpg", // Example logo
  },
  {
    name: "Google Scholar",
    img: "https://i.postimg.cc/FFfjVLw9/IMG-20250729-WA0028.jpg",
  },
  {
    name: "Embase",
    img: "https://i.postimg.cc/Xqy7B3Hb/IMG-20250729-WA0027.jpg",
  },
  {
    name: "Scopus",
    img: "https://i.postimg.cc/8kqLKCVL/IMG-20250729-WA0029.jpg",
  },
  {
    name: "Fortune",
    img: "https://i.postimg.cc/3wHLPB5C/Whats-App-Image-2025-07-29-at-22-19-43-acc37809.jpg", // Leave empty or add a logo if available
  },
];

const fadeInKeyframes = `
@keyframes fadein {
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fadein {
  opacity: 0;
  transform: translateY(30px);
  animation: fadein 0.8s forwards;
}
`;

const Reseach = () => {
  return (
    <Layout>
      <style>{fadeInKeyframes}</style>
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 min-h-[70vh] py-12 px-4 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 text-center bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow">
            Research Publications
          </h1>
          <p className="text-blue-900 text-lg md:text-xl mb-8 text-center font-medium">
            We are also providing{" "}
            <span className="font-bold text-blue-800">Research opportunities</span>{" "}
            from Letter to Editor (LTE), Cross Sectional Studies, Cohort Studies,
            Systemic Reviews to the prestigious Meta Analysis in Internationally
            Renowned journals such as:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {journals.map((j, i) => (
              <li
                key={j.name}
                className="flex flex-col items-center bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-100 rounded-2xl p-[3px] shadow-lg hover:scale-[1.04] transition-all animate-fadein"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
              >
                <div className="flex flex-col items-center w-full h-full bg-white/90 rounded-2xl p-4">
                  <div className="w-full h-36 flex items-center justify-center bg-white  overflow-hidden mb-4">
                    {j.img ? (
                      <img
                        src={j.img}
                        alt={j.name + " logo"}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-xl"></div>
                    )}
                  </div>
                  <span className="text-xl font-semibold text-blue-900 text-center">
                    {j.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <div className="text-lg md:text-xl text-blue-800 font-semibold mb-2">
              Our Moto
            </div>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              "We serve from Scratch to Match"
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reseach;