import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./resume.scss";
import { useState } from "react";

const Resume = () => {
  return (
    <section className="resume pos-relative">
      <div className="resume__title title border-line-h pos-relative">
        <span>Resume</span>
      </div>

      <div className="resume__container resume__experience-education">
        {/* EXPERIENCE SECTION */}
        <div className="resume__experience-section resume__section-container">
          <div className="resume__section-header resume__experience">
            <div className="resume__sub-title border-line-h pos-relative">
              <div className="resume__icon icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                </svg>
              </div>
              <div className="resume__subtitle-name">
                <span>Experience</span>
              </div>
            </div>
          </div>

          <div className="resume__items line-timeline">
            <div className="resume__item light-background border-line-h pos-relative">
              <div className="resume__item-image">
                <img src="/images/zimbotech-logo.png" alt="company logo" />
              </div>

              <div className="resume__item-date date-green">
                <span>2022 - Present</span>
              </div>
              <div className="resume__item-name">
                <span>Software Developer</span>
              </div>
              <div className="resume__company">Zimbotech (Pvt) Ltd</div>
              <div className="resume__single-post-text">
                <p>
                  Applied the engineering design process to design, develop,
                  test, maintain, and evaluate software.
                </p>
              </div>
              <a
                className="resume__link"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <span className="resume__text">Learn more</span>
                <FontAwesomeIcon
                  icon="angle-right"
                  className="resume__right-arrow"
                />
              </a>
            </div>

            <div className="resume__item light-background border-line-h pos-relative">
              <div className="resume__item-image">
                <img src="/images/outlook-tech-logo.png" alt="company logo" />
              </div>

              <div className="resume__item-date">
                <span>2022 - Present</span>
              </div>
              <div className="resume__item-name">
                <span>Software Developer</span>
              </div>
              <div className="resume__company">
                Outlook Technologies (Pvt) Ltd
              </div>
              <div className="resume__single-post-text">
                <p>
                  applied the engineering design process to design, develop,
                  test, maintain, and evaluate software.
                </p>
              </div>
              <a
                className="resume__link"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <span className="resume__text">Learn more</span>
                <FontAwesomeIcon
                  icon="angle-right"
                  className="resume__right-arrow"
                />
              </a>
            </div>
            <div className="resume__item light-background border-line-h pos-relative">
              <div className="resume__item-image">
                <img src="/images/brand3.png" alt="company logo" />
              </div>

              <div className="resume__item-date">
                <span>2022 - Present</span>
              </div>
              <div className="resume__item-name">
                <span>Software Developer</span>
              </div>
              <div className="resume__company">Google Inc.</div>
              <div className="resume__single-post-text">
                <p>
                  applied the engineering design process to design, develop,
                  test, maintain, and evaluate software.
                </p>
              </div>
              <a
                className="resume__link"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <span className="resume__text">Learn more</span>
                <FontAwesomeIcon
                  icon="angle-right"
                  className="resume__right-arrow"
                />
              </a>
            </div>
          </div>
        </div>

        {/* education section */}
        <div className="resume__education-section resume__section-container border-line-v pos-relative">
          <div className="resume__section-header resume__education">
            <div className="resume__sub-title border-line-h pos-relative">
              <div className="resume__icon icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path>
                </svg>
              </div>
              <div className="resume__subtitle-name">
                <span>Education</span>
              </div>
            </div>
          </div>

          <div className="resume__items resume__education-items line-timeline">
            <div className="resume__item border-line-h pos-relative">
              <div className="resume__item-date">
                <span>Jan 2019 - Nov 2022</span>
              </div>
              <div className="resume__item-name">
                <span>Midlands State University</span>
              </div>
              <div className="resume__company">Gweru</div>
              <div className="resume__single-post-text">
                <p>
                  Bsc Management Information Systems Honours Degree, which
                  focuses on information systems design.
                </p>
              </div>
              <a className="resume__link" href="#">
                <span className="resume__text">CERTIFICATE</span>

                <FontAwesomeIcon
                  icon="angle-right"
                  className="resume__right-arrow"
                />
              </a>
            </div>

            <div className="resume__item border-line-h pos-relative">
              <div className="resume__item-date">
                <span>November 2017</span>
              </div>
              <div className="resume__item-name">
                <span>Darwin High Schoool</span>
              </div>
              <div className="resume__company">Mt Darwin</div>
              <div className="resume__single-post-text">
                <p>
                  ZIMSEC General Certificate of Education Advanced Level.
                  Attained 3 &#39;A-Levels&#39; passes with a total of
                  &#39;9&#39; points in Arts.
                </p>
              </div>
              <a
                className="resume__link"
                target="_blank"
                href="https://www.linkedin.com/"
              >
                <span className="resume__text">CERTIFICATE</span>
                <FontAwesomeIcon
                  icon="angle-right"
                  className="resume__right-arrow"
                />
              </a>
            </div>

            <div className="resume__item border-line-h pos-relative">
              <div className="resume__item-date">
                <span>November 2014</span>
              </div>
              <div className="resume__item-name">
                <span>Mavuradonha Secondary School</span>
              </div>
              <div className="resume__company">Mt Darwin</div>
              <div className="resume__single-post-text">
                <p>
                  ZIMSEC General Certificate of Education Ordinary Level.
                  Attained 7 &#39;O-Levels&#39; passes including Mathematics and
                  English.
                </p>
              </div>
              <a
                className="resume__link"
                target="_blank"
                href="/images/pdfs/Tafadzwa-Software-Developer.pdf"
                download="Tafadzwa's Resume"
              >
                <span className="resume__text">CERTIFICATE</span>
                <FontAwesomeIcon
                  icon="angle-right"
                  className="resume__right-arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAMMING SKILLS */}
      <div className="resume__title title border-line-h pos-relative">
        <span>Programming Skills</span>
      </div>

      <div className="resume__container resume__skills-container">
        <div className="resume__section-container">
          <ul className="resume__skills-items">
            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-python-plain"></i>
                <div className=" resume__skills-name">Python3</div>
              </div>
            </li>

            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-typescript-plain"></i>
                <div className=" resume__skills-name">TypeScript</div>
              </div>
            </li>

            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-java-plain"></i>
                <div className=" resume__skills-name">Java</div>
              </div>
            </li>

            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-csharp-plain"></i>
                <div className=" resume__skills-name">C#</div>
              </div>
            </li>

            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-javascript-plain"></i>
                <div className=" resume__skills-name">JavaScript</div>
              </div>
            </li>
            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-css3-plain-wordmark"></i>
                <div className=" resume__skills-name">Css3</div>
              </div>
            </li>

            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-sass-original col"></i>
                <div className=" resume__skills-name">Sass</div>
              </div>
            </li>

            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-html5-plain-wordmark"></i>
                <div className=" resume__skills-name">Html5</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* TOOL STACK */}
      <div className="resume__title title border-line-h pos-relative">
        <span>Tool Stack</span>
      </div>

      <div className="resume__container resume__toolstack-container">
        <div className="resume__section-container">
          <ul className="resume__skills-items">
            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-vscode-plain"></i>
                <div className=" resume__skills-name">vscode</div>
              </div>
            </li>
            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-vitejs-plain"></i>
                <div className=" resume__skills-name">Vitejs</div>
              </div>
            </li>

            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-bash-plain"></i>
                <div className=" resume__skills-name">Bash</div>
              </div>
            </li>

            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-redux-plain"></i>
                <div className=" resume__skills-name">Redux</div>
              </div>
            </li>
            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-git-plain"></i>
                <div className=" resume__skills-name">Git</div>
              </div>
            </li>
            <li className="resume__skills-item light-background pos-relative">
              <div className="resume__skills-icon">
                <i className="devicon-github-original"></i>
                <div className=" resume__skills-name">GitHub</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* GENERAL SKILLS */}
      <div className="resume__title title border-line-h pos-relative">
        <span>General Skills</span>
      </div>
      <div className="resume__container resume__frameworks-languages">
        {/* FRAMEWORKS SECTION */}
        <div className="resume__frameworks-section resume__section-container">
          <div className="resume__section-header resume__frameworks">
            <div className="resume__sub-title border-line-h pos-relative">
              <div className="resume__icon icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path>
                </svg>
              </div>
              <div className="resume__subtitle-name">
                <span>Frameworks</span>
              </div>
            </div>
          </div>

          <div className="resume__items resume__general-sec-items">
            <ul className="resume__skills-items">
              <li className="resume__skills-item light-background pos-relative">
                <div className="resume__skills-icon">
                  <i className="devicon-react-plain colored"></i>
                  <div className=" resume__skills-name">Reactjs</div>
                </div>
              </li>
              <li className="resume__skills-item light-background pos-relative">
                <div className="resume__skills-icon">
                  <i className="devicon-nodejs-plain-wordmark colored"></i>
                  <div className=" resume__skills-name">Nodejs</div>
                </div>
              </li>
              <li className="resume__skills-item light-background pos-relative">
                <div className="resume__skills-icon">
                  <i className="devicon-express-original"></i>
                  <div className=" resume__skills-name">Expressjs</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/*  LANGUAGES SECTION*/}
        <div className="resume__languages-section resume__section-container">
          <div className="resume__section-header resume__frameworks">
            <div className="resume__sub-title border-line-h pos-relative">
              <div className="resume__icon icon">
                <FontAwesomeIcon icon="language" />
              </div>
              <div className="resume__subtitle-name">
                <span>Languages</span>
              </div>
            </div>
          </div>

          <div className="resume__items">
            <ul className="resume__skills-items resume__general-sec-items">
              <li className="resume__skills-item light-background pos-relative">
                <div className="resume__skills-icon">
                  <img
                    src="/images/united-kingdom.png"
                    style={{ width: "4rem", height: "4rem" }}
                  />
                  <div className=" resume__skills-name">English</div>
                </div>
              </li>
              <li className="resume__skills-item light-background pos-relative">
                <div className="resume__skills-icon">
                  <img src="/images/zim-flag.png" />
                  <div className=" resume__skills-name">Shona</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume__container resume__databases-knowledge">
        {/* DATABASES SECTION */}
        <div className="resume__databases-section resume__section-container">
          <div className="resume__section-header resume__frameworks">
            <div className="resume__sub-title border-line-h pos-relative">
              <div className="resume__icon icon">
                <FontAwesomeIcon icon="database" />
              </div>
              <div className="resume__subtitle-name">
                <span>DATABASES</span>
              </div>
            </div>
          </div>

          <div className="resume__items">
            <ul className="resume__skills-items resume__general-sec-items">
              <li className="resume__skills-item light-background pos-relative">
                <div className="resume__skills-icon">
                  <i className="devicon-oracle-plain"></i>
                  <div className=" resume__skills-name">Oracle</div>
                </div>
              </li>
              <li className="resume__skills-item light-background pos-relative">
                <div className="resume__skills-icon">
                  <i className="devicon-postgresql-plain"></i>
                  <div className=" resume__skills-name">PostgreSQL</div>
                </div>
              </li>
              <li className="resume__skills-item light-background pos-relative">
                <div className="resume__skills-icon">
                  <i className="devicon-mongodb-plain colored"></i>
                  <div className=" resume__skills-name">MongoDB</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/*  KNOWLEDGE SECTION*/}
        <div className="resume__knowledge-section resume__section-container">
          <div className="resume__section-header resume__frameworks">
            <div className="resume__sub-title border-line-h pos-relative">
              <div className="resume__icon icon">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
                </svg>
              </div>
              <div className="resume__subtitle-name">
                <span>Knowledge</span>
              </div>
            </div>
          </div>

          <div className="resume__items resume__general-sec-items">
            <ul className="resume__knowledge-items">
              <li className="resume__knowledge-item">
                <div className="resume__knowledge-name">
                  <span> Data science and machine learning </span>
                </div>
              </li>
              <li className="resume__knowledge-item">
                <div className="resume__knowledge-name">
                  <span> Data structures and algorithms </span>
                </div>
              </li>
              <li className="resume__knowledge-item">
                <div className="resume__knowledge-name">
                  <span> SQL and database technologies </span>
                </div>
              </li>
              <li className="resume__knowledge-item">
                <div className="resume__knowledge-name">
                  <span> Project management and development </span>
                </div>
              </li>
              <li className="resume__knowledge-item">
                <div className="resume__knowledge-name">
                  <span> Git and GitHub </span>
                </div>
              </li>
              <li className="resume__knowledge-item">
                <div className="resume__knowledge-name">
                  <span> Linux and Windows management </span>
                </div>
              </li>
              <li className="resume__knowledge-item">
                <div className="resume__knowledge-name">
                  <span> Communication and collaboration </span>
                </div>
              </li>
              <li className="resume__knowledge-item">
                <div className="resume__knowledge-name">
                  <span> Object-Oriented Programming (OOP) </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
