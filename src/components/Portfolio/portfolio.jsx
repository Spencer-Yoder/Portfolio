import React from "react";

import SectionTitle from "../Titles/sectionTitle";

import Project from "./project";
import { projects } from "./myProjects";
import "./style.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <SectionTitle title={"Projects"} color="#313131" />
      <div className="projects-container">
        {projects.map(p => (
          <Project key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
