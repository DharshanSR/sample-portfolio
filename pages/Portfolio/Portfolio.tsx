'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Project, projects } from '@/data/projectData';

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showAll, setShowAll] = useState(false);
  
  const handleLoadMore = () => {
    setShowAll(true);
    setVisibleProjects(projects.length);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setVisibleProjects(6);
  };

  return (
    <section id="services" className="py-20 bg-sky-950">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-8 text-center text-white">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.slug}
              className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{ height: '450px' }}
            >
              <div className="mb-4 w-full h-60 relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform transform hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-bold mb-4 text-center">{project.title}</h2>
              <p className="text-gray-700 mb-6 text-justify">{project.smallDescription}</p>
              <div className="flex justify-center mt-auto">
                <Link
                  href={`/project/${project.slug}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {showAll ? (
            <button onClick={handleShowLess} className="bg-blue-500 text-white px-4 py-2 rounded">
              View Less
            </button>
          ) : (
            visibleProjects < projects.length && (
              <button onClick={handleLoadMore} className="bg-blue-500 text-white px-4 py-2 rounded">
                View More
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
