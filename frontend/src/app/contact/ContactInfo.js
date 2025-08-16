"use client"
import React from "react";
import { FiPhone } from "react-icons/fi";
import { contactInfo } from "../../constant/contact.js";
import { useState } from "react";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

const ContactInfo = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
  };
  return (
    <div className="w-full flex justify-center items-center mt-11">
      <div className="w-[85%] flex flex-col lg:flex-row justify-between gap-8 ">
        <div className="space-y-4 w-full  lg:w-[600px] flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pr-0 lg:pr-20">
            You Will Grow, You Will Succeed. We Promise That
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
            lectus tincidunt tincidunt ultrices. Diam convallis morbi
            pellentesque adipiscing{" "}
          </p>
          <div className="space-y-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-[#309689]">{item.icon}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center p-4 md:p-6 space-y-4 bg-[#EBF5F4] shadow-md rounded-lg w-full lg:w-[600px]">
          <h3 className="font-semibold text-xl md:text-2xl">Contact Info</h3>
          <p className="text-gray-600 text-sm md:text-base">
            Nibh dis faucibus proin lacus tristique
          </p>

           {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="flex flex-col items-start w-full">
            <label htmlFor="firstName" className="font-semibold mb-1 text-sm md:text-base">
              Full Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:border-[#309689]"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="lastName" className="font-semibold mb-1 text-sm md:text-base">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:border-[#309689]"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="w-full flex flex-col items-start">
          <label htmlFor="email" className="font-semibold mb-1 text-sm md:text-base">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your E-mail address"
            className="border border-gray-300 w-full bg-white rounded-md p-2 focus:outline-none focus:border-[#309689]"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="message" className="font-semibold mb-1 text-sm md:text-base">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your message..."
            className="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#309689]"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center sm:justify-start mt-5">
          <button
            type="submit"
            className="bg-[#309689] text-white px-4 md:px-6 py-2 rounded-md hover:bg-[#25776c] transition text-sm md:text-base w-full sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
