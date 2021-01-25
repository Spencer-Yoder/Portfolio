import React from "react";

import SectionTitle from "../Titles/sectionTitle";

import Skill from "./skill";
import { mySkills } from "./mySkills";
import "./skills.css";

const Hero = () => {
  return (
    <div id="skills">
      <SectionTitle title="My Skills" color="#040b0eff" />
      <div className="skills-container">
        {Object.keys(mySkills).map(skillType => (
          <div className={`skills-type skills-${skillType}`} key={skillType}>
            {mySkills[skillType].map(skill => (
              <Skill {...skill} key={skill.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
