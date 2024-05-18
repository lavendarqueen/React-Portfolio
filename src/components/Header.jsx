import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./header.css";
import profilePic from "../assets/images/profilePic.jpg";

export default function Header() {
  const currentPage = useLocation().pathname;
  return (
    <div id="header" className="gt-0 pt-2">
      <img id="profilePic" src={profilePic} width="250px" height="250px" />
      <div className="header-left">
        <h1 className="mt-3 mb-3">Portfolio of Phyllis Ann Lataille</h1>
        <div id="navbuttons" className="justify-content-center">
          <ul className="navbuttons mb-2">
            <Link to="/">
              <li
                className={
                  currentPage === "/" ? "navbutton-active" : "navbutton"
                }
              >
                About Me
              </li>
            </Link>
            <Link to="/portfolio">
              <li
                className={
                  currentPage === "/portfolio"
                    ? "navbutton-active"
                    : "navbutton"
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
      </div>
    </div>
  );
}
