"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      alert(res.data.message || "Registration successful!");
      router.push("/login"); // ✅ yahan redirect karna h
    } catch (error) {
      alert(error.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-600 p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-center">
        {/* Left Side - Form */}
        <div className="flex justify-end items-center w-full md:w-[452px] h-auto md:h-[600px] mb-6 md:mb-0">
          <div className="bg-white p-8 w-full md:w-[455px] h-full rounded-l-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-2">CREATE ACCOUNT</h2>
            <p className="text-gray-500 text-center mb-6">
              Please fill in the details to register.
            </p>

            <form onSubmit={handleSignup}>
              {/* Full Name */}
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#309689]"
              />

              {/* Email */}
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#309689]"
              />

              {/* Password */}
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#309689]"
              />

              {/* Confirm Password */}
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[#309689]"
              />

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-[#309689] text-white font-medium py-2 rounded-lg"
              >
                Sign up
              </button>
            </form>

            {/* OR Google Sign Up */}
            <button className="w-full flex items-center justify-center border border-gray-300 mt-4 py-2 rounded-lg gap-2">
              <FcGoogle size={25} />
              Sign up with Google
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm mt-3">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#309689] hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-[500px] h-auto md:h-[600px]">
          <img
            src="/Right Side.svg"
            alt="Placeholder"
            className="w-full h-full object-cover rounded-r-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
