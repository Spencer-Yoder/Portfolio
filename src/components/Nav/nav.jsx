import React, { useState } from "react";
import SmoothScroll from "smooth-scroll";

import menuSVG from "../../img/menu.svg";
import closeSVG from "../../img/close.svg";
import myLogo from "../../img/sy-logo.png";

import "./nav.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = target => {
    const scroll = new SmoothScroll();
    let anchor;
    if (target.tagName === "DIV") anchor = target.querySelector("a");
    else if (target.tagName === "A") anchor = target;

    if (anchor) {
      const id = anchor.hash.replace("#", "");
      const elmt = document.getElementById(id);
      if (elmt) scroll.animateScroll(elmt);
    }
  };

  const showMenu = ev => {
    const menu = document.getElementById("nav-center");
    menuOpen ? menu.classList.remove("active") : menu.classList.add("active");
    setMenuOpen(!menuOpen);
    scrollTo(ev.target);
  };

  return (
    <div id="nav-container">
      <div id="myLogo-nav">
        <img src={myLogo} alt="Spencer Yoder logo" />
      </div>

      <div className="hamburguer" onClick={showMenu}>
        <img src={menuSVG} alt="open hamburguer menu" />
      </div>

      <div id="nav-center">
        <div className="close" onClick={showMenu}>
          <img src={closeSVG} alt="close hamburger menu" />
        </div>

        <div className="nav-link" onClick={showMenu}>
          <a data-scroll href="#about">
            About
          </a>
        </div>

        <div className="nav-link" onClick={showMenu}>
          <a data-scroll href="#skills">
            Skills
          </a>
        </div>

        <div className="nav-link" onClick={showMenu}>
          <a data-scroll href="#work">
            Work
          </a>
        </div>

        <div className="nav-link" onClick={showMenu}>
          <a data-scroll href="#education">
            Education
          </a>
        </div>

        <div className="nav-link" onClick={showMenu}>
          <a data-scroll href="#portfolio">
            Projects
          </a>
        </div>

        <div className="nav-link" onClick={showMenu}>
          <a data-scroll href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
