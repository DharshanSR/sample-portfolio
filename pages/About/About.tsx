import React from 'react';
import Image from 'next/image';
import westminsterLogo from '@/images/westminster_logo.png';
import esoftLogo from '@/images/esoft_logo.jpg'; // Import the new logo

const About: React.FC = () => {
  return (
    <section className="py-12 bg-sky-950 text-white">
      <div className="container mx-auto px-6">
        {/* About Me Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi, I'm Ravindran Dharshan, a passionate software engineering student with a strong
            background in web development, mobile app development, and machine learning. I thrive
            on solving complex problems and building innovative solutions that make a difference.
            My journey has equipped me with a robust skill set, including expertise in Next.js, 
            TypeScript, Tailwind CSS, and more. When I'm not coding, you can find me writing insightful
            blogs, exploring new technologies, or contributing to collaborative projects.
          </p>
          <p className="text-lg leading-relaxed">
            With a commitment to continuous learning and professional growth, I'm eager to contribute
            to dynamic teams and tackle new challenges. My goal is to leverage my skills and knowledge
            to drive impactful projects and deliver exceptional results.
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image 
                src={westminsterLogo} 
                alt="University of Westminster" 
                width={100} 
                height={100} 
                className="mr-4 rounded-full"
              />
              <div className="flex-1">
                <strong className="text-xl">Bachelor of Engineering in Software Engineering</strong><br />
                University of Westminster, London, United Kingdom<br />
                2023 - Present<br />
              </div>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image 
                src={esoftLogo} 
                alt="ABC Institute" 
                width={100} 
                height={100} 
                className="mr-4 rounded-full"
              />
              <div className="flex-1">
                <strong className="text-xl">Diploma in English</strong><br />
                ABC Institute, 2022 - 2024<br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
