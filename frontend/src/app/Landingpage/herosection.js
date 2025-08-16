import React from "react";
import { IoIosSearch } from "react-icons/io";
import  {stats,cards}  from "../../constant/landing.text.js"; // Adjust the path as needed

const HeroSection = () => {
  return (
    <div
      className="w-full text-center pt-10 bg-gray-900 text-white
      bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/Imgs.svg')" }}
    >
      {/* Inner container for content */}
      <div className="max-w-6xl mx-auto  px-4 lg:px-0 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold pt-10">
          Find Your Dream Job Today!
        </h1>
        <p className="mt-2 text-sm md:text-lg">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full lg:max-w-4xl bg-white rounded-md ">
          <input
            type="text"
            placeholder="Job Title or Company"
            className="rounded-md text-gray-500 w-full px-4 py-2"
          />

          <select className="text-gray-500 w-full px-4 py-2 rounded-md">
            <option value="" disabled selected>
              Select a location
            </option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
            <option value="london">London</option>
            <option value="karachi">Karachi</option>
          </select>

          <select className="rounded-md text-gray-500 w-full px-4 py-2">
            <option value="" disabled selected>
              Select a category
            </option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="support">Customer Support</option>
            <option value="hr">Human Resources</option>
          </select>

          <div className="flex justify-center bg-blue-600 sm:rounded-r-md sm:rounded-bl-none rounded-b-lg py-2  w-full">
            <button className="flex items-center text-white" style={{ cursor: 'pointer' }}>
              <IoIosSearch className="text-xl" />
              <span>Search Job</span>
            </button>
          </div>
        </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-10 justify-center">
          {stats.map((item, index) => (
            <div key={index} className="flex gap-2 items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-start">
                <p className="font-bold text-sm md:text-lg">
                  {item.count.toLocaleString()}
                </p>
                <p className="capitalize text-white text-xs md:text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 w-full bg-black flex flex-wrap justify-evenly gap-4 p-4">
          {cards.map((card) => (
            <div key={card.id} className="w-24 h-24 md:w-32 md:h-32">
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default HeroSection;
