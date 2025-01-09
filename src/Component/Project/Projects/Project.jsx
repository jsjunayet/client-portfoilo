"use client"
import React, { useRef } from 'react';
import './Project.css'
import ProjectCard from '../projectdata/ProjectCards/ProjectCard';
import { projectdatas } from '../projectdata/Projectdata';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from 'react-slick';

const Project = () => {
    const slideRef = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }

            },
        ]
    };
    const sliderleft = () => {
        slideRef.current.slickNext()
    }
    const sliderRight = () => {
        slideRef.current.slickPrev()
    }
    return (
        <div className='md:ml-2 ml-0 mt-6 md:mt-20'>
            <h5 className='md:text-xl text-lg text-center md:text-start font-semibold md:mb-5 mb-4'>My Project</h5>
            <div className='grid md:grid-cols-2 gap-3 lg:grid-cols-3 grid-cols-1'>
            {
                        projectdatas.map((item) => (
                            <ProjectCard key={item.title} details={item}> </ProjectCard>
                        ))
            }
            </div>

        </div>
    );
};

export default Project;
