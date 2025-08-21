import React from 'react';
import { FaJava, FaReact } from 'react-icons/fa';
import { DiJava, DiReact, DiGit, DiTerminal } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <DiJava size={50} /> },
    { name: 'C', icon: <DiTerminal size={50} /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={50} /> },
    { name: 'React', icon: <DiReact size={50} /> },
    { name: 'Git', icon: <DiGit size={50} /> },
  ];

  return (
    <div id='skills' className='w-full py-20 bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff6b35] relative'>
            Skills
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-transparent'></span>
          </p>
          <p className='py-4 text-xl text-gray-300'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center py-8'>
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className='bg-[#112240] shadow-xl shadow-[#0a192f]/50 hover:scale-110 hover:shadow-2xl hover:shadow-[#ff6b35]/20 duration-500 pt-6 pb-4 rounded-xl border border-gray-800 hover:border-[#ff6b35]/50 group transition-all'
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className='text-[#ff6b35] flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                {skill.icon}
              </div>
              <p className='font-medium text-gray-100 group-hover:text-[#ff6b35] transition-colors duration-300'>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;