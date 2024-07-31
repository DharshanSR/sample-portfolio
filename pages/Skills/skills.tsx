import React from 'react';
import { programmingLanguages } from '@/data/skill-data/language';
import Image from 'next/image';

const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingLanguages.map((language) => (
              <li key={language.name} className="flex items-center space-x-3 text-lg">
                <div className="h-10 w-10 relative">
                  <Image src={language.icon} alt={language.name} layout="fill" objectFit="contain" />
                </div>
                <span>{language.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Other sections like Tools & Technologies, Design Skills, and Other Skills */}
      </div>
    </section>
  );
};

export default Skills;
