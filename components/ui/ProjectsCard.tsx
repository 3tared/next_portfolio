'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './Card3D';

interface IProps {
  product: {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: {
      github: {
        link: string;
        icon: string;
      };
      liveSite: {
        link: string;
        icon: string;
      };
    };
  };
}

export function ThreeDCard({ product }: IProps) {
  const { des, iconLists, img, title, link } = product;
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-indigo-500/[0.1] bg-black-100 border-white/[0.2] w-auto sm:w-[570px] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className=" text-neutral-600 dark:text-white font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: '#BEC1DD',
            margin: '1vh 0',
          }}
        >
          {des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <a href={link.liveSite.link} target="_blank">
            <img
              src={img}
              className="sm:h-80  w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} className="flex items-center">
            {iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full black-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img
                  src={icon}
                  alt={icon}
                  className="p-2 w-[38px] sm:h-[38px]"
                />
              </div>
            ))}
          </CardItem>
          <div className="flex items-center space-x-2">
            <CardItem
              translateZ={20}
              as={'a'}
              target="_blank"
              href={link.liveSite.link}
              className="border border-white/[.2] rounded-full black-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
            >
              <img
                src={link.liveSite.icon}
                alt={link.liveSite.icon}
                className="p-2 w-[38px] sm:h-[38px] cursor-pointer"
              />
            </CardItem>
            <CardItem
              translateZ={20}
              as={'a'}
              target="_blank"
              href={link.github.link}
              className="border border-white/[.2] rounded-full black-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
            >
              <img
                src={link.github.icon}
                alt={link.github.icon}
                className="p-2 w-[38px] sm:h-[38px] cursor-pointer"
              />
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
