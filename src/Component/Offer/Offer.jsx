"use client"
import React, { useContext } from "react";
import { ThemContext } from "../Context/ThemContext";
import Title from "../Utility/Title";
import { servicesData } from "../Utility/Alldata";

const SkillCard = ({ title, description, icon, hoverColor }) => {
  return (
    <div
      className={`relative p-3 rounded-lg  shadow-md transition-transform transform hover:scale-105 hover:shadow-xl ${hoverColor}`}
    >
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center bg-white shadow-md rounded-full">
        <span className="text-2xl">{icon}</span>
      </div>
      <h2 className="text-xl font-semibold text-center mt-10">{title}</h2>
      <p className="text-sm text-gray-600 mt-4 text-center">{description}</p>
    </div>
  );
};

const Offer = () => {
    const { Light } = useContext(ThemContext);

  return (
    <section id="offer"  className={`md:p-10 p-5  rounded-lg ${Light?"bg-gray-100 text-black":"bg-[#060417]"}`}>
      <div className="container mx-auto">
        {/* Section Title */}
        <Title name={"What Do I Offer"}/>
        <p className="text-lg text-center  mb-12">
        Efficiently tailored services designed to meet unique financial needs and ensure long-term success.
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:space-y-0 space-y-4">
          {servicesData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              hoverColor={skill.hoverColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
