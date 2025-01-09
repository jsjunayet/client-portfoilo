import React from "react";

const HoverImage = ({ imageSrc, hoverText, pdfLink }) => {
  return (
    <div className="relative group  h-64 overflow-hidden rounded-lg shadow-md">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>

      {/* Animated Overlay and Text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
      >
        <p className="text-lg text-center font-bold group-hover:translate-y-0 transform translate-y-10 transition-transform duration-500">
          {hoverText}
        </p>

        {/* PDF Download Button */}
        <a
          href={pdfLink}
          download
          className="mt-4 px-4 py-2 bg-blue-500 rounded text-white font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default HoverImage;