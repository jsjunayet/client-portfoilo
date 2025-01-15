import React from "react";
import HoverImage from "./HoverImage";
import Title from "../Utility/Title";

const Allproject = () => {
  
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
  

  return (
   <section id="project" className="">
        <Title name={"Achievements & Projects"}/>
     <div className="mt-10 grid gap-4 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      {ProjectDetailsData.slice(0,6).map((item, index) => (
        <HoverImage
          key={item.id}
          imageSrc={item.images[0]}
          hoverText={item.title}
        />
      ))}
    </div>
   </section>
  );
};

export default Allproject;
