"use client"
import React, { useContext } from "react";
import { ThemContext } from "../Context/ThemContext";
import Title from "../Utility/Title";

const skillsData = [
  {
    title: "Frontend",
    description:
      "Frontend development involves crafting the visual elements of a website or application to create a user-friendly and engaging interface. Frontend developers use HTML, CSS, and JavaScript to build.",
    icon: "🖌️", // Replace with an image/icon if needed
    hoverColor: "bg-blue-100",
  },
  {
    title: "Backend",
    description:
      "Backend development focuses on server-side programming, databases, and server management to create the functional infrastructure that powers websites and applications.",
    icon: "🔧",
    hoverColor: "bg-blue-300",
  },
  {
    title: "Fullstack",
    description:
      "Full-stack development encompasses both frontend and backend programming, enabling developers to create complete, end-to-end web applications, handling user interfaces.",
    icon: "🌐",
    hoverColor: "bg-green-200",
  },
];

// Reusable SkillCard Component
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
    <section  className={`p-10 mt-16 rounded-lg ${Light?"bg-[#060417]":""}`}>
      <div className="container mx-auto">
        {/* Section Title */}
        <Title name={"SKILLS"}/>
        <p className="text-lg text-center text-gray-300 mb-12">
          Expertise in various development stacks to create modern, scalable, and efficient applications.
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:space-y-0 space-y-4">
          {skillsData.map((skill, index) => (
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
