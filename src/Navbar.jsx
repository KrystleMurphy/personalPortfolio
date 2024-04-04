import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import "./Navbar.css";
import "./index.css";

function CustomLink({ to, children, onClick, background }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li style={{ backgroundColor: background }} className={isActive ? "active" : ""}>
      <Link to={to} onClick={onClick}>{children}</Link>
    </li>
  );
}

function Navbar() {
  const [ulBackgrounds, setUlBackgrounds] = useState({
    home: 'grey',
    projects: 'grey',
    contact: 'grey'
  });

  const handleCustomLinkClick = (link) => {
    // Reset all background colors
    const updatedBackgrounds = {
      home: 'grey',
      projects: 'grey',
      contact: 'grey'
    };

    // Set the background color of the clicked link to 'lightblue'
    updatedBackgrounds[link] = 'var(--custom-yellow)';

    setUlBackgrounds(updatedBackgrounds);
  };

  return (
    <nav className="Navbar vh-20 display-6">
      <Link to="/Home" className="name display-5">Krystle Murphy</Link>
      <ul>
        <CustomLink to="/Home" onClick={() => handleCustomLinkClick('home')} background={ulBackgrounds.home}>Home</CustomLink>
        <CustomLink to="/projects" onClick={() => handleCustomLinkClick('projects')} background={ulBackgrounds.projects}>Projects</CustomLink>
        <CustomLink to="/contact" onClick={() => handleCustomLinkClick('contact')} background={ulBackgrounds.contact}>Contact</CustomLink>
      </ul>
    </nav>
  );
}

export default Navbar;