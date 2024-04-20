import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Infor from "./Infor";
import PropTypes from "prop-types";

const Info = ({ closeInfo, projectItem }) => {
  return (
    <Infor className="info">
      <div className="info__container">
        <div className="info__close">
          <button type="button" className="info__close-btn" onClick={closeInfo}>
            <FontAwesomeIcon icon="close" />
          </button>
        </div>
        <div className="info__content">
          <div className="info__img-content">
            <img src="/images/news1.jpg" alt="info image" />
          </div>
          <div className="info__text-content">
            <div className="info__text-desc">
              <div className="info__title title pos-relative">
                {projectItem?.title}
              </div>
              <div className="info__project-info">Project Info:</div>
              <p>{projectItem?.info}</p>
            </div>
            <div className="info__tools">
              <div className="info__tools-title pos-relative">
                Technologies:
              </div>
              <div className="info__tools-items">
                {projectItem?.tool?.map((tool) => (
                  <div key={tool?.id} className="info__tools-item">
                    <div
                      className="info__tools-icon"
                      dangerouslySetInnerHTML={{ __html: tool?.icon }}
                    />
                    <div className="info__tooltip">{tool?.name}</div>
                  </div>
                ))}
              </div>

              <div className="info__buttons">
                <a href={projectItem?.demoUrl} target="_blank">
                  <FontAwesomeIcon icon="globe" />
                  <span>Live Demo</span>
                </a>
                <a href={projectItem?.gitUrl} target="_blank">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Infor>
  );
};

Info.propTypes = {
  closeInfo: PropTypes.func.isRequired,
};

export default Info;
