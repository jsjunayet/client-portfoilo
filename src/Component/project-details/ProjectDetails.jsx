"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faArrowLeft,

} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./projectdetails.css";
import Link from "next/link";
import Image from "next/image";
import { ProjectDetailsData } from "../Utility/Alldata";

const ProjectDetails = ({ sigleProject }) => {
  const [slideNumber, setSlideNumber] = useState(0);

  const [open, setOpen] = useState(false);

  const project = ProjectDetailsData.find((p)=>p?.title===sigleProject)
  console.log(project);
  const relatedProject = ProjectDetailsData.filter((projects)=>projects?.type===project?.type && projects?.title!=project?.title)

if(!project){
  return <></>
}
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
  
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? project.images.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === project.images.length - 1 ? 0 : slideNumber + 1;
    }
  
    setSlideNumber(newSlideNumber);
  };
  

  return (
    <div className="relative text-gray-300">
      <div className="flex justify-center">
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="absolute top-4 right-4 text-gray-300 text-3xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="absolute left-4 text-gray-300 text-5xl cursor-pointer"
              onClick={() => handleMove("l")}
            />
            <div className="flex justify-center w-full">
              <Image
                src={project.images[slideNumber]}
                alt="all"
                width={500}
                height={700}
                className="w-4/5 sm:w-3/5 lg:w-1/2 max-w-2xl"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="absolute right-4 text-gray-300 text-5xl cursor-pointer"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="max-w-5xl mx-auto mt-10 md:px-0 px-2">
          <div className="md:flex w-full">
          <div className="md:w-[70%] w-full">
          <div>
          <Link href={"/"}
              className="flex items-center text-blue-400 mb-4"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to Home
            </Link>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
             {project?.title}
            </h2>
            <p className="text-gray-600">{project?.date}</p>
          </div>
          <div className="  rounded-lg ">
            <h3 className="text-lg font-bold mb-4">Project Details</h3>
            <p>
              <strong>Client:</strong> {project?.client}
            </p>
            <p>
              <strong>Industry:</strong> {project?.industry}
            </p>
            <p>
              <strong>Duration:</strong> {project?.duration}
            </p>
            <p>
              <strong>Tools Used:</strong> {project?.tools.join(", ")}
            </p>
            <div className="mt-4">
              <h4 className="text-md font-bold">Services Provided:</h4>
              <ul className="list-disc pl-5">
                {project?.services?.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <p className="mt-4">{project?.description}</p>
            </div>
            <div className="p-2 h-full border bg-gray-300 shadow-md rounded-b-lg mt-4">
              <h3 className="text-lg font-bold text-gray-900 mb-0">Related PDFs</h3>
              {project?.pdf && project.pdf.length > 0 ? (
                <ul className="space-y-2">
                  {project.pdf.map((pdf, index) => (
                    <li key={index} className="text-blue-500 hover:underline">
                      <a href={pdf.link} target="_blank">
                        {pdf.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className=" text-gray-900">No related PDFs available.</p>
              )}
            </div>
          </div>
          </div>
          <div className="grid grid-cols-1 md:gap-4 gap-2 mt-8 mb-4">
          {project?.images?.map((image, i) => (
              <div
                key={i}
                className="w-full cursor-pointer"
                onClick={() => handleOpen(i)}
              >
                <Image width={500} height={700} src={image} alt="" className="w-full mb-2 rounded-lg" />
              </div>
            ))}
          </div>
          </div>
          <div className="p-2 my-4 md:my-0 md:w-[30%] w-full md:ml-5 ml-0 sticky top-0 h-full border  bg-gray-100 shadow-md rounded-b-lg">
      <h2 className="text-lg font-bold text-gray-900 text-center mb-2">POPULAR</h2>
      <ul className="space-y-4">

      {relatedProject?.length > 0 ? (
    <ul className="space-y-4">
      {relatedProject?.map((item, index) => (
        <li key={index} className="flex items-center space-x-4">
          <Image
            src={item?.images && item?.images.length > 0 ? item.images[0] : '/5.png'}
            alt={item.title}
            width={100}
            height={100}
            className="w-16 h-16 object-cover rounded-md"
          />
          <Link href={`/${item.title}`} className="text-sm hover:text-blue-500 font-medium text-gray-700">{item.title}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-center text-gray-500">No related projects available.</p>
  )}
      </ul>
    </div>
          <div>
    
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
