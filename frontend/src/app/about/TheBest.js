import React from "react";
import { features } from "../../constant/about";

const TheBest = () => {
  return (
    <div className="w-full h-full flex flex-col  items-center py-8 md:py-15">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-between gap-8 lg:gap-6">
        
        {/* Left side videos */}
        <div className="flex flex-col md:flex-row gap-3 w-full  lg:w-[550px]">
          {/* First big video */}
          <div className="w-full md:w-1/2">
            <video
              src="/3251916-uhd_3840_2160_25fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[300px] md:h-full object-cover rounded-lg"
            />
          </div>

          {/* Two stacked videos */}
          <div className="flex flex-col gap-3 md:gap-4 w-full md:w-1/2">
            <video
              src="/3205619-hd_1920_1080_25fps.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[200px] md:h-[300px] object-cover rounded-lg"
            />
            <video
              src="/3044675-uhd_3840_2160_24fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[200px] md:h-[240px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right side text */}
      <div className=" w-full lg:w-[500px] flex flex-col justify-center space-y-4 gap-4">
  <h1 className="text-2xl font-bold  w-full md:w-[280px]">
    We’re Only Working With The Best
  </h1>
  <p className="text-gray-600">
    Ultricies purus dolor viverra mi laoreet at cursus justo.
    Ultrices purus diam egestas amet faucibus tempor blandit.
  </p>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 w-full lg:w-[500px]">
  {features.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-2 p-2"
    >
      <img
        src={item.icon}
        alt={item.title}
        className="w-10 h-10 object-contain"
      />
      <h3 className="font-semibold">{item.title}</h3>
    </div>
  ))}
</div>


</div>
</div>


      </div>

  );
};

export default TheBest;
