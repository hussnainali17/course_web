import React from "react";
import Layout from "../components/Layout";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "QBank Access",
    items: [
      { icon: "📘", text: "UWorld QBank 2025" },
      { icon: "📗", text: "AMBOSS QBank 2025" },
      { icon: "📕", text: "CanadaQBank 2025" },
      { icon: "📙", text: "AceQBank 2025" },
      { icon: "🧠", text: "USMLE-Rx QBank" },
      { icon: "📝", text: "NBMEs Self-Assessments" },
      { icon: "📒", text: "BoardVitals QBank" },
      { icon: "📚", text: "BMJ OnExamination QBank" },
      { icon: "🖥", text: "RADPrimer Lessons & QBank" },
      { icon: "📓", text: "AMEDEX QBank 2025" },
      { icon: "📖", text: "MPlusX QBank 2025" },
      { icon: "🔍", text: "PassMedicine QBank" },
      { icon: "❓", text: "PrometricMCQ QBank" },
      { icon: "🎯", text: "TrueLearn QBank" },
    ],
  },
  {
    title: "High-Yield Video Lectures & Visual Learning",
    items: [
      { icon: "🎓", text: "Boards & Beyond" },
      { icon: "🩻", text: "Radiopaedia" },
      { icon: "🧬", text: "Pixorize" },
      { icon: "📺", text: "Lecturio" },
      { icon: "📊", text: "Osmosis" },
      { icon: "📚", text: "Oakstone CME" },
      { icon: "🎙", text: "AccessMedicine Lectures" },
      { icon: "🏥", text: "Mayo Clinic Learning" },
      { icon: "❤", text: "123Sonography (Echo, POCUS)" },
      { icon: "🔬", text: "MHMedical" },
      { icon: "🧑‍🏫", text: "Doctors In Training" },
      { icon: "🏫", text: "Kaplan Medical" },
    ],
  },
  {
    title: "Clinical Practice Tools",
    subtitle: "Trusted by healthcare professionals worldwide:",
    items: [
      { icon: "🧾", text: "UpToDate" },
      { icon: "💊", text: "Epocrates" },
      { icon: "🖼", text: "VisualDx" },
      { icon: "📘", text: "eTG Therapeutic Guidelines" },
      { icon: "🦠", text: "Sanford Guide" },
      { icon: "📰", text: "RSNA Journals" },
    ],
  },
  {
    title: "Pharmacology & Drug References",
    items: [
      { icon: "💼", text: "Lexicomp" },
      { icon: "📈", text: "Micromedex" },
    ],
  },
];

const fadeIn =
  "transition-all duration-700 ease-out opacity-0 translate-y-8 animate-fadein";
const fadeInKeyframes = `
@keyframes fadein {
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fadein {
  animation: fadein 0.8s forwards;
}
`;

const Services = () => {
  return (
    <Layout>
      <style>{fadeInKeyframes}</style>
      <section className="bg-gradient-to-br from-[#e0e7ff] via-[#f0f7ff] to-[#e0f2fe] min-h-[70vh] py-12 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold  mb-8 text-center bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow">
            iMD App Database
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((section, idx) => (
              <div
                key={section.title}
                className={`rounded-2xl shadow-xl bg-white/90 p-6 border border-blue-100 hover:scale-[1.025] hover:shadow-2xl transition-all ${fadeIn}`}
                style={{ animationDelay: `${0.1 + idx * 0.15}s` }}
              >
                <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  {section.title}
                </h2>
                {section.subtitle && (
                  <div className="text-blue-700 mb-2 text-sm">{section.subtitle}</div>
                )}
                <ul className="space-y-2 mt-3">
                  {section.items.map((item, i) => (
                    <li
                      key={item.text}
                      className="flex items-center gap-3 text-blue-900 text-base font-medium group"
                      style={{
                        animationDelay: `${0.2 + i * 0.05}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                      <span className="group-hover:text-blue-600 transition-colors">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;