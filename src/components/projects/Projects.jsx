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
            <div className="projects__item-container">
              <div className="projects__item">
                <div className="projects__item-image">
                  <Link>
                    <img src="/images/work-r2.jpg" alt="projects__item-image" />
                    <span className="projects__item-info">
                      <span className="projects__eye-icon"></span>
                    </span>
                  </Link>
                </div>
                <div className="projects__item-desc">
                  <div className="projects__desc-info">
                    <div>MENCRUIT</div>
                    <div>MenCruit Rucruitment Web application System</div>
                  </div>
                  <a href="https://www.github.com/Tfeadzwa">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
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
