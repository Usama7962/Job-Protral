"use client"
import React from "react";
import { useState } from "react";

import { jobOverview } from "../../constant/jobdetails.js"; // Import your array
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";


const JobOverview = () => {
     const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };
  return (
    <div className=" w-full lg:w-[25%]   ">
        <div className=" px-6 pt-4 space-y-4 rounded-2xl pb-3 "
        style={{ backgroundColor: 'var(--primary-sky1)' }}>
      <h2 className="font-semibold text-lg">Job Overview</h2>

      {jobOverview.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="pt-2 text-[#309689] text-2xl">{item.icon}</div>
          <div>
            <h4 className="font-semibold">{item.label}</h4>
            <p className="text-gray-600">{item.value}</p>
          </div>
        </div>
      ))}
      <img
      src="/location.svg"
      alt="location"
      className="w-full"
      />
      </div>
      <div className=" px-6 pt-4 space-y-4 rounded-2xl pb-3  my-6"
      style={{ backgroundColor: 'var(--primary-sky1)' }}>
        <h3 className="font-semibold text-lg">Send Us Message</h3>
        <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto  space-y-4"
    >
      {/* Full Name */}
      <div className="flex items-center border rounded px-3 py-2">
        <FaUser className="text-gray-400 mr-2" />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full outline-none"
          required
        />
      </div>

      {/* Email */}
      <div className="flex items-center border rounded px-3 py-2">
        <FaEnvelope className="text-gray-400 mr-2" />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full outline-none"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex items-center border rounded px-3 py-2">
        <FaPhone className="text-gray-400 mr-2" />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full outline-none"
          required
        />
      </div>

      {/* Message */}
      <div className="flex items-start border rounded px-3 py-2">
        <FaCommentDots className="text-gray-400 mr-2 mt-2" />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full outline-none resize-none"
          rows="4"
          required
        ></textarea>
      </div>

      {/* Send Message Button */}
      <button
        type="submit"
        className="flex justify-center items-center gap-2 py-2 px-2 text-white bg-[#309689] rounded-md"
        style={{ cursor: 'pointer' }}
      >
       Send Message
      </button>
    </form>


      </div>

    </div>
  );
};

export default JobOverview;
