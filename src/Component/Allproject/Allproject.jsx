import React from "react";
import HoverImage from "./HoverImage";
import Title from "../Utility/Title";

const Allproject = () => {
  const images = [
    {
      src: "/E-commerce2.png",
      text: " E-Commerce Bookkeeping",
      pdfLink: "/pdfs/restaurants.pdf",
    },
    {
      src: "/project1.png",
      text: "Xero Bookkeeping",
      pdfLink: "/pdfs/salons.pdf",
    },
    {
      src: "/project2.png",
      text: "Quickbooks Online",
      pdfLink: "/pdfs/house-rent.pdf",
    },
  
    {
      src: "/project3.png",
      text: "Accounting & Bookkeeping service, Clean-up & Catch up",
      pdfLink: "/pdfs/restaurants.pdf",
    },
    {
      src: "/cerrtificate.png",
      text: "QuickBooks Online Advanced Certificated",
      pdfLink: "/pdfs/salons.pdf",
    },
    {
      src: "/certificate1.png",
      text: "Xero advisor Certified",
      pdfLink: "/pdfs/house-rent.pdf",
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
        />
      ))}
    </div>
   </section>
  );
};

export default Allproject;
