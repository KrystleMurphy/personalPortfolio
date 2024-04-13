import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactForm from "./ContactForm";
import ByMeACoffee from "./ByMeACoffee";
import "./index.css";
import "./Navbar.css";
import DownloadCV from "./DownloadCV";

export default function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="pt-3">Get in Touch</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col text-center p-3">
          <DownloadCV />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 col-md-2 mb-3">
          <div className="card border-0 card-body">
            <a
              href="https://www.linkedin.com/in/krystle-murphy/"
              target="_blank"
              className="rounded text-black p-3 d-block text-decoration-none"
            >
              <h5 className="card-title">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </h5>
              Visit Profile
            </a>
          </div>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <div className="card border-0 card-body">
            <a
              href="https://github.com/KrystleMurphy"
              target="_blank"
              className="rounded text-black p-3 d-block text-decoration-none"
            >
              <h5 className="card-title">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </h5>
              Take a look
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <ByMeACoffee />
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="p-3 rounded" style={{ border: "1px solid var(--custom-blue)" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
