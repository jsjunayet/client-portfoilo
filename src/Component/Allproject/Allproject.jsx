import React from "react";
import HoverImage from "./HoverImage";
import Title from "../Utility/Title";

const Allproject = () => {
  const images = [
    {
      src: "/sadia3.jpg",
      text: "Bookkeeping for Restaurants",
      pdfLink: "/pdfs/restaurants.pdf",
    },
    {
      src: "/sadia3.jpg",
      text: "Bookkeeping for Salons",
      pdfLink: "/pdfs/salons.pdf",
    },
    {
      src: "/sadia3.jpg",
      text: "Bookkeeping for House Rent Companies",
      pdfLink: "/pdfs/house-rent.pdf",
    },
    {
      src: "/sadia3.jpg",
      text: "Bookkeeping for Restaurants",
      pdfLink: "/pdfs/restaurants.pdf",
    },
    {
      src: "/sadia3.jpg",
      text: "Bookkeeping for Salons",
      pdfLink: "/pdfs/salons.pdf",
    },
    {
      src: "/sadia3.jpg",
      text: "Bookkeeping for House Rent Companies",
      pdfLink: "/pdfs/house-rent.pdf",
    },
  ];

  return (
   <section id="project" className="">
        <Title name={"My Project"}/>
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
