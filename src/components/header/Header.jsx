import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
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
} from "@fortawesome/free-solid-svg-icons";

// Add only the icons you need to the library
library.add(
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
  faPhone
);

const Header = () => {
  return (
    <header className="header w-btn-hide">
      <section className="header__container">
        <div className="header__profile">
          <div className="header__left">
            <div className="header__title">Benjamin Ryan</div>
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
            <div className="header__toggle-theme">
              <FontAwesomeIcon icon="sun" />
              {/* <FontAwesomeIcon icon={faMoon} /> */}
            </div>
            <div className="header__menu-hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="header__top-menu menu-centered">
          <Link to="/home/about">
            <FontAwesomeIcon
              className="header__menu-icon custom"
              icon="circle-user"
            />
            <span>ABOUT</span>
          </Link>
          <Link to="/home/resume">
            <FontAwesomeIcon
              className="header__menu-icon custom"
              icon="file-lines"
            />
            <span>RESUME</span>
          </Link>
          <Link to="/home/resume">
            <FontAwesomeIcon
              className="header__menu-icon custom"
              icon="microchip"
            />
            <span>PROJECTS</span>
          </Link>
          <Link to="/home/resume">
            <FontAwesomeIcon className="header__menu-icon" icon="comments" />
            <span>ARTICLES</span>
          </Link>
          <Link to="/home/resume">
            <FontAwesomeIcon className="header__menu-icon" icon="envelope" />
            <span>CONTACT</span>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
