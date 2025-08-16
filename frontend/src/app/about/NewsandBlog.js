import React from "react";
import { IoMdArrowForward } from "react-icons/io"
import {articles} from "../../constant/about.js"

const NewsandBlog = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center space-y-4 py-4">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">News and Blog</h3>
        <p className="text-gray-600 text-sm sm:text-base text-center max-w-2xl">
          Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed
          tristique in dolor
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {articles.map((item, index) => (
        <div key={index} className="w-full">
          {/* Video section */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] relative">
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 m-2 px-3 py-1 text-xs sm:text-sm text-center bg-[#309689] rounded-2xl text-white">
              <p>{item.category}</p>
            </div>
          </div>

          {/* Date */}
          <p className="mt-3 text-gray-600 text-sm sm:text-base">{item.date}</p>

          {/* Title */}
          <p className="font-serif text-xl sm:text-2xl mt-1 line-clamp-2">{item.title}</p>

          {/* Read More link */}
          <div className="flex items-center gap-2 text-[#309689] mt-2 cursor-pointer hover:gap-3 transition-all">
            <p className="text-sm sm:text-base">{item.linkText}</p>
            <IoMdArrowForward size={20} className="pt-1" />
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default NewsandBlog;
