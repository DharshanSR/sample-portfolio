'use client';

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { FaBriefcase, FaProjectDiagram, FaTrophy } from 'react-icons/fa';
import westminsterLogo from '@/images/westminster_logo.png';
import esoftLogo from '@/images/esoft_logo.jpg';

const About: React.FC = () => {
  return (
    <section className="py-12 bg-sky-950 text-white">
      <div className="container mx-auto px-6">
        {/* About Me Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hello, I&apos;m Ravindran Dharshan, a dedicated software engineering student based in London, UK.
            With a strong foundation in web development, mobile app development, and machine learning, I am
            passionate about solving complex problems and crafting innovative solutions that drive progress.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My expertise spans across modern technologies such as Next.js, TypeScript, and Tailwind CSS. I am
            committed to continuous learning and stay engaged with the latest industry trends. Outside of coding,
            I enjoy writing insightful blogs, exploring new technologies, and collaborating on impactful projects.
          </p>
          <p className="text-lg leading-relaxed">
            I am eager to contribute to dynamic teams and take on new challenges. My goal is to apply my skills
            and knowledge to deliver exceptional results and make a meaningful impact in the tech industry.
          </p>
        </div>


        {/* Stats Section */}
        <div className="flex flex-wrap justify-around mb-8">
          <div className="text-center mb-4 md:mb-0">
            <p className="text-4xl font-bold">
              <CountUp start={0} end={5} duration={2} /> <span className="text-2xl">+</span>
            </p>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">
              <CountUp start={0} end={10} duration={2} /> <span className="text-2xl">+</span>
            </p>
            <p className="text-lg">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">
              <CountUp start={0} end={2} duration={2} /> <span className="text-2xl">+</span>
            </p>
            <p className="text-lg">Awards</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div className="cursor-pointer flex items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image
                src={westminsterLogo}
                alt="University of Westminster"
                width={100}
                height={100}
                className="mr-4"
              />
              <div className="flex-1">
                <strong className="text-xl">Bachelor of Engineering in Software Engineering</strong><br />
                University of Westminster, London, United Kingdom<br />
                2023 - Present<br />
              </div>
            </div>
            <div className="cursor-pointer flex items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image
                src={esoftLogo}
                alt="ABC Institute"
                width={100}
                height={100}
                className="mr-4"
              />
              <div className="flex-1">
                <strong className="text-xl">Diploma in English</strong><br />
                ESoft Metro Campus, Colombo, Sri Lanka<br />
                2022 - 2023<br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
