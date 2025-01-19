import React from "react";
import HoverImage from "./HoverImage";
import Title from "../Utility/Title";
import { ProjectDetailsData } from "../Utility/Alldata";

const Allproject = () => {
  
  

  return (
   <section id="project" className="">
        <Title name={"Achievements & Projects"}/>
     <div className="mt-10 grid gap-4 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      {ProjectDetailsData.slice(0,6).map((item, index) => (
        <HoverImage
          key={item.id}
          imageSrc={item.images[0]}
          hoverText={item.type}
          link={item.title}
        />
      ))}
    </div>
   </section>
  );
};

export default Allproject;
