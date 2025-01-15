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

const ProjectDetails = ({ sigleProject }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const ProjectDetailsData = [
    {
      id: 1,
      type:"e-commerce",
      title: "E-Commerce Bookkeeping",
      client: "Confidential",
      industry: "Leasing Company",
      duration: "12 months",
      tools: ["QuickBooks Online", "Excel"],
      services: [
        "Bank reconciliation",
        "Transaction categorization",
        "Payroll journal entries",
        "Year-end journal preparation",
        "Detailed financial reports",
      ],
      description:
        "I successfully completed a bookkeeping project for a rental company that leases apartments and generates rental income. My responsibilities included bank reconciliation, transaction categorization, payroll journal entries, year-end journal preparation, and creating detailed financial reports. By ensuring accurate financial records and delivering insightful reports, I supported the company in effectively managing its rental operations and making informed financial decisions.",
      images: [
        "/e-comm.png",
        "/report.png",
        "/e-comm.png",
      ],
      date: "November 14, 2024",
      // pdfLink: "/pdfs/rental-company.pdf",
    },
    {
      id: 2,
      type:"clean-up",
      title: "Clean-up & Catch up",
      client: "Confidential",
      industry: "Restaurant Business",
      duration: "8 months",
      tools: ["QuickBooks Online", "Google Sheets"],
      services: [
        "Monthly financial statements",
        "Expense tracking",
        "Budget preparation",
        "Inventory management",
      ],
      description:
        "Provided full-cycle bookkeeping services for a restaurant business, ensuring accurate financial records and streamlining expense tracking. Assisted with budget preparation and inventory management to support business growth.",
      images: [
     "/cleanUp1.png",
     "/cleanUp1.png",
     "/cleanUp1.png",
      ],
      date: "October 10, 2024",
 
    },
    {
      id: 3,
      type:"quickbooks",
      title: "Quickbooks Online",
      client: "N/A",
      industry: "N/A",
      duration: "Certified",
      tools: ["QuickBooks Online Advanced"],
      services: ["Achieved certification for advanced QuickBooks Online usage."],
      description:
        "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
      images: ["/online.png","/online.png",],
      date: "September 5, 2024",
     
    },
    {
      id: 4,
      type:"accounting",
      title: "Accounting & Bookkeeping service",
      client: "N/A",
      industry: "N/A",
      duration: "Certified",
      tools: ["QuickBooks Online Advanced"],
      services: ["Achieved certification for advanced QuickBooks Online usage."],
      description:
        "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
      images: ["/book.png","/book.png"],
      date: "September 5, 2024",
       },
    {
      id: 5,
      type:"xero",
      title: "Xero Bookkeeping",
      client: "N/A",
      industry: "N/A",
      duration: "Certified",
      tools: ["QuickBooks Online Advanced"],
      services: ["Achieved certification for advanced QuickBooks Online usage."],
      description:
        "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
      images: ["/project1.png","/project1.png"],
      date: "September 5, 2024",
      relatedProject:[]    
    },
 
    {
      id: 6,
      type:"Certificated",
      title: "QuickBooks Online Advanced Certificated",
      client: "N/A",
      industry: "N/A",
      duration: "Certified",
      tools: ["QuickBooks Online Advanced"],
      services: ["Achieved certification for advanced QuickBooks Online usage."],
      description:
        "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
      images: ["/cerrtificate.png","/cerrtificate.png",],
      date: "September 5, 2024",
     
    },
    {
      id: 7,
      type:"e-commerce",
      title: "Bookeeping servie 1 project",
      client: "Confidential",
      industry: "Restaurant Business",
      duration: "8 months",
      tools: ["QuickBooks Online", "Google Sheets"],
      services: [
        "Monthly financial statements",
        "Expense tracking",
        "Budget preparation",
        "Inventory management",
      ],
      description:
        "Provided full-cycle bookkeeping services for a restaurant business, ensuring accurate financial records and streamlining expense tracking. Assisted with budget preparation and inventory management to support business growth.",
      images: [
     "/cleanUp1.png",
     "/cleanUp1.png",
     "/cleanUp1.png",
      ],
      date: "October 10, 2024",
      pdfLink: "/pdfs/restaurant-business.pdf",
    },
    {
      id: 8,
      type:"e-commerce",
      title: "Bookeeping servie 2 project",
      client: "N/A",
      industry: "N/A",
      duration: "Certified",
      tools: ["QuickBooks Online Advanced"],
      services: ["Achieved certification for advanced QuickBooks Online usage."],
      description:
        "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
      images: ["/online.png","/online.png",],
      date: "September 5, 2024",
      pdfLink: "/pdfs/certificate.pdf",
    },
    {
      id: 9,
      type:"e-commerce",
      title: "Bookeeping servie 3 project",
      client: "N/A",
      industry: "N/A",
      duration: "Certified",
      tools: ["QuickBooks Online Advanced "],
      services: ["Achieved certification for advanced QuickBooks Online usage."],
      description:
        "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
      images: ["/book.png","/book.png"],
      date: "September 5, 2024",
      pdfLink: "/pdfs/certificate.pdf",
    },
  ]
  
//  const BookepingProject=[
//     {
//       id: 1,
//       title: "Bookeeping servie 1 project",
//       client: "Confidential",
//       industry: "Restaurant Business",
//       duration: "8 months",
//       tools: ["QuickBooks Online", "Google Sheets"],
//       services: [
//         "Monthly financial statements",
//         "Expense tracking",
//         "Budget preparation",
//         "Inventory management",
//       ],
//       description:
//         "Provided full-cycle bookkeeping services for a restaurant business, ensuring accurate financial records and streamlining expense tracking. Assisted with budget preparation and inventory management to support business growth.",
//       images: [
//      "/cleanUp1.png",
//      "/cleanUp1.png",
//      "/cleanUp1.png",
//       ],
//       date: "October 10, 2024",
//       pdfLink: "/pdfs/restaurant-business.pdf",
//     },
//     {
//       id: 2,
//       title: "Bookeeping servie 2 project",
//       client: "N/A",
//       industry: "N/A",
//       duration: "Certified",
//       tools: ["QuickBooks Online Advanced"],
//       services: ["Achieved certification for advanced QuickBooks Online usage."],
//       description:
//         "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
//       images: ["/online.png","/online.png",],
//       date: "September 5, 2024",
//       pdfLink: "/pdfs/certificate.pdf",
//     },
//     {
//       id: 3,
//       title: "Bookeeping servie 3 project",
//       client: "N/A",
//       industry: "N/A",
//       duration: "Certified",
//       tools: ["QuickBooks Online Advanced "],
//       services: ["Achieved certification for advanced QuickBooks Online usage."],
//       description:
//         "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
//       images: ["/book.png","/book.png"],
//       date: "September 5, 2024",
//       pdfLink: "/pdfs/certificate.pdf",
//     },
//   ]
//  const cleanUpandCatchupProject=[
//     {
//       id: 1,
//       title: "cleanUpandCatchup 1 project",
//       client: "Confidential",
//       industry: "Restaurant Business",
//       duration: "8 months",
//       tools: ["QuickBooks Online", "Google Sheets"],
//       services: [
//         "Monthly financial statements",
//         "Expense tracking",
//         "Budget preparation",
//         "Inventory management",
//       ],
//       description:
//         "Provided full-cycle bookkeeping services for a restaurant business, ensuring accurate financial records and streamlining expense tracking. Assisted with budget preparation and inventory management to support business growth.",
//       images: [
//      "/cleanUp1.png",
//      "/cleanUp1.png",
//      "/cleanUp1.png",
//       ],
//       date: "October 10, 2024",
//       pdfLink: "/pdfs/restaurant-business.pdf",
//     },
//     {
//       id: 2,
//       title: "cleanUpandCatchup 2 project",
//       client: "N/A",
//       industry: "N/A",
//       duration: "Certified",
//       tools: ["QuickBooks Online Advanced"],
//       services: ["Achieved certification for advanced QuickBooks Online usage."],
//       description:
//         "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
//       images: ["/online.png","/online.png",],
//       date: "September 5, 2024",
//       pdfLink: "/pdfs/certificate.pdf",
//     },
//     {
//       id: 3,
//       title: "cleanUpandCatchup 3 project",
//       client: "N/A",
//       industry: "N/A",
//       duration: "Certified",
//       tools: ["QuickBooks Online Advanced "],
//       services: ["Achieved certification for advanced QuickBooks Online usage."],
//       description:
//         "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
//       images: ["/book.png","/book.png"],
//       date: "September 5, 2024",
//       pdfLink: "/pdfs/certificate.pdf",
//     },
//     {
//       id: 3,
//       title: "clean-up and catch up",
//       client: "N/A",
//       industry: "N/A",
//       duration: "Certified",
//       tools: ["QuickBooks Online Advanced "],
//       services: ["Achieved certification for advanced QuickBooks Online usage."],
//       description:
//         "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
//       images: ["/book.png","/book.png"],
//       date: "September 5, 2024",
//       pdfLink: "/pdfs/certificate.pdf",
//     },
//   ]
//  const accountingandBookeepingProject=[
//     {
//       id: 1,
//       title: "accountingandBookeeping 1 project",
//       client: "Confidential",
//       industry: "Restaurant Business",
//       duration: "8 months",
//       tools: ["QuickBooks Online", "Google Sheets"],
//       services: [
//         "Monthly financial statements",
//         "Expense tracking",
//         "Budget preparation",
//         "Inventory management",
//       ],
//       description:
//         "Provided full-cycle bookkeeping services for a restaurant business, ensuring accurate financial records and streamlining expense tracking. Assisted with budget preparation and inventory management to support business growth.",
//       images: [
//      "/cleanUp1.png",
//      "/cleanUp1.png",
//      "/cleanUp1.png",
//       ],
//       date: "October 10, 2024",
//       pdfLink: "/pdfs/restaurant-business.pdf",
//     },
//     {
//       id: 2,
//       title: "accountingandBookeeping 2 project",
//       client: "N/A",
//       industry: "N/A",
//       duration: "Certified",
//       tools: ["QuickBooks Online Advanced"],
//       services: ["Achieved certification for advanced QuickBooks Online usage."],
//       description:
//         "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
//       images: ["/online.png","/online.png",],
//       date: "September 5, 2024",
//       pdfLink: "/pdfs/certificate.pdf",
//     },
//     {
//       id: 3,
//       title: "accountingandBookeeping 3 project",
//       client: "N/A",
//       industry: "N/A",
//       duration: "Certified",
//       tools: ["QuickBooks Online Advanced "],
//       services: ["Achieved certification for advanced QuickBooks Online usage."],
//       description:
//         "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
//       images: ["/book.png","/book.png"],
//       date: "September 5, 2024",
//       pdfLink: "/pdfs/certificate.pdf",
//     },
//     {
//       id: 4,
//       title: "accountingandBookeeping",
//       client: "N/A",
//       industry: "N/A",
//       duration: "Certified",
//       tools: ["QuickBooks Online Advanced "],
//       services: ["Achieved certification for advanced QuickBooks Online usage."],
//       description:
//         "Completed the QuickBooks Online Advanced certification course, demonstrating expertise in advanced accounting and bookkeeping functionalities.",
//       images: ["/book.png","/book.png"],
//       date: "September 5, 2024",
//       pdfLink: "/pdfs/certificate.pdf",
//     },
//   ]
  
//   const getRelatedProjects = (projectTitle) => {
//     switch (projectTitle) {
//       case "E-Commerce Bookkeeping":
//         return BookepingProject
//       case "Accounting & Bookkeeping service":
//         return accountingandBookeepingProject
//       case "Clean-up & Catch up":
//         return cleanUpandCatchupProject
//       default:
//         return [];
//     }
//   };
  
  // const relatedProjects = getRelatedProjects(sigleProject);
  const project = ProjectDetailsData.find((p)=>p?.title===sigleProject)
  const relatedProject = ProjectDetailsData.filter((projects)=>projects?.type===project?.type && projects?.title!=project?.title)

  if (!project) {
    return <p>Project not found.</p>;
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
    <div className="relative pt-16">
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
             {project.title}
            </h2>
            <p className="text-gray-600">{project.date}</p>
          </div>
          <div className="  rounded-lg ">
            <h3 className="text-lg font-bold mb-4">Project Details</h3>
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>Industry:</strong> {project.industry}
            </p>
            <p>
              <strong>Duration:</strong> {project.duration}
            </p>
            <p>
              <strong>Tools Used:</strong> {project.tools.join(", ")}
            </p>
            <div className="mt-4">
              <h4 className="text-md font-bold">Services Provided:</h4>
              <ul className="list-disc pl-5">
                {project.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <p className="mt-4">{project.description}</p>
            </div>
          </div>
          </div>
          <div className="grid grid-cols-1 md:gap-4 gap-2 mt-8 mb-4">
          {project.images.map((image, i) => (
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
          <div className="p-2 my-4 md:my-0 md:w-[30%] w-full md:ml-5 ml-0 sticky top-0 h-full border  bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold text-gray-900 text-center mb-2">POPULAR</h2>
      <ul className="space-y-4">
      {relatedProject?.length > 0 ? (
    <ul className="space-y-4">
      {relatedProject?.map((item, index) => (
        <li key={index} className="flex items-center space-x-4">
          <Image
            src={item.images[0]}
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
