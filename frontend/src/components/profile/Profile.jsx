import styled from "styled-components";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile.scss";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__content">
          <div className="profile__slide">
            <div className="profile__image"></div>
            <div className="profile__info">
              <div className="profile__title">Tanyanyiwa</div>
              <div className="profile__typed">
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
                  className="profile__subtitle"
                  style={{ fontSize: "1.3125rem", overflow: "hidden" }}
                />
              </div>
              <div className="profile__socials">
                <a href="https://www.linkedin.com/">
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="profile__icon"
                  />
                </a>
                <a href="https://www.reddit.com">
                  <FontAwesomeIcon
                    icon={["fab", "reddit"]}
                    className="profile__icon"
                  />
                </a>
                <a href="https://www.x.com">
                  <FontAwesomeIcon
                    icon={["fab", "x-twitter"]}
                    className="profile__icon"
                  />
                </a>
                <a href="https://www.stackoverflow.com">
                  <FontAwesomeIcon
                    icon={["fab", "stack-overflow"]}
                    className="profile__icon"
                  />
                </a>
                <a href="https://github.com/Tfeadzwa">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="profile__icon"
                  />
                </a>
              </div>
            </div>
            <div className="profile__download-contact border-line-h">
              <button
                type="button"
                id="download-btn"
                className="profile__download-btn"
              >
                <span>DOWNLOAD CV</span>
                <FontAwesomeIcon icon="cloud-arrow-down" />
              </button>
              <button
                type="button"
                id="contact-btn"
                className="profile__contact-btn"
              >
                <span>CONTACT</span>
                <FontAwesomeIcon icon="phone" />
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

export default Profile;

const Glitch = styled.div`
  background-image: url(${(props) => props.src});
  /* add other CSS properties for the glitch effect */
`;
