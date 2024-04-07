import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./Navbar.css";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

function CustomLink({ to, children, onClick, background }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="Navbar w-100">
      <Link to="/Home" className="name">
        Krystle Murphy
      </Link>
      <div className="icons d-flex justify-content-center align-items-center gap-3">
        {" "}
        <FontAwesomeIcon icon={faReact} size="2x" style={{ opacity: 0.9 }}/>
        <FontAwesomeIcon icon={faBootstrap} size="2x" style={{ opacity: 0.9 }}/>
        <FontAwesomeIcon icon={faHtml5} size="2x" style={{ opacity: 0.9 }}/>
        <FontAwesomeIcon icon={faCss3} size="2x" style={{ opacity: 0.9 }}/>
        <FontAwesomeIcon icon={faJs} size="2x" style={{ opacity: 0.9 }}/>
        <FontAwesomeIcon icon={faNode} size="2x" style={{ opacity: 0.9 }}/>
        <FontAwesomeIcon icon={faGitAlt} size="2x" style={{ opacity: 0.9 }}/>
        <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" style={{ opacity: 0.9 }}/>
      </div>
      <ul>
        <CustomLink
          className="nav-link"
          to="/Home"
          onClick={() => handleCustomLinkClick("home")}
        >
          Home
        </CustomLink>
        <CustomLink
          className="nav-link"
          to="/projects"
          onClick={() => handleCustomLinkClick("projects")}
        >
          Projects
        </CustomLink>
        <CustomLink
          className="nav-link"
          to="/contact"
          onClick={() => handleCustomLinkClick("contact")}
        >
          Contact
        </CustomLink>
      </ul>
    </nav>
  );
}

export default Navbar;
