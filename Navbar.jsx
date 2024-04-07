import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faBootstrap, faHtml5, faCss3, faJs, faNode, faGitAlt, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="Navbar w-100">
      <Link to="/" className="name">
        Krystle Murphy
      </Link>
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
      <ul>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;