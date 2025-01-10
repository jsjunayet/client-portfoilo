import Hero from '@/Component/Home/Hero/Hero';
import Skill from '@/Component/Skill/skills/Skill';
import React from 'react';
import Education from '@/Component/Education/Education';
import AboutSetion from '@/Component/aboutsection/AboutSetion';
import Offer from '@/Component/Offer/Offer';
import Allproject from '@/Component/Allproject/Allproject';
import Contact from '@/Component/Contactme/Contact';

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
      <Contact></Contact>
    </div>
   
    </>
  );
};

export default Home;