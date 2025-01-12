import React from "react";
import HoverImage from "./HoverImage";
import Title from "../Utility/Title";

const Allproject = () => {
  const images = [
    {
      src: "/e-comm.png",
      text: " E-Commerce Bookkeeping",
      pdfLink: "/pdfs/restaurants.pdf",
    },
    {
      src: "/cleanUp1.png",
      text: " Clean-up & Catch up",
      pdfLink: "/pdfs/restaurants.pdf",
    },
    
    {
      src: "/online.png",
      text: "Quickbooks Online",
      pdfLink: "/pdfs/house-rent.pdf",
    },
  
    {
      src: "/book.png",
      text: "Accounting & Bookkeeping service",
      pdfLink: "/pdfs/restaurants.pdf",
    },
    {
      src: "/project1.png",
      text: "Xero Bookkeeping",
      pdfLink: "/pdfs/salons.pdf",
    },
    {
      src: "/cerrtificate.png",
      text: "QuickBooks Online Advanced Certificated",
      pdfLink: "/pdfs/salons.pdf",
      isCertificate: true,
    },
   
  
  ];

  return (
   <section id="project" className="">
        <Title name={"Achievements & Projects"}/>
     <div className="mt-10 grid gap-4 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      {images.map((image, index) => (
        <HoverImage
          key={index}
          imageSrc={image.src}
          hoverText={image.text}
          pdfLink={image.pdfLink}
          isCertificate={image.isCertificate || false}
        />
      ))}
    </div>
   </section>
  );
};

export default Allproject;
