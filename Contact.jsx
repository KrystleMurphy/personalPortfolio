import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactForm from "./ContactForm";
import "./index.css";
import "./Navbar.css";
import ByMeACoffee from "./ByMeACoffee";
// import ByMeACoffee from "./ByMeACoffee";
export default function Contact() {
  return (
    <>
      <div className="container align-items-center justify-content-center text-center">
        <div className="row">
          <h1 className="pt-3">Get in Touch</h1>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-2 mb-3 mb-sm-0">
            <div className="card border-0">
              <div className="card-body">
                <a
                  href="https://www.linkedin.com/in/krystle-murphy/"
                  target="_blank"
                  className="btn rounded"
                  style={{
                    backgroundColor: "var(--custom-blue)",
                  }}
                >
                  <h5 className="card-title">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                  </h5>
                  Visit Profile
                </a>
              </div>
            </div>
          </div>


          <div className="col-2">
            <div className="card border-0">
              <div className="card-body">
                <a
                  href="https://github.com/KrystleMurphy"
                  target="_blank"
                  className="btn rounded"
                  style={{ backgroundColor: "var(--custom-blue)" }}>
                  <h5 className="card-title">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                  </h5>
                  Take a look
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
<ByMeACoffee />
</div>
      <div className="p-3 d-flex justify-content-center align-items-center">
        <div className="row col-6 rounded p-3" style={{border: "1px solid var(--custom-blue)"}}>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

