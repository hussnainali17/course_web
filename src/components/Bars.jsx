import { useNavigate } from "react-router-dom";
import React from "react";

const Bars = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-6 px-4 sm:px-0">
      {/* Bar 1 */}
      <div className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#2193b0] via-[#6dd5ed] to-[#0d3570] min-h-[180px] flex flex-col justify-end p-5 text-white shadow-lg">
        {/* Image placeholder */}
        <div className="absolute inset-0 z-0 flex items-start justify-center">
          {/* Replace with your image */}
          <div className="w-full h-32 bg-gray-400 opacity-40"></div>
        </div>
        <div className="relative z-10">
          <h2 className="font-bold text-xl mb-2">
            Everything You Need To Ace USMLE in One Platform
          </h2>
          <p className="text-sm">
            Gain Access to all USMLE resources our platform provides from
            lectures to QBanks and self Assessments in single subscription.
          </p>
        </div>
      </div>
      {/* Bar 2 */}
      <div className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#1ca6d9] via-[#0d3570] to-[#23243a] min-h-[160px] flex flex-col justify-end p-5 text-white shadow-lg">
        {/* Image placeholder */}
        <div className="absolute right-4 bottom-4 flex gap-2 z-0">
          {/* Platform icons */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
            alt="Apple"
            className="w-8 h-8 rounded-full bg-white p-1"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            alt="Android"
            className="w-8 h-8 rounded-full bg-white p-1"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
            alt="Windows"
            className="w-8 h-8 rounded-full bg-white p-1"
          />
        </div>
        <div className="relative z-10">
          <h2 className="font-bold text-lg mb-2">
            Access iMD App on any of your Device
          </h2>
          <p className="text-sm mb-2">
            Use your account and switch between devices seamlessly. After
            subscribing you will be emailed installation link and guide to use.
          </p>
          <span className="text-xs">Fully supported on</span>
        </div>
      </div>
      {/* Bar 3 */}
      <div className="rounded-2xl overflow-hidden relative bg-gradient-to-b from-[#0d3570] to-[#23243a] min-h-[120px] flex flex-col justify-end p-5 text-white shadow-lg">
        {/* Image placeholder */}
        {/* You can add an icon or leave empty */}
        <div className="relative z-10">
          <h2 className="font-bold text-lg mb-2">
            One Login For Unlimited Learning with iMD Resources
          </h2>
          <div className="flex gap-3 mt-3">
            <button
              className="bg-white text-[#0d3570] font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-100 transition"
              onClick={() => navigate("/pricing")}
            >
              Subscribe
            </button>
            <button
              className="bg-white text-[#0d3570] font-semibold px-4 py-2 rounded-full shadow hover:bg-blue-100 transition"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bars;