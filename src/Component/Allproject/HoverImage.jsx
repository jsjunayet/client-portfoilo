import Link from "next/link";
import React from "react";

const HoverImage = ({ imageSrc, hoverText }) => {
  const encodedHoverText = encodeURIComponent(hoverText);

  return (
    <div className="relative group aspect-[16/10] overflow-hidden rounded-lg shadow-md">
    <div
      className="absolute inset-0 bg-no-repeat bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
      style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: "cover" }}
    ></div>
  
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
      <p className="text-lg text-center font-bold group-hover:translate-y-0 transform translate-y-10 transition-transform duration-500">
        {hoverText}
      </p>
      <Link href={`/${encodedHoverText}`} className="text-blue-500 cursor-pointer hover:underline">View Project Details</Link>

    </div>
  </div>
  
  );
};

export default HoverImage;
