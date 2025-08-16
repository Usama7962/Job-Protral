import React from "react";
import { statsData } from "../../constant/landing.text.js";

const Goodlife = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
    <div className="w-[85%] mt-10 md:mt-20 bg-white">
      <div className="flex flex-col md:flex-row p-4 md:p-10 gap-8 md:gap-20 justify-center items-center">
        <div className="w-full md:w-1/2 h-64 md:h-96 rounded-md overflow-hidden flex-shrink-0">
          <img
            src="/AdobeStock_65314351_Preview.jpeg"
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4 mt-6 md:mt-0">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pr-0 md:pr-20">
            Good Life Begins With A Good Company
          </h2>
          <p className="text-gray-600 mt-2 md:mt-4 text-base md:text-lg">
            Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices
            purus diam egestas amet faucibus tempor blandit. Elit velit mauris
            aliquam est diam. Leo sagittis consectetur diam morbi erat aenean.
            Vulputate praesent congue faucibus in euismod feugiat euismod volutpat
            . Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus
            in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel
            felis id tincidunt nunc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4 md:mt-6">
            <button className="bg-[#309689] text-white py-2 px-6 rounded-md w-full sm:w-auto" style={{ cursor: 'pointer' }}>
              Search jobs
            </button>
            <p className="text-green-600 pt-2 sm:pt-0 underline cursor-pointer text-center sm:text-left">
              Learn more
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start my-8 md:my-10 px-4 md:px-10 gap-6">
        {statsData.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 max-w-sm">
            <h2 className="text-xl md:text-2xl font-bold text-[#309689]">{item.value}</h2>
            <p className="text-base md:text-lg font-bold">{item.title}</p>
            <p className="text-sm md:text-base text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Goodlife;
