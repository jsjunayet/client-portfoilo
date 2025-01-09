"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const ProjectCard = ({ details }) => {
  const [hover, setHover] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow hover={hover} />,
    prevArrow: <SamplePrevArrow hover={hover} />,
  };

  return (
    <div
      className="bg-[#130f2a] border-2 border-[#6751b9] rounded-lg overflow-hidden shadow-lg mx-2 md:mx-0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Slider {...settings}>
        {details.img.map((img, index) => (
          <div
            key={index}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <Image
              src={img}
              alt={`${details.title}-${index}`}
              width={400}
              height={200}
              className={`w-full md:h-40 p-1 h-full object-cover transition-transform duration-300 ${hover ? 'scale-105 opacity-70' : 'scale-100 opacity-100'}`}
            />
          </div>
        ))}
      </Slider>
      <div className="p-6">
        <h2 className="md:text-[16px] text-base font-semibold text-white mb-2">{details.title}</h2>
        <p className="text-gray-300 md:text-xs text-[12px] mb-1">{details.description}</p>
        <div className='flex justify-between items-center mb-1'>
          <p className='flex gap-[1px] font-medium text-[11px] text-[#149ECA] items-center'><MdEmail />: {details.AdminEmail}</p>
          <p className='flex gap-[1px] font-medium text-[11px] text-[#149ECA] items-center'><GrUserAdmin />: {details.password}</p>
        </div>
        <div className="flex justify-between items-center">
          <a href={details.githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
            View Code
          </a>
          <a href={details.liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const SampleNextArrow = ({ hover, onClick }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer transition-opacity duration-300  ${hover ? 'opacity-100' : 'opacity-0'}`}
    onClick={onClick}
  >
    <FaAngleRight className="text-5xl text-[#149ECA]" />
  </div>
);

const SamplePrevArrow = ({ hover, onClick }) => (
  <div
    className={`absolute top-1/2 z-40 transform -translate-y-1/2 left-2 cursor-pointer transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
    onClick={onClick}
  >
    <FaAngleLeft className="text-5xl text-[#149ECA]" />
  </div>
);

export default ProjectCard;
