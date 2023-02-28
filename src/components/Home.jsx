import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#eeebb2]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-700'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#1c1d1f]'>
          Kalyan Srinivas K
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#2a2b2e]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#18181b] py-4 max-w-[700px]'>
          I’m a web developer specializing in building (and
          designing) responsive user interfaces and projects. Currently, I’m focused on
          building responsive  web applications.
        </p>
        <div>
          <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;