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

        <div className="projects__content pos-relative">
          <div className="projects__items-container pos-relative">
            <div className="projects__items">
              <div className="projects__item">
                <Link className="projects__image-link">
                  <div className="projects__image">
                    <img src="/images/work-r2.jpg" />
                  </div>
                </Link>
                <div className="projects__desc">
                  <div className="projects__name">
                    <span>CONTENT</span>
                  </div>
                  <div className="projects__title">
                    <span>Cryptocurrency Dashboard Application</span>
                    <a href="https://www.github.com/Tfeadzwa" target="_blank">
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className="projects__git-icon"
                      />
                    </a>
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
                    <span>CONTENT</span>
                  </div>
                  <div className="projects__title">
                    <span>Cryptocurrency Dashboard Application</span>
                    <a href="https://www.github.com/Tfeadzwa" target="_blank">
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className="projects__git-icon"
                      />
                    </a>
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
                    <span>CONTENT</span>
                  </div>
                  <div className="projects__title">
                    <span>Cryptocurrency Dashboard Application</span>
                    <a href="https://www.github.com/Tfeadzwa" target="_blank">
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className="projects__git-icon"
                      />
                    </a>
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
                    <span>CONTENT</span>
                  </div>
                  <div className="projects__title">
                    <span>Cryptocurrency Dashboard Application</span>
                    <a href="https://www.github.com/Tfeadzwa" target="_blank">
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className="projects__git-icon"
                      />
                    </a>
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
