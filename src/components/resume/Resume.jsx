import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./resume.scss";

const Resume = () => {
  return (
    <section className="resume pos-relative">
      <div className="resume__title title border-line-h pos-relative">
        <span>Resume</span>
      </div>

      {/* experience section */}
      <div className="resume__experience-section">
        <div className="resume__container resume__experience">
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
          <div className="resume__item border-line-h pos-relative">
            <div className="resume__item-image">
              <img src="/images/brand3.png" alt="company logo" />
            </div>

            <div className="resume__item-date date-green">
              <span>2022 - Present</span>
            </div>
            <div className="resume__item-name">
              <span>Software Developer</span>
            </div>
            <div className="resume__company">Google Inc.</div>
            <div className="resume__single-post-text">
              <p>
                applied the engineering design process to design, develop, test,
                maintain, and evaluate software.
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

          <div className="resume__item border-line-h pos-relative">
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
                applied the engineering design process to design, develop, test,
                maintain, and evaluate software.
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
          <div className="resume__item border-line-h pos-relative">
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
                applied the engineering design process to design, develop, test,
                maintain, and evaluate software.
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
      <div className="resume__education-section">
        <div className="resume__container resume__education">
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

        <div className="resume__items line-timeline">
          <div className="resume__item border-line-h pos-relative">
            <div className="resume__item-date">
              <span>2019 - 2022 </span>
            </div>
            <div className="resume__item-name">
              <span>Midlands State University</span>
            </div>
            <div className="resume__company">Gweru</div>
            <div className="resume__single-post-text">
              <p>
                BSc Management Information Systems, which focuses on information
                systems design.
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
        </div>
      </div>
    </section>
  );
};

export default Resume;
