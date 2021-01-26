import React from "react";

import SectionTitle from "../Titles/sectionTitle";

import "./style.css";

const Education = () => {
  return (
    <div id="education">
      <SectionTitle title={"Education"} />
      <div className="education-container">
        <div className="education-text">
          <p className="edu-p1">Northern Illinois University</p>
          <p className="edu-p2">
            Bachelor of Science - Computer Science <span>•</span> December 2018
          </p>
          <p className="edu-p3">
            Concentrated on the skills needed to be a software developer,
            including programming in several languages, database management, and
            software engineering. Created many different projects that contained
            frontend and backend applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
