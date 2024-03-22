import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import "./header.scss";

import {
  faCircleUser,
  faFileLines,
  faEnvelope,
  faComments,
  faSun,
  faMicrochip,
  faBriefcase,
  faMoon,
  faCloudArrowDown,
  faPhone,
  faDatabase,
  faAngleRight,
  faLanguage,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

// Add only the icons you need to the library
library.add(
  faFlagUsa,
  fab,
  faCircleUser,
  faFileLines,
  faEnvelope,
  faComments,
  faSun,
  faMicrochip,
  faBriefcase,
  faMoon,
  faCloudArrowDown,
  faPhone,
  faDatabase,
  faAngleRight,
  faLanguage
);

const Header = () => {
  return (
    <header className="header w-btn-hide">
      <section className="header__container">
        <div className="header__profile">
          <div className="header__left">
            <div className="header__title">Tafadzwa Tanyanyiwa</div>
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Software Developer ",
                "Mobile App Developer",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="_"
              showCursor={true}
              backDelay={2000}
              className="header__subtitle"
            />
          </div>
          <div className="header__right">
            <button className="header__toggle-theme">
              <FontAwesomeIcon icon="sun" />
              {/* <FontAwesomeIcon icon={faMoon} /> */}
            </button>
            <button className="header__menu-hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className="header__top-menu menu-centered">
          <NavLink to="/about">
            <FontAwesomeIcon
              className="header__menu-icon custom"
              icon="circle-user"
            />
            <span>ABOUT</span>
          </NavLink>
          <NavLink to="/resume">
            <FontAwesomeIcon
              className="header__menu-icon custom"
              icon="file-lines"
            />
            <span>RESUME</span>
          </NavLink>
          <NavLink to="/projects">
            <FontAwesomeIcon
              className="header__menu-icon custom"
              icon="microchip"
            />
            <span>PROJECTS</span>
          </NavLink>
          <NavLink to="/articles">
            <FontAwesomeIcon className="header__menu-icon" icon="comments" />
            <span>ARTICLES</span>
          </NavLink>
          <NavLink to="/contact">
            <FontAwesomeIcon className="header__menu-icon" icon="envelope" />
            <span>CONTACT</span>
          </NavLink>
        </div>
      </section>
    </header>
  );
};

export default Header;
