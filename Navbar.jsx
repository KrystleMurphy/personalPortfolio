import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faBootstrap, faHtml5, faCss3, faJs, faNode, faGitAlt, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="Navbar navbar navbar-expand-lg">
      <Link to="/" className="Navbar navbar-brand">
        Krystle Murphy
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="Navbar collapse navbar-collapse" id="navbarNav">
        <div className="icons d-flex justify-content-center align-items-center gap-3">
          <FontAwesomeIcon icon={faReact} size="2x" style={{ opacity: 0.9 }} />
          <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ opacity: 0.9 }} />
          <FontAwesomeIcon icon={faHtml5} size="2x" style={{ opacity: 0.9 }} />
          <FontAwesomeIcon icon={faCss3} size="2x" style={{ opacity: 0.9 }} />
          <FontAwesomeIcon icon={faJs} size="2x" style={{ opacity: 0.9 }} />
          <FontAwesomeIcon icon={faNode} size="2x" style={{ opacity: 0.9 }} />
          <FontAwesomeIcon icon={faGitAlt} size="2x" style={{ opacity: 0.9 }} />
          <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ opacity: 0.9 }} />
        </div>
        <ul className="Navbar navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
