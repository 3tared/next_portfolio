import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { projects } from '@/data';
import { FaLocationArrow } from 'react-icons/fa6';
import { ThreeDCard } from './ui/ProjectsCard';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A Small Selection Of{' '}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((product) => (
          <div className="flex items-center justify-center" key={product.id}>
            <ThreeDCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
