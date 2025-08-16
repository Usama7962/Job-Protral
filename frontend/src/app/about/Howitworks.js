import React from "react";
import { steps } from "../../constant/about.js"; // adjust path if needed

const Howitworks = () => {
  return (
    <div className="w-full flex flex-col items-center text-center justify-center space-y-6 py-4 px-4 sm:px-6 lg:px-8">
      <h3 className="font-medium text-2xl sm:text-3xl md:text-4xl">How it works</h3>
      <p className="text-gray-600 w-full sm:w-[80%] md:w-[60%] lg:w-[42%] text-sm sm:text-base">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a
        massa elementum id scelerisque rhoncus
      </p>

      {/* Steps grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl py-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col justify-center items-center text-center space-y-2 p-4 sm:p-6 lg:p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={step.icon}
              alt={step.title}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <h4 className="font-medium text-xl sm:text-2xl">{step.title}</h4>
            <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
