'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import projects from '@/data/project-data/projects';

const ShimmerButton: React.FC<{ href?: string; onClick?: () => void; text: string }> = ({ href, onClick, text }) => (
  <div className="flex justify-center">
    {href ? (
      <Link href={href}>
        <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {text}
        </button>
      </Link>
    ) : (
      <button
        onClick={onClick}
        className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        {text}
      </button>
    )}
  </div>
);

const Portfolio: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Limit the number of projects displayed
  const displayedProjects = isExpanded ? projects : projects.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 bg-sky-950">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="relative border rounded-lg p-4 shadow-lg bg-white transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.smallDescription}</p>
              <ShimmerButton text="Read More" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ShimmerButton
            onClick={() => setIsExpanded(!isExpanded)}
            text={isExpanded ? 'View Less' : 'View More'}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
