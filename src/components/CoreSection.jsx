import React from "react";

const CoreSection = () => {
  return (
    <section className="relative w-full h-auto bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Text Section */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="text-white font-bold text-4xl md:text-5xl">
            The Gold Standard <br />
            in Critical Analysis
          </h1>
        </div>

        {/* Right Card Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 lg:w-1/2">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            The GameX Breakdown
          </h2>
          <ul className="text-gray-700 text-base space-y-2">
            <li>• We collect reviews from the world's top critics.</li>
            <li>• Each review is scored based on its overall quality.</li>
            <li>
              • The summarized weighted average captures the essence of critical
              opinion.
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Floating Scores */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="grid grid-cols-3 gap-6 w-full h-full opacity-20">
          {[49, 48, 91, 95, 88, 89, 99, 23, 8].map((score, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white bg-opacity-20 rounded-lg text-xl text-white font-bold shadow-md w-16 h-16"
            >
              {score}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSection;
