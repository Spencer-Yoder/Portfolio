import React from "react";

import githubImg from "../../img/github-white.png";
import linkedinImg from "../../img/linkedin-white.png";
import myLogo from "../../img/sy-logo.png";

import "./style.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="copyright">
        <img id="myLogo-footer" src={myLogo} alt="Spencer Yoder logo " />
        <p>&copy; {new Date().getFullYear()} Spencer Yoder</p>
      </div>
      <div className="footer-social">
        <a
          href="https://github.com/Spencer-Yoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="Spencer Yoder github" />
        </a>
        <a
          href="https://www.linkedin.com/in/spencer-yoder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinImg} alt="Spencer Yoder's linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
