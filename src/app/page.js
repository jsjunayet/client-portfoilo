import Hero from '@/Component/Home/Hero/Hero';
import Project from '@/Component/Project/Projects/Project';
import Skill from '@/Component/Skill/skills/Skill';
import React from 'react';
import Footer from '@/Component/Footer/Footer';
import Contact from '@/Component/Contactme/Contackt/Contact';
import Education from '@/Component/Education/Education';
import Hire from '@/Component/hire/Hire';
import AboutSetion from '@/Component/aboutsection/AboutSetion';

const Home = () => {
  return (
    <>
    <div className='pt-12 md:pt-20 max-w-5xl mx-auto'>
      <Hero></Hero>
      <Skill></Skill>
      <AboutSetion></AboutSetion>
      <Education></Education>
      <Project></Project>
      {/* <Hire></Hire> */}
      <Contact></Contact>
    </div>
   
    </>
  );
};

export default Home;