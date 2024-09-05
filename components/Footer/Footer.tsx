"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaMediumM,
  FaHome,
  FaUser,
  FaServicestack,
  FaBlog,
  FaProjectDiagram,
  FaArrowUp
} from 'react-icons/fa';
import Image from 'next/image';
import ukImage from '@/images/uk.png';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust the scroll position value as needed
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-24">
          {/* About Section */}
          <div className="footer-about mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Impact</h2>
            <p className="text-gray-400 mb-4">
              Helping businesses achieve their goals with modern solutions and impactful designs.
              Helping businesses achieve their goals with modern solutions and impactful designs.
            </p>
            <a
              href="/path-to-cv.pdf"
              download
              className="inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Useful Links Section */}
          <div className="footer-links ml-0 md:ml-24 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-2">
                <FaHome className="text-teal-500" />
                <Link href="/" className="hover:text-teal-500 transition-colors">Home</Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaUser className="text-teal-500" />
                <Link href="/about" className="hover:text-teal-500 transition-colors">About</Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaServicestack className="text-teal-500" />
                <Link href="/services" className="hover:text-teal-500 transition-colors">Services</Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaBlog className="text-teal-500" />
                <Link href="/blog" className="hover:text-teal-500 transition-colors">Blog</Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaProjectDiagram className="text-teal-500" />
                <Link href="/portfolio" className="hover:text-teal-500 transition-colors">Portfolio</Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-teal-500" />
                <Link href="/contact" className="hover:text-teal-500 transition-colors">Contact Me</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us and Contact Us Sections */}
          <div className="flex flex-col space-y-8">
            {/* Follow Us Section */}
            <div className="flex flex-col items-start space-y-4">
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-teal-500 transition-colors text-2xl">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-teal-500 transition-colors text-2xl">
                  <FaGithub />
                </a>
                <a href="#" aria-label="Medium" className="text-gray-400 hover:text-teal-500 transition-colors text-2xl">
                  <FaMediumM />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-teal-500 transition-colors text-2xl">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-teal-500 transition-colors text-2xl">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col items-start space-y-4">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-400 hover:text-teal-500 transition-colors text-xl" />
                  <a href="mailto:info@example.com" className="text-gray-400 hover:text-teal-500 transition-colors">
                    info@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-gray-400 hover:text-teal-500 transition-colors text-xl" />
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-teal-500 transition-colors">
                    +123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-center text-gray-500">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0">
            <Image
              src={ukImage}
              alt="UK Country Outline"
              width={60}
              height={40}
              className="inline-block"
            />
            <p className="text-center md:text-left">
              <span className="text-gray-400">© {new Date().getFullYear()} Impact. All Rights Reserved.</span>
              <br />
              <span className="text-gray-400 font-bold">Designed by Ravindran Dharshan</span>
            </p>
          </div>
        </div>

        {/* Scroll to Top Arrow */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-4 right-4 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
