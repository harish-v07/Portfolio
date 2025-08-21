import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ResumePDF from '../assets/resume.pdf'; // Make sure your resume is in src/assets/

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]/95 backdrop-blur-sm text-gray-300 z-10 border-b border-gray-800'>
      <div>
        <h1 className='text-3xl font-bold text-[#ff6b35]'>HV</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center'>
        {navLinks.map((link) => (
          <li key={link.title} className='px-4 cursor-pointer hover:text-[#ff6b35] transition-colors duration-300 relative group'>
            <a href={link.href}>{link.title}</a>
            <div className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#ff6b35] group-hover:w-full group-hover:left-0 transition-all duration-300'></div>
          </li>
        ))}
        <li>
          <a
            href={ResumePDF}
            download="Harish-V-Resume.pdf"
            className='ml-4 px-4 py-2 border-2 border-[#ff6b35] text-[#ff6b35] font-semibold rounded-md hover:bg-[#ff6b35] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#ff6b35]/25'
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer hover:text-[#ff6b35] transition-colors duration-300'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f]/98 backdrop-blur-sm flex flex-col justify-center items-center border-r border-gray-800'
        }
      >
        {navLinks.map((link) => (
          <li key={link.title} className='py-6 text-4xl hover:text-[#ff6b35] transition-colors duration-300'>
            <a onClick={handleClick} href={link.href}>{link.title}</a>
          </li>
        ))}
         <li className='py-6'>
          <a
            href={ResumePDF}
            download="Harish-Velusamy-Resume.pdf"
            className='px-6 py-3 border-2 border-[#ff6b35] text-[#ff6b35] font-semibold rounded-md hover:bg-[#ff6b35] hover:text-white transition-all duration-300 text-2xl shadow-lg hover:shadow-[#ff6b35]/25'
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;