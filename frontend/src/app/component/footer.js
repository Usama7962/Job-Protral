import React from 'react';
import { IoBagRemoveOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 text-white p-6'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-8'>

        
        <div className='flex flex-col max-w-xl'>
          <div className='flex items-center space-x-2 mb-3'>
            <IoBagRemoveOutline className='text-3xl' />
            <h1 className='text-2xl font-bold'>Job</h1>
          </div>

          <p className='w-[70%]'>
            Quis enim pellentesque viverra tellus eget malesuada facilisis.
            Congue nibh vivamus aliquet nunc mauris dui nullam et.
          </p>
        </div>

        {/* Right Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto'>

          {/* Company */}
          <div>
            <h2 className='font-bold mb-2'>Company</h2>
            <ul className='space-y-1'>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>For Employers</li>
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h2 className='font-bold mb-2'>Job Categories</h2>
            <ul className='space-y-1'>
              <li>Design</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>Sales</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className='font-bold mb-2'>Newsletter</h2>
            <p className='mb-2'>
              Subscribe to our newsletter for the latest job updates and resources.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className='p-2 rounded-md text-black w-full mb-2 border border-gray-300'
            />
            <button className='bg-[#309689] p-2 rounded-md w-full' style={{ cursor: 'pointer' }}>Subscribe</button>
          </div>

        </div>
      </div>
      <div className='flex justify-between'>
        <div>
        <p className='text-center text-sm mt-6'>
          &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
        </p>
        </div>
       <div className='flex space-x-4 mt-6'>
  <p className='text-sm underline cursor-pointer'>Privacy Policy</p>
  <p className='text-sm underline cursor-pointer'>Terms of Service</p>
</div>

      </div>
    </div>
  );
};

export default Footer;
