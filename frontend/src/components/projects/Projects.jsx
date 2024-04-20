import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./projects.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Info from "./Info";
import getAllProjectList from "../../utils/GlobalApi";

const Projects = () => {
  const [infoPageOpen, setInfoPageOpen] = useState(false);
  const [projectLists, setProjectLists] = useState([]);
  const [projectItem, setProjectItem] = useState();

  const toggleInfoPage = (project) => {
    setInfoPageOpen(!infoPageOpen);
    setProjectItem(project);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = () => {
    getAllProjectList().then((resp) => {
      setProjectLists(resp?.projectLists);
    });
  };

  return (
    <>
      {infoPageOpen && (
        <Info closeInfo={toggleInfoPage} projectItem={projectItem} />
      )}

      <section className="projects">
        <div className="projects__container">
          <div className="projects__title title border-line-h pos-relative">
            <span>Projects</span>
          </div>

          <div className="projects__content pos-relative">
            <div className="projects__items-container pos-relative">
              <div className="projects__items">
                {projectLists.map((project) => (
                  <div
                    key={project?.id}
                    className="projects__item border-line-h pos-relative"
                  >
                    <Link
                      className="projects__image-link"
                      onClick={() => toggleInfoPage(project)}
                    >
                      <div className="projects__image">
                        <img src={project?.image[0]?.url} />
                        <span className="projects__img-txt">More info</span>
                      </div>
                    </Link>
                    <div className="projects__desc">
                      <div className="projects__name">
                        <span>{project?.title}</span>
                      </div>
                      <div className="projects__title">
                        <span>{project?.info}</span>
                        <a
                          href="https://www.github.com/Tfeadzwa"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "github"]}
                            className="projects__git-icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
