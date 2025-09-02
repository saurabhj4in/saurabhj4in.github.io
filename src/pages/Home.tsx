import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import SecuredCompanies from '../components/SecuredCompanies';


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Certifications />
      <Skills />
      <Experience />
      <>Blog</>
      <>Contact Us</>
    </>
  );
};

export default Home;