import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./sidebar.scss";
import styled from "styled-components";

const DivSidebar = styled.div`
  left: ${(props) => props.$left};
`;

const Sidebar = ({ onClose, left }) => {
  return (
    <DivSidebar className="sidebar" $left={left + "px"}>
      <div className="sidebar__wrap">
        <aside className="sidebar__aside">
          <section className="sidebar__search">
            <form className="sidebar__search-form sidebar__block onSubmit">
              <div className="sidebar__search-input-wrapper pos-relative">
                <input
                  type="search"
                  className="sidebar__search-input"
                  placeholder="Search..."
                />
                <button className="sidebar__search-button">
                  <FontAwesomeIcon
                    icon="search"
                    className="sidebar__search-icon"
                  />
                </button>
              </div>
            </form>
          </section>

          <section className="sidebar__block sidebar__block1">
            <div className="sidebar__block-container">
              <div className="sidebar__block-inner-container">
                <h2 className="sidebar__block-heading">Recent Posts</h2>
                <ul>
                  <li>
                    <a href="#">Brand Identity with Code</a>
                  </li>
                  <li>
                    <a href="#">Data Center Infrastructure</a>
                  </li>
                  <li>
                    <a href="#">Music Player Design</a>
                  </li>
                  <li>
                    <a href="#">Data Analytics Dashboard</a>
                  </li>
                  <li>
                    <a href="#">Creativity Is More Than..</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="sidebar__block sidebar__block2">
            <div className="sidebar__block-container">
              <div className="sidebar__block-inner-container">
                <h2 className="sidebar__block-heading">Recent Posts</h2>
                <ul>
                  <li>
                    <a href="#">Brand Identity with Code</a>
                  </li>
                  <li>
                    <a href="#">Data Center Infrastructure</a>
                  </li>
                  <li>
                    <a href="#">Music Player Design</a>
                  </li>
                  <li>
                    <a href="#">Data Analytics Dashboard</a>
                  </li>
                  <li>
                    <a href="#">Creativity Is More Than..</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="sidebar__block sidebar__block4">
            <div className="sidebar__block-container">
              <div className="sidebar__block-inner-container">
                <h2 className="sidebar__block-heading">Recent Posts</h2>
                <ul>
                  <li>
                    <a href="#">Brand Identity with Code</a>
                  </li>
                  <li>
                    <a href="#">Data Center Infrastructure</a>
                  </li>
                  <li>
                    <a href="#">Music Player Design</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </aside>
      </div>
      <span className="sidebar__close" onClick={onClose}>
        {/* <FontAwesomeIcon icon="close" className="sidebar__icon" /> */}
      </span>
    </DivSidebar>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
  left: PropTypes.number.isRequired,
};

export default Sidebar;
