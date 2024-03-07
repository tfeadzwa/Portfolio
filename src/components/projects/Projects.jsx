import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./projects.scss";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__title title border-line-h pos-relative">
          <span>Projects</span>
        </div>

        <div className="projects__content border-line-v pos-relative">
          <div className="projects__items-container">
            <div className="projects__items">
              <div className="projects__item">
                <Link className="projects__image-link">
                  <div className="projects__image">
                    <img src="/images/work-r2.jpg" />
                  </div>
                </Link>
                <div className="projects__desc">
                  <div className="projects__name">
                    <span>Content</span>
                  </div>
                  <div className="projects__title">
                    <span>Cryptocurrency Dashboard Application</span>
                  </div>
                </div>
              </div>
              <div className="projects__item">
                <Link className="projects__image-link">
                  <div className="projects__image">
                    <img src="/images/work3-1.jpg" />
                  </div>
                </Link>
                <div className="projects__desc">
                  <div className="projects__name">
                    <span>Content</span>
                  </div>
                  <div className="projects__title">
                    <span>Cryptocurrency Dashboard Application</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
