import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex-column d-flex align-items-center py-3">
        <a
          className="footerNav"
          target="_blank"
          href="https://github.com/lavendarqueen"
        >
          GitHub Profile
        </a>
        <a
          className="footerNav"
          target="_blank"
          href="www.linkedin.com/in/phyllis-lataille-92598b26b"
        >
          LinkedIn Profile
        </a>
        <a
          className="footerNav"
          target="_blank"
          href="https://stackoverflow.com/users/23350600/phyllis-ann"
        >
          Stack Overflow Profile
        </a>
      </div>
    </footer>
  );
}
