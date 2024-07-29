"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <nav className={`bg-sky-950 p-3 ${isDarkMode ? 'dark:bg-gray-900' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link href="/">MyLogo</Link>
                </div>
                <div className="hidden md:flex space-x-6 mt-2">
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</Link>
                    <Link href="/expertise" className="text-gray-300 hover:text-white transition-colors duration-300">Expertise</Link>
                    <Link href="/skills" className="text-gray-300 hover:text-white transition-colors duration-300">Skills</Link>
                    <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors duration-300">Blogs</Link>
                    <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Me</Link>
                    <Button className='mb-1'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="currentColor"
                        >
                            <path d="M22 2L2 12L9 13L10 20L22 2ZM15 8L10 13L11 17L12.5 15.5L14 18L15 8ZM6 12L10 15L10 10L6 12Z" />
                        </svg>
                        Lets Talk</Button>
                    <button onClick={toggleDarkMode} className="ml-4 text-white focus:outline-none">
                        {isDarkMode ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-7.485h-1m-15.97 0h-1M16.95 7.05l-.707-.707m-11.314 11.314-.707-.707M16.95 16.95l-.707.707m-11.314-11.314-.707.707"></path>
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleDarkMode} className="mr-4 text-white focus:outline-none">
                        {isDarkMode ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-7.485h-1m-15.97 0h-1M16.95 7.05l-.707-.707m-11.314 11.314-.707-.707M16.95 16.95l-.707.707m-11.314-11.314-.707.707"></path>
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path>
                            </svg>
                        )}
                    </button>
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-75 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden flex flex-col space-y-2 p-4`}
            >
                {isOpen && (
                    <>
                        <button onClick={toggleMenu} className="self-end text-white focus:outline-none mb-4">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <Link href="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 transition-colors duration-300 rounded">Home</Link>
                        <Link href="/about" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 transition-colors duration-300 rounded">About</Link>
                        <Link href="/expertise" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 transition-colors duration-300 rounded">Expertise</Link>
                        <Link href="/skills" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 transition-colors duration-300 rounded">Skills</Link>
                        <Link href="/blogs" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 transition-colors duration-300 rounded">Blogs</Link>
                        <Link href="/portfolio" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 transition-colors duration-300 rounded">Portfolio</Link>
                        <Link href="/contact" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 transition-colors duration-300 rounded">Contact Me</Link>
                        <Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                            >
                                <path d="M22 2L2 12L9 13L10 20L22 2ZM15 8L10 13L11 17L12.5 15.5L14 18L15 8ZM6 12L10 15L10 10L6 12Z" />
                            </svg>
                            Lets Talk</Button>
                    </>
                )}
            </div>

        </nav>
    );
};

export default Navbar;
