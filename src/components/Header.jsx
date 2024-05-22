import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav.jsx";
import "./header.css";
import profilePic from "../assets/images/profilePic.jpg";

export default function Header() {
  return (
    <div id="header-parent" className="mt-0 pt-2">
      <img id="profilePic" src={profilePic} width="100%" height="auto" />
      <div className="header-center">
        <h1 className="mt-3 mb-3">Phyllis Ann Lataille</h1>
        <h3>Web Developer</h3>
      </div>
      <div id="header-right">
        <Nav />
      </div>
    </div>
  );
}
