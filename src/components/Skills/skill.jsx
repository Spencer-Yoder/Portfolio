import React from "react";
import "./skills.css";

const Skill = ({ name, image, percentage, imageWidth }) => {
  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: "#313131",
    borderRadius: 4
  };

  return (
    <div className="skill">
      <div className="skill-imageAndName">
        <p className="skill-name">{name}</p>
      </div>
      <div className="skill-bar">
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

export default Skill;
