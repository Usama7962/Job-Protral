"use client"
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert(res.data.message || "Login successful!");
      localStorage.setItem("token", res.data.token); 
      router.push("/landingpage");
    } catch (error) {
      alert(error.response?.data?.message || "Error logging in");
    }
  };
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-600 p-4'>
      <div className='w-full max-w-4xl flex flex-col md:flex-row justify-center items-center'>

        <div className="flex justify-end items-center w-full md:w-[452px] h-auto md:h-[600px] mb-6 md:mb-0">
          <div className="bg-white p-8 w-full md:w-[455px] h-full rounded-l-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-2">WELCOME</h2>
            <p className="text-gray-500 text-center mb-6">
              Welcome back! Please enter your details.
            </p>




            <form onSubmit={handleLogin}>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="flex justify-between items-center text-sm mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Remember me
              </label>
              <a href="#" className="text-[#309689] hover:underline">
                Forgot password
              </a>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="w-full bg-[#309689] text-white font-medium py-2 rounded-lg">
              Sign in
            </button>

            {/* OR Google Sign In */}
            <button className="w-full flex items-center justify-center border border-gray-300 mt-4 py-2 rounded-lg gap-2">
              <FcGoogle size={25} />
              Sign in with Google
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm mt-6">
              Don’t have an account?{" "}
              <Link href="/register" className="text-[#309689] hover:underline font-medium">
                Sign up to free!
              </Link>
            </p>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='w-full md:w-[500px] h-auto md:h-[600px]'>
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

export default Login;
