import React, { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import "particles.js/particles";

import githubImg from "../../img/github.png";
import linkedinImg from "../../img/linkedin.svg";

import "./hero.css";

const particlesJS = window.particlesJS;

const Hero = () => {
  const handleScroll = () => {
    const scroll = new SmoothScroll(),
      elmt = document.getElementById("about");
    scroll.animateScroll(elmt);
  };

  useEffect(() => {
    const jsonPath =
      window.innerWidth <= 800
        ? "./particlesjs-mobile-config.json"
        : "./particlesjs-config.json";
    particlesJS.load("hero-container", jsonPath);
  }, []);

  return (
    <div id="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">Spencer Yoder</h1>
        <div className="hero-description">Mobile App Developer</div>
        <div className="social-container">
          <div className="socal-icons">
            <div className="social-item">
              <a
                href="https://github.com/Spencer-Yoder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubImg} alt="Spencer Yoder github" />
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://www.linkedin.com/in/spencer-yoder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinImg} alt="Spencer Yoder linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-button-container">
        <button onClick={handleScroll} className="learn-more-button">
          ▼
        </button>
      </div>
    </div>
  );
};

export default Hero;
