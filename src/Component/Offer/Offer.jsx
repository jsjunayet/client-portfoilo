"use client"
import React, { useContext } from "react";
import { ThemContext } from "../Context/ThemContext";
import Title from "../Utility/Title";

const servicesData = [
  {
    title: "Custom Accounting Solutions",
    description:
      "Efficiently tailored accounting services designed to meet unique financial needs and ensure long-term success for businesses of all sizes.",
    icon: "📊", // Replace with an image/icon if needed
    hoverColor: "bg-blue-200",
  },
  {
    title: "Streamlined Bookkeeping",
    description:
      "End-to-end bookkeeping solutions customized to align with your business operations and enhance financial clarity.",
    icon: "🗂️",
    hoverColor: "bg-blue-300",
  },
  {
    title: "Financial Reports",
    description:
      "Comprehensive monthly, quarterly, and annual financial insights for informed and strategic decision-making.",
    icon: "📑",
    hoverColor: "bg-green-200",
  },
  {
    title: "E-commerce Bookkeeping",
    description:
      "Specialized services for tracking daily sales, managing inventory, and reconciling payment gateways for e-commerce businesses.",
    icon: "🛒",
    hoverColor: "bg-blue-200",
  },
  {
    title: "Payroll Processing",
    description:
      "Efficient payroll management, ensuring accurate and timely payments while complying with tax regulations.",
    icon: "💵",
    hoverColor: "bg-blue-300",
  },
  {
    title: "Tax Preparation & Compliance",
    description:
      "Accurate tax preparation and compliance services, ensuring your business meets all regulatory requirements with ease.",
    icon: "📂",
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
    <section id="offer"  className={`md:p-10 p-5 mt-16 rounded-lg ${Light?"bg-[#060417]":""}`}>
      <div className="container mx-auto">
        {/* Section Title */}
        <Title name={"What Do I Offer"}/>
        <p className="text-lg text-center text-gray-300 mb-12">
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
