import React from 'react';
import { programmingLanguages } from '@/data/skill-data/language';
import Image from 'next/image';
import { toolsAndTechnologies } from '@/data/skill-data/cloud';
import { dataBase } from '@/data/skill-data/data';
import { frameworks } from '@/data/skill-data/framework';
import { ideTools } from '@/data/skill-data/ide';

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-sky-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">Programming Languages</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {programmingLanguages.map((language) => (
              <li key={language.name} className="bg-white text-black shadow-md rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 relative">
                  <Image src={language.icon} alt={language.name} layout="fill" objectFit="contain" />
                </div>
                <span className="text-xl font-medium">{language.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools and Technologies */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">Tools and Technology</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {toolsAndTechnologies.map((tool) => (
              <li key={tool.name} className="bg-white text-black shadow-md rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 relative">
                  <Image src={tool.icon} alt={tool.name} layout="fill" objectFit="contain" />
                </div>
                <span className="text-xl font-medium">{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Databases */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">Databases</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {dataBase.map((database) => (
              <li key={database.name} className="bg-white  text-black shadow-md rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 relative">
                  <Image src={database.icon} alt={database.name} layout="fill" objectFit="contain" />
                </div>
                <span className="text-xl font-medium">{database.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Frameworks */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">Frameworks</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {frameworks.map((framework) => (
              <li key={framework.name} className="bg-white text-black shadow-md rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 relative">
                  <Image src={framework.icon} alt={framework.name} layout="fill" objectFit="contain" />
                </div>
                <span className="text-xl font-medium">{framework.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IDEs */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">IDEs</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ideTools.map((ide) => (
              <li key={ide.name} className="bg-white text-black shadow-md rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 relative">
                  <Image src={ide.icon} alt={ide.name} layout="fill" objectFit="contain" />
                </div>
                <span className="text-xl font-medium">{ide.name}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
