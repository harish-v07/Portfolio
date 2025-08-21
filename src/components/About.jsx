import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <div id='about' className='w-full py-20 bg-[#112240] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4'>
          <div className='text-center pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff6b35] relative'>
              About Me
              <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-transparent'></span>
            </p>
          </div>
          <p className='text-xl text-center max-w-3xl mx-auto leading-relaxed text-gray-300'>
            I’m a Computer Science enthusiast passionate about building real-world solutions through web development, data visualization, and problem-solving. I enjoy creating applications that are functional, user-friendly, and accessible using tools like Java, React, and Spring Boot.
          </p>
        </div>

        <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 mt-12'>
          <div className='bg-[#0a192f] p-8 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-[#ff6b35]/50 hover:shadow-[#ff6b35]/10'>
            <div className='flex items-center mb-6'>
              <div className='p-3 bg-[#ff6b35]/20 rounded-lg mr-4'>
                <FaGraduationCap size={32} className='text-[#ff6b35]'/>
              </div>
              <h3 className='text-2xl font-bold text-white'>Education</h3>
            </div>
            <p className='text-xl font-semibold text-gray-100 mb-2'>B.E. Computer Science and Engineering</p>
            <p className='text-gray-400 mb-3'>Sri Ramakrishna Engineering College</p>
            <p className='text-[#ff6b35] font-medium bg-[#ff6b35]/10 px-3 py-1 rounded-full inline-block'>Currently Pursuing</p>
          </div>
          
          <div className='bg-[#0a192f] p-8 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-[#ff6b35]/50 hover:shadow-[#ff6b35]/10'>
            <div className='flex items-center mb-6'>
              <div className='p-3 bg-[#ff6b35]/20 rounded-lg mr-4'>
                <FaBriefcase size={32} className='text-[#ff6b35]'/>
              </div>
              <h3 className='text-2xl font-bold text-white'>Experience</h3>
            </div>
            <p className='text-xl font-semibold text-gray-100 mb-2'>Data Analyst Intern</p>
            <p className='text-gray-400 mb-3'>Emergere Computing Solutions Pvt Ltd</p>
            <p className='text-[#ff6b35] font-medium bg-[#ff6b35]/10 px-3 py-1 rounded-full inline-block'>6 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;