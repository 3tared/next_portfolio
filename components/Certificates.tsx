import React from 'react';
import { StickyScroll } from './ui/StickyScrollReveal';
import { certificates } from '@/data';

const content = certificates.map(({ title, description, img, link }) => ({
  title,
  description,
  link,
  content: (
    <a
      className={`h-full w-full flex items-center justify-center`}
      href={link}
      target="_blank"
    >
      <img src={img} alt={title} className="w-full h-full" />
    </a>
  ),
}));

const Certificates = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Some Of My
        <span className="text-purple">
          {' '}
          Achievements <span className="text-white">And</span> Certifications
        </span>
      </h1>
      <div className="flex items-center justify-center mt-[5rem]">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Certificates;
