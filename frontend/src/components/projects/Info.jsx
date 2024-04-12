import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Infor from "./Infor";
import PropTypes from "prop-types";

const Info = ({ closeInfo, closeAnimation }) => {
  return (
    <Infor className="info" $closeAnimation={closeAnimation}>
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
              <div className="info__title title pos-relative">MenCruit</div>
              <div className="info__project-info">Project Info:</div>
              <p>
                Cupidatat consequat esse ea nostrud consectetur irure deserunt
                et elit dolore esse do sint. Ut ipsum dolor eu Lorem
                reprehenderit aliqua irure occaecat. Eu elit consectetur ullamco
                duis nulla esse duis velit. Sint consequat id cupidatat amet
                Nisi nulla ea incididunt anim qui mollit enim consequat.
              </p>
              <p>
                Duis laborum eu ex reprehenderit anim minim aliquip pariatur.
                Amet nisi officia est pariatur do esse fugiat commodo eiusmod.
              </p>
            </div>
            <div className="info__tools">
              <div className="info__tools-title pos-relative">
                Technologies:
              </div>
              <div className="info__tools-items">
                <div className="info__tools-item">
                  <div className="info__tools-icon">
                    <i className="devicon-html5-plain-wordmark"></i>
                  </div>
                  <div className="info__tooltip">HTML5</div>
                </div>
                <div className="info__tools-item">
                  <div className="info__tools-icon">
                    <i className="devicon-css3-plain-wordmark"></i>
                  </div>
                  <div className="info__tooltip">CSS3</div>
                </div>
                <div className="info__tools-item">
                  <div className="info__tools-icon">
                    <FontAwesomeIcon icon={["fab", "js"]} />
                  </div>
                  <div className="info__tooltip">JavaScript</div>
                </div>
                <div className="info__tools-item">
                  <div className="info__tools-icon">
                    <FontAwesomeIcon icon={["fab", "react"]} />
                  </div>
                  <div className="info__tooltip">React</div>
                </div>
                <div className="info__tools-item">
                  <div className="info__tools-icon">
                    <i className="devicon-mongodb-plain"></i>
                  </div>
                  <div className="info__tooltip">mongoDB</div>
                </div>
                <div className="info__tools-item">
                  <div className="info__tools-icon">
                    <FontAwesomeIcon icon={["fab", "node-js"]} />
                  </div>
                  <div className="info__tooltip">Nodejs</div>
                </div>
              </div>

              <div className="info__buttons">
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon="globe" />
                  <span>Live Demo</span>
                </a>
                <a href="https://wwww.github.com/Tfeadzwa" target="_blank">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                  <span>Github</span>
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
