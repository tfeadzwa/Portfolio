import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title title border-line-h pos-relative">
        <span className="first-word"></span>
        <span>About Me</span>
      </h2>

      <div className="about__container border-line-h pos-relative">
        <div className="about__content custom-text">
          <div className="about__custom-intro">
            <p>
              Hey, there 👋 I&#39;m Tafadzwa, a Software developer and Data
              scientist with over 1.5+ years of experience, specialising in Java
              and React. Also I&#39;m proficient at using tools and programming
              languages such as Python or SQL to manipulate and analyze data.
            </p>
          </div>
        </div>

        <div className="about__other border-line-v pos-relative">
          <div className="about__location info-list border-line-h pos-relative">
            <strong>
              <span>Location: </span>
            </strong>
            <span>Harare, ZW</span>
          </div>
          <div className="about__languages info-list border-line-h pos-relative">
            <strong>
              <span>Languages: </span>
            </strong>
            <span>English, Shona</span>
          </div>
          <div className="about__skills info-list border-line-h pos-relative">
            <strong>
              <span>Skills: </span>
            </strong>
            <div className="about__tool-items">
              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <FontAwesomeIcon icon={["fab", "react"]} />
                </div>
                <div className="about__tooltip">React</div>
              </div>

              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </div>
                <div className="about__tooltip">GitHub</div>
              </div>

              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <FontAwesomeIcon icon={["fab", "node-js"]} />
                </div>
                <div className="about__tooltip">Node.js</div>
              </div>

              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <FontAwesomeIcon icon={["fab", "js"]} />
                </div>
                <div className="about__tooltip">JavaScript</div>
              </div>

              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <i className="devicon-azuresqldatabase-plain"></i>
                </div>
                <div className="about__tooltip">SQL</div>
              </div>

              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <i className="devicon-mongodb-plain"></i>
                </div>
                <div className="about__tooltip">MongoDB</div>
              </div>

              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <FontAwesomeIcon icon={["fab", "python"]} />
                </div>
                <div className="about__tooltip">Python</div>
              </div>

              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <FontAwesomeIcon icon={["fab", "java"]} />
                </div>
                <div className="about__tooltip">Java</div>
              </div>

              {/* <div className="about__tool-item">
                <div className="about__tool-icon">
                  <i className="devicon-vscode-plain"></i>
                </div>
                <div className="about__tooltip">VS Code</div>
              </div> */}

              {/* <div className="about__tool-item">
                <div className="about__tool-icon">
                  <i className="devicon-express-original"></i>
                </div>
                <div className="about__tooltip">Express JS</div>
              </div> */}
              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <i className="devicon-sass-original"></i>
                </div>
                <div className="about__tooltip">Sass</div>
              </div>
              {/* <div className="about__tool-item">
                <div className="about__tool-icon">
                  <i className="devicon-androidstudio-plain"></i>
                </div>
                <div className="about__tooltip">Android Studio</div>
              </div> */}
              <div className="about__tool-item">
                <div className="about__tool-icon">
                  <i className="devicon-redux-original"></i>
                </div>
                <div className="about__tooltip">Redux</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__myservices">
        <h2 className="about__title title border-line-h pos-relative">
          <span className="first-word"></span>
          <span>My Services</span>
        </h2>

        <div className="about__services-container">
          <div className="about__service-items border-line-v pos-relative">
            <div className="about__item-container border-line-h pos-relative">
              <div className="about__service-item">
                <div className="about__service-icon icon">
                  <svg
                    aria-hidden="true"
                    className="svg e-fab-app-store-ios"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"></path>
                  </svg>
                </div>
                <div className="about__service-name">
                  <span>App Development</span>
                </div>
                <div className="about__service-desc">
                  <p>
                    End-to-end organization, ui/ux design, optimization, and
                    maintenance of your mobile app project
                  </p>
                </div>
              </div>
            </div>
            <div className="about__item-container border-line-h pos-relative">
              <div className="about__service-item">
                <div className="about__service-icon icon">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
                  </svg>
                </div>
                <div className="about__service-name">
                  <span>Data Scientist</span>
                </div>
                <div className="about__service-desc">
                  <p>
                    Great marketing campaigns, improve customer service, better
                    business decisions and effective strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="about__item-container border-line-h pos-relative">
              <div className="about__service-item">
                <div className="about__service-icon icon">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z"></path>
                  </svg>
                </div>
                <div className="about__service-name">
                  <span>App Prototyping</span>
                </div>
                <div className="about__service-desc">
                  <p>
                    We build a prototype of application concept in record time
                    to validate assumptions, figure what works.
                  </p>
                </div>
              </div>
            </div>
            <div className="about__item-container border-line-h pos-relative">
              <div className="about__service-item">
                <div className="about__service-icon icon">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </div>
                <div className="about__service-name">
                  <span>Project Management</span>
                </div>
                <div className="about__service-desc">
                  <p>
                    Planning, organizing and managing project activities
                    required to complete an individual project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
