import Hero from '@/Component/Home/Hero/Hero';
import Skill from '@/Component/Skill/skills/Skill';
import React from 'react';
import Education from '@/Component/Education/Education';
import AboutSetion from '@/Component/aboutsection/AboutSetion';
import Offer from '@/Component/Offer/Offer';
import Allproject from '@/Component/Allproject/Allproject';
import Contact from '@/Component/Contactme/Contact';
import ProjectDetails from '@/Component/project-details/ProjectDetails';

const Home = () => {
  return (
    <>
    <div className=' max-w-5xl mx-auto space-y-8'>
      <Hero></Hero>
      <Offer/>
      <Skill></Skill>
      <AboutSetion></AboutSetion>
      <Education></Education>
      <Allproject/>
      <Contact></Contact>
      <ProjectDetails/>
    </div>
   
    </>
  );
};

export default Home;