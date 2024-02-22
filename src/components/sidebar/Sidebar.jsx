import "./sidebar.scss";
import { Link } from "react-router-dom";
import mypicture from "/images/tafadzwa.jpg";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__intro">
          <div className="sidebar__full-name">Tafadzwa Tanyanyiwa</div>

          <img
            className="sidebar__image"
            src={mypicture}
            alt="Tafadzwa's image"
          />

          <div className="sidebar__description">
            Hi, my name is Tafadzwa, and I&apos;m a full-stack web developer.
            Welcome to my personal website!
          </div>
          <div className="sidebar__socials"></div>
        </div>

        <hr />
        <div className="sidebar__sections">
          <Link to="/hero">About Me</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="contacts">Contact</Link>
          <Link to="coding">Coding Challenges</Link>
        </div>
        <hr />

        <Link to="">Hire Me</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
