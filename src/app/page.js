import Hero from '@/Component/Home/Hero/Hero';
import Project from '@/Component/Project/Projects/Project';
import Skill from '@/Component/Skill/skills/Skill';
import React from 'react';
import Contact from '@/Component/Contactme/Contackt/Contact';
import Education from '@/Component/Education/Education';
import AboutSetion from '@/Component/aboutsection/AboutSetion';
import Offer from '@/Component/Offer/Offer';
import Allproject from '@/Component/Allproject/Allproject';

const Home = () => {
  return (
    <>
    <div className='pt-12 md:pt-20 max-w-5xl mx-auto'>
      <Hero></Hero>
      <Offer/>
      <Skill></Skill>
      <AboutSetion></AboutSetion>
      <Education></Education>
      <Allproject/>
      {/* <Project></Project> */}
      {/* <Hire></Hire> */}
      <Contact></Contact>
    </div>
   
    </>
  );
};

export default Home;