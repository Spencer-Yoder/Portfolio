import React from "react";

import Nav from "../components/Nav/nav";
import Hero from "../components/Hero/hero";
import About from "../components/About/about";
import Skills from "../components/Skills/skills";
import Portfolio from "../components/Portfolio/portfolio";
import Education from "../components/Education/education";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
import Work from "../components/Work/work";

const IndexPage = () => {
  return (
    <div className="page-container">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default IndexPage;
