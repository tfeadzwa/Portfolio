import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import styled from "styled-components";

const DivOverlay = styled.div`
  position: fixed;
  display: ${(props) => props.display};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 106;
  opacity: 0.6;
`;

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <DivOverlay
        className="overlay"
        display={showSidebar ? "block" : "none"}
      ></DivOverlay>

      {<Sidebar onClose={toggleSidebar} left={showSidebar ? 0 : -438} />}

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
              <button
                className="header__menu-hamburger"
                onClick={toggleSidebar}
              >
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
    </>
  );
};

export default Header;
