import React from "react";

import SectionTitle from "../Titles/sectionTitle";
import download from "../../img/download.svg";

import "./about.css";

const About = () => {
  return (
    <div id="about">
      <SectionTitle title="About Me" color="#ebeeee" />
      <div className="about-description-container">
        <p className="first-letter">
          Hey! I'm a Chiacgo based Mobile App Developer. Currently working at
          Discover Financial Services to produce an award winning Mobile app
          that provides customers a great user experience. When I am not at
          work, I like to spend my time learning new and existing skills.
        </p>
        <p>
          I’m passionate about learning the latest and greatest technologies
          whether that’s the frontend or backend. I enjoy creating responsive
          and useful applications that help serve people better. I love working
          in fast paced environments to collaborate with other teams to
          accomplish a goal.
        </p>

        <div className="more-details">
          <div className="contact-details">
            <h3 className="contact-details-text">Contact Details</h3>
            <p className="contact-details-text">Spencer Yoder</p>
            <p className="contact-details-text">Chicago, Illinois</p>
            <a
              href="mailto:Spencer@TheYoder.net"
              className="contact-details-text"
            >
              Spencer@TheYoder.net
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/spencer-yoder/"
            target="_blank"
            className="download-button"
          >
            <img
              src={download}
              alt="resume download"
              style={{ height: 20, paddingRight: 10 }}
            />
            Resume Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
