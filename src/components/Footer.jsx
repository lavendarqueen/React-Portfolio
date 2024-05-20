import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex-row d-flex align-items-center py-3">
        <a
          className="footerNav"
          target="_blank"
          href="https://github.com/lavendarqueen"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className="footerNav"
          target="_blank"
          href="https://linkedin.com/in/phyllis-ann-lataille-92598b26b"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          className="footerNav"
          target="_blank"
          href="https://stackoverflow.com/users/23350600/phyllis-ann"
        >
          <i className="fa-brands fa-stack-overflow"></i>
        </a>
      </div>
    </footer>
  );
}
