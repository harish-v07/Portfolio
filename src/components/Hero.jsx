import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// import ProfilePic from '../assets/profile.jpg'; // Add your profile picture here

const Hero = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row items-center justify-center h-full'>
        
        <div className='flex flex-col justify-center text-center md:text-left'>
          <p className='text-[#ff6b35] font-semibold'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-gray-100'>Harish V</h1>
          <h2 className='text-2xl sm:text-4xl font-bold text-gray-400'>
            Aspiring Software Developer
          </h2>
          <p className='text-gray-400 py-4 max-w-[700px]'>
            I'm a passionate developer focused on building scalable solutions with modern technologies. Eager to contribute to innovative projects and gain practical experience.
          </p>
          <div className='flex justify-center md:justify-start items-center space-x-4 my-2'>
             <a href="#projects" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff6b35] hover:border-[#ff6b35] rounded-md transition-all duration-300'>
              View Projects
            </a>
            <a href="https://www.linkedin.com/in/HarishV07" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-[#ff6b35] transition-colors duration-300'><FaLinkedin /></a>
            <a href="https://github.com/harish-v07" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-[#ff6b35] transition-colors duration-300'><FaGithub /></a>
            <a href="mailto:vharish7100@gmail.com" className='text-2xl hover:text-[#ff6b35] transition-colors duration-300'><FaEnvelope /></a>
          </div>
        </div>
        
        {/* <div className='mt-8 md:mt-0 md:ml-12'>
            <img src={ProfilePic} alt="Harish Velusamy" className='rounded-full w-60 h-60 sm:w-80 sm:h-80 object-cover border-4 border-[#ff6b35] shadow-lg shadow-[#ff6b35]/30' />
        </div> */}

      </div>
    </div>
  );
};

export default Hero;