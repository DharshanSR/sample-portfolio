'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import contactPerson from '@/images/Graduate-Men.png';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState('bg-teal-600'); // Initial color
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50; // Change this value based on when you want the color to change

      // Change background color based on scroll position
      if (scrollPosition > scrollThreshold) {
        setBgColor('bg-teal-800'); // Color when scrolling down
      } else {
        setBgColor('bg-teal-600'); // Original color
      }

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
    return `relative ${activeSection === section ? 'text-yellow-300' : 'text-white'} hover:text-yellow-300 cursor-pointer transition-colors duration-300 ease-in-out after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-1 after:bg-yellow-300 after:transform after:scale-x-0 hover:after:scale-x-100 hover:after:transition-transform`;
  };

  return (
    <header
      className={`fixed w-full ${bgColor} text-white flex justify-between items-center px-4 z-50 transition-colors duration-300 ease-in-out h-16 md:h-20`}
    >
      {/* Left - Brand */}
      <h1 className="text-2xl md:text-3xl font-bold">Impact</h1>

      {/* Center - Nav Links */}
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

      {/* Right - Let's Talk Button */}
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-white text-teal-600 font-semibold rounded hover:bg-gray-200 transition duration-300">
          Let&apos;s Talk
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-teal-600 p-8 transition-transform duration-500 ease-in-out z-50 ${
          nav ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-4 text-2xl">
          <li onClick={handleClick} className={getLinkClasses('home')}>
            <Link href="#home">Home</Link>
          </li>
          <li onClick={handleClick} className={getLinkClasses('about')}>
            <Link href="#about">About</Link>
          </li>
          <li onClick={handleClick} className={getLinkClasses('services')}>
            <Link href="#services">Services</Link>
          </li>
          <li onClick={handleClick} className={getLinkClasses('blog')}>
            <Link href="#blog">Blog</Link>
          </li>
          <li onClick={handleClick} className={getLinkClasses('skills')}>
            <Link href="#skills">Skills</Link>
          </li>
          <li onClick={handleClick} className={getLinkClasses('portfolio')}>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li onClick={handleClick} className={getLinkClasses('contact')}>
            <Link href="#contact">Contact Me</Link>
          </li>
          <li>
            <button className="px-6 py-3 bg-white text-teal-600 font-semibold rounded hover:bg-gray-200 transition duration-300">
              Let&apos;s Talk
            </button>
          </li>
        </ul>

        {/* Mobile Only Image */}
        <div className="mt-8">
          <Image
            src={contactPerson}
            alt="Mobile View Image"
            className="w-full h-auto max-h-[80vh] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
