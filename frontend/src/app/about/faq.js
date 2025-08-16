"use client";

import { Accordion } from "rizzui";
import { GoPlusCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { data } from "../../constant/about.js";

export default function Faq() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="w-[85%] flex flex-col justify-center items-center space-y-4">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
          </p>

          {data.map((item, index) => (
            <Accordion
              key={item.title}
              Open={false}
              className="w-full border-b border-[#309689] last-of-type:border-b-0"
            >
              <Accordion.Header>
                {({ open }) => (
                  <div
                    className={`flex w-full cursor-pointer items-center justify-between py-4 text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300 px-4 rounded-t-lg ${
                      open ? "bg-[#EBF5F4]" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Number */}
                      <span
                        className={`font-bold ${
                          open ? "text-[#309689]" : "text-gray-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Title */}
                      <span
                        className={`${
                          open ? "text-black" : "text-black"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Icon */}
                    {open ? (
                      <RxCross2 className="text-2xl sm:text-3xl bg-[#309689] text-white border rounded-full p-1" />
                    ) : (
                      <GoPlusCircle className="text-xl sm:text-2xl text-[#309689]" />
                    )}
                  </div>
                )}
              </Accordion.Header>

              <Accordion.Body className="px-4 text-sm sm:text-base md:text-lg text-gray-600 bg-[#EBF5F4] transition-colors duration-300 pb-3 rounded-b-lg">
                {item.content}
              </Accordion.Body>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
