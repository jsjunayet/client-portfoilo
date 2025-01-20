"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { useContext, useState } from "react";
import "./projectdetails.css";
import Link from "next/link";
import Image from "next/image";
import { ProjectDetailsData } from "../Utility/Alldata";
import { ThemContext } from "../Context/ThemContext";

const ProjectDetails = ({ sigleProject }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const { Light } = useContext(ThemContext);
  const [open, setOpen] = useState(false);

  const project = ProjectDetailsData.find((p) => p?.industry === sigleProject);
  const relatedProject = ProjectDetailsData.filter(
    (projects) =>
      projects?.type === project?.type && projects?.industry !== project?.industry
  );

  if (!project) {
    return <></>;
  }

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber =
        slideNumber === 0 ? project.images.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber =
        slideNumber === project.images.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div
      className={`min-h-screen p-4 ${
        Light === "dark" ? "bg-[#060417] text-gray-300" : "bg-[#f9f9f9] text-black"
      }`}
    >
      {/* Modal for Image Slider */}
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
              className="w-4/5 sm:w-3/5 lg:w-1/2 max-w-2xl object-contain"
            />
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="absolute right-4 text-gray-300 text-5xl cursor-pointer"
            onClick={() => handleMove("r")}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-10">
        <Link href={"/"} className="flex items-center text-blue-400 mb-4">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Home
        </Link>
        <div className="md:flex w-full gap-8">
          {/* Project Details */}
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-extrabold   mb-4 t">{project?.type}</h2>
            {project.description && (
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
            )}
            <div className="space-y-3">
              {project.client && (
                <p>
                  <strong>Client:</strong> {project?.client}
                </p>
              )}
              {project.industry && (
                <p>
                  <strong>Industry:</strong> {project?.industry}
                </p>
              )}
              {project.duration && (
                <p>
                  <strong>Duration:</strong> {project?.duration}
                </p>
              )}
              {project.tools && (
                <p>
                  <strong>Tools Used:</strong> {project?.tools?.join(", ")}
                </p>
              )}
              <p>{project?.description}</p>
            </div>

            {project.services && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold">Services Provided:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* {project.pdf && project.pdf.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold">Related PDFs:</h4>
                <ul className="list-disc pl-5">
                  {project.pdf.map((pdf, index) => (
                    <li key={index} className="text-blue-500 hover:underline">
                      <a href={pdf.link} target="_blank">
                        {pdf.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}

            {/* Project Images */}
            <div className="grid grid-cols-1  gap-4 mt-6">
              {project.images.map((image, i) => (
                <div
                  key={i}
                  className="cursor-pointer"
                  onClick={() => handleOpen(i)}
                >
                  <Image
                    width={500}
                    height={700}
                    src={image}
                    alt=""
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          <div className="md:w-1/3 sticky top-0 h-full bg-gray-100 dark:bg-gray-800 text-black p-4 rounded-b-lg shadow-lg mt-4 md:mt-0">
            <h2 className="text-xl font-bold mb-2 text-center">
              Related Projects
            </h2>
            <h3 className="text-lg text-[#149ECA] text-center mb-4">
              {project?.type}
            </h3>
            {relatedProject.length > 0 ? (
              <ul className="space-y-4">
                {relatedProject.map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <Link
                      href={`/${item.industry}`}
                      className="text-sm hover:text-blue-500 font-medium truncate w-[90%]"
                    >
                      {item.industry}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">
                No related projects available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
