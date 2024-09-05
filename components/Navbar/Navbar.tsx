'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaServicestack, FaBlog, FaBrain, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import contactPerson from '@/images/Graduate-Men.png';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState('bg-teal-600');
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;

      setBgColor(scrollPosition > scrollThreshold ? 'bg-teal-800' : 'bg-teal-600');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClasses = (section: string) => {
    return `relative ${activeSection === section ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 
    cursor-pointer transition-colors duration-300 ease-in-out after:absolute after:left-0 after:bottom-[-2px] 
    after:w-full after:h-1 after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left 
    hover:after:transition-transform hover:after:duration-300`;
  };

  return (
    <header
      className={`fixed w-full ${bgColor} font-bold text-white flex justify-between items-center px-4 z-50 transition-colors duration-300 ease-in-out h-16 md:h-20`}
    >
      {/* Left - Brand */}
      <h1 className="text-2xl md:text-3xl font-bold">Impact</h1>

      {/* Center - Nav Links for Desktop */}
      <ul className="hidden md:flex space-x-6">
        <li className={getLinkClasses('home')}>
          <Link href="#home">Home</Link>
        </li>
        <li className={getLinkClasses('about')}>
          <Link href="#about">About</Link>
        </li>
        <li className={getLinkClasses('services')}>
          <Link href="#services">Services</Link>
        </li>
        <li className={getLinkClasses('blog')}>
          <Link href="#blog">Blog</Link>
        </li>
        <li className={getLinkClasses('skills')}>
          <Link href="#skills">Skills</Link>
        </li>
        <li className={getLinkClasses('portfolio')}>
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li className={getLinkClasses('contact')}>
          <Link href="#contact">Contact Me</Link>
        </li>
      </ul>

      {/* Right - Let's Talk Button for Desktop */}
      <div className="hidden md:block">
        <button
          className="relative px-4 py-2 bg-white text-teal-600 font-semibold rounded overflow-hidden transition-transform duration-300 transform hover:scale-110"
        >
          <FaPhoneAlt className="mr-2 inline-block" /> {/* Icon inside button */}
          Let&apos;s Talk
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={25} /> : null}
      </div>

      {/* Overlay for Mobile */}
      {nav && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleClick}></div>}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-teal-600 p-8 transition-transform duration-500 ease-in-out z-50 ${nav ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
      >
        {/* Close Icon in Sidebar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Menu</h2>
          <FaTimes size={30} className="cursor-pointer text-white" onClick={handleClick} />
        </div>

        <ul className="flex flex-col space-y-6 text-2xl">
          <li onClick={handleClick} className="flex items-center space-x-2 text-white hover:text-yellow-300">
            <FaHome />
            <Link href="#home">Home</Link>
          </li>
          <li className="w-full h-[2px] bg-white opacity-20"></li>

          <li onClick={handleClick} className="flex items-center space-x-2 text-white hover:text-yellow-300">
            <FaUser />
            <Link href="#about">About</Link>
          </li>
          <li className="w-full h-[2px] bg-white opacity-20"></li>

          <li onClick={handleClick} className="flex items-center space-x-2 text-white hover:text-yellow-300">
            <FaServicestack />
            <Link href="#services">Services</Link>
          </li>
          <li className="w-full h-[2px] bg-white opacity-20"></li>

          <li onClick={handleClick} className="flex items-center space-x-2 text-white hover:text-yellow-300">
            <FaBlog />
            <Link href="#blog">Blog</Link>
          </li>
          <li className="w-full h-[2px] bg-white opacity-20"></li>

          <li onClick={handleClick} className="flex items-center space-x-2 text-white hover:text-yellow-300">
            <FaBrain />
            <Link href="#skills">Skills</Link>
          </li>
          <li className="w-full h-[2px] bg-white opacity-20"></li>

          <li onClick={handleClick} className="flex items-center space-x-2 text-white hover:text-yellow-300">
            <FaBriefcase />
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li className="w-full h-[2px] bg-white opacity-20"></li>

          <li onClick={handleClick} className="flex items-center space-x-2 text-white hover:text-yellow-300">
            <FaEnvelope />
            <Link href="#contact">Contact Me</Link>
          </li>
          <li className="w-full h-[2px] bg-white opacity-20"></li>

          <li className="flex justify-center mt-10">
            <button className="px-6 py-3 bg-white text-teal-600 font-semibold rounded hover:bg-gray-200 transition duration-300">
              Let&apos;s Talk
            </button>
          </li>
        </ul>

        {/* Mobile Only Image */}
        <div className="mt-10">
          <Image
            src={contactPerson}
            alt="Mobile View Image"
            className="w-full h-auto max-h-[100vh] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
