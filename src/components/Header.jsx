import Nav from "./Nav.jsx";
import "./header.css";
import profilePic from "../assets/images/profilePic.jpg";
export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center d-flex">
        <div className="col-12 col-sm-12 col-md-3">
          <div className="img mt-2">
            <img src={profilePic} width="300px" height="300px" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 ">
          <h1 className="mt-3 mb-3">Phyllis Ann Lataille</h1>
          <h3>Web Developer</h3>
        </div>
        <div className="col-12 col-sm-12 col-md-3 mt-2 header-right">
          <Nav />
        </div>
      </div>
    </div>
  );
}
