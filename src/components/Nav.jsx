import { Link, useLocation } from "react-router-dom";
import "./nav.css";
export default function Nav() {
  const currentPage = useLocation().pathname;
  return (
    <div id="navbuttons" className="justify-content-center">
      <ul className="navbuttons mb-2">
        <Link to="/">
          <li
            className={currentPage === "/" ? "navbutton-active" : "navbutton"}
          >
            About Me
          </li>
        </Link>
        <Link to="/portfolio">
          <li
            className={
              currentPage === "/portfolio" ? "navbutton-active" : "navbutton"
            }
          >
            Portfolio
          </li>
        </Link>
        <Link to="/resume">
          <li
            className={
              currentPage === "/resume" ? "navbutton-active" : "navbutton"
            }
          >
            Resume
          </li>
        </Link>
        <Link to="/contact">
          <li
            className={
              currentPage === "/contact" ? "navbutton-active" : "navbutton"
            }
          >
            Contact Me
          </li>
        </Link>
      </ul>
    </div>
  );
}
