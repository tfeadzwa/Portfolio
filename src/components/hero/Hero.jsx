import styled from "styled-components";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__profile-container">
        <div className="hero__profile-image">
          <div className="hero__profile-blur">
            <div className="hero__profile-title">
              <div className="hero__title">
                Benjamin Ryan
              </div>
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
                className="hero__subtitle"
                style={{ fontSize: "1.3125rem" }}
              />
            </div>
            <div className="hero__profile-socials">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="hero__profile-icon"
              />
              <FontAwesomeIcon
                icon={["fab", "reddit"]}
                className="hero__profile-icon"
              />
              <FontAwesomeIcon
                icon={["fab", "x-twitter"]}
                className="hero__profile-icon"
              />
              <FontAwesomeIcon
                icon={["fab", "stack-overflow"]}
                className="hero__profile-icon"
              />
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="hero__profile-icon"
              />
            </div>

            <div className="hero__delete-contact">
              <button
                type="button"
                id="download-btn"
                className="hero__download-btn"
              >
                DOWNLOAD CV <FontAwesomeIcon icon="cloud-arrow-down" />
              </button>
              <button
                type="button"
                id="contact-btn"
                className="hero__contact-btn"
              >
                CONTACT <FontAwesomeIcon icon="phone" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="canvas abstract-background"
        id="abstract-bg-js"
        data-color="#848484"
      >
        <canvas
          id="defaultCanvas0"
          className="p5Canvas"
          width="3072"
          height="1552"
          style={{ width: 1536 + "px", height: 776 + "px" }}
        ></canvas>
      </div> 
      
      <Glitch
        src="https://res.cloudinary.com/demo/image/fetch/c_scale,w_600/https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=80"
        key="glitch-1"
      />
      <Glitch
        src="https://res.cloudinary.com/demo/image/fetch/c_scale,w_600/https://images.unsplash.com/photo-1544794040-a6ab770bec83?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=80"
        key="glitch-2"
      />
      */}
    </section>
  );
};

export default Hero;

const Glitch = styled.div`
  background-image: url(${(props) => props.src});
  /* add other CSS properties for the glitch effect */
`;
