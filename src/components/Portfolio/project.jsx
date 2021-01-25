import React from "react";
import "./style.css";

const Project = ({ name, photo, url, description }) => {
  return (
    <div className="project">
      <img className="project-image" src={photo} alt={name} />
      <div className="project-overlay">
        <a
          className="project-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-text">
            <h2 className="project-title">{name}</h2>
            <div className="project-description">{description}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
