'use client';

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { FaBriefcase, FaLaptopCode, FaTrophy } from 'react-icons/fa';
import westminsterLogo from '@/images/westminster_logo.png';
import esoftLogo from '@/images/esoft_logo.jpg';

const About: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-white mb-6 text-center">About Me</h2>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            Hello, I&apos;m Ravindran Dharshan, a dedicated software engineering student based in London, UK.
            With a strong foundation in web development, mobile app development, and machine learning, I am
            passionate about solving complex problems and crafting innovative solutions that drive progress.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            My expertise spans across modern technologies such as Next.js, TypeScript, and Tailwind CSS. I am
            committed to continuous learning and stay engaged with the latest industry trends. Outside of coding,
            I enjoy writing insightful blogs, exploring new technologies, and collaborating on impactful projects.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            I am eager to contribute to dynamic teams and take on new challenges. My goal is to apply my skills
            and knowledge to deliver exceptional results and make a meaningful impact in the tech industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center md:justify-around mb-12">
          <div className="text-center mb-8 md:mb-0 flex flex-col items-center px-4 md:px-0">
            <FaBriefcase className="text-6xl text-cyan-400 mb-2" />
            <p className="text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={5} duration={2} /> <span className="text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Years of Experience</p>
          </div>
          <div className="text-center mb-8 md:mb-0 flex flex-col items-center px-4 md:px-0">
            <FaLaptopCode className="text-6xl text-cyan-400 mb-2" />
            <p className="text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={10} duration={2} /> <span className="text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Projects Completed</p>
          </div>
          <div className="text-center flex flex-col items-center px-4 md:px-0">
            <FaTrophy className="text-6xl text-cyan-400 mb-2" />
            <p className="text-4xl font-bold text-cyan-400">
              <CountUp start={0} end={2} duration={2} /> <span className="text-4xl">+</span>
            </p>
            <p className="text-lg font-medium">Awards</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src={westminsterLogo}
                alt="University of Westminster"
                width={100}
                height={100}
                className="mr-6 rounded-full"
              />
              <div>
                <strong className="text-xl text-white">Bachelor of Engineering in Software Engineering</strong><br />
                University of Westminster, London, United Kingdom<br />
                <div className='text-green-500'>2023 - Present<br /></div>
              </div>
            </div>
            <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src={esoftLogo}
                alt="ABC Institute"
                width={100}
                height={100}
                className="mr-6 rounded-full"
              />
              <div>
                <strong className="text-xl text-white">Diploma in English</strong><br />
                ESoft Metro Campus, Colombo, Sri Lanka<br />
                <div className='text-green-500'>2022 - 2023<br /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
