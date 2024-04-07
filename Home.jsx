import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import "./index.css";
import "./Navbar.css";
export default function Home() {
  return (

<div className="container">
  <div className="row mt-5">
    <div className="col">
      <h1>Welcome to the portfolio pages of Krystle Murphy</h1>
      <h3 className="lead">
        Software Engineer | Front-End Development Specialist
      </h3>
      <br />
      <h4>Skills and Attributes</h4>
      <ul>
    <li>Proficient in JavaScript, with a focus on deepening understanding and application</li>
    <li>Experienced in integrating libraries such as Bootstrap, Tailwind, jQuery, and DayJS to enhance web development projects</li>
    <li>Skilled in seamless integration of third-party APIs for enhanced functionality</li>
    <li>Familiar with NodeJS and NPM for efficient package management</li>
    <li>Strong understanding and practical experience with Git for version control</li>
    <li>Demonstrated ability in relentless problem-solving, with a resilient and adaptable approach</li>
    <li>Excellent communication and collaboration skills, contributing effectively in team environments</li>
    <li>Proven track record in troubleshooting and debugging to ensure smooth project execution</li>
    <li>Committed to continual meaningful upskilling and learning new technologies</li>
</ul>

      <br />
      <h6>Take a look around... this app was crafted with React + Vite.</h6>
    </div>
  </div>
</div>
  );
}
