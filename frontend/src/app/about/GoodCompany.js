"use client";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { PiPauseFill } from "react-icons/pi";
import { video } from "../../constant/about.js";

const GoodCompany = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col justify-center items-center my-5 md:my-10 px-4 md:px-0">
      {/* Video Section */}
      <div className="flex flex-col justify-center items-center relative w-full md:w-[80%]">
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <video
            ref={videoRef}
            src="/3044681-uhd_3840_2160_24fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="absolute flex flex-col items-center justify-center gap-4">
          <div
            onClick={togglePlayPause}
            className="bg-[#309689] bg-opacity-50 p-2 md:p-4 rounded-full cursor-pointer text-white text-xl md:text-3xl hover:bg-opacity-70 transition"
          >
            {isPlaying ? <PiPauseFill /> : <FaPlay />}
          </div>
          <p className="text-white font-bold text-2xl md:text-4xl w-[280px] md:w-[400px] text-center ">
            Good Life Begins With A Good Company
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row justify-evenly items-center bg-black w-full md:w-[80%] py-6 rounded-b-2xl space-y-6 md:space-y-0">
        {video.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center gap-4"
          >
            <div className="border bg-[#309689] px-2 md:px-3 py-1 rounded-lg text-white font-medium text-xl md:text-2xl">
              {item.id}
            </div>
            <div>
              <p className="text-white text-lg md:text-xl w-[200px] md:w-[250px]">{item.title}</p>
              <p className="text-[#309689] cursor-pointer text-sm md:text-base">{item.link}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodCompany;
