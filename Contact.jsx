import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="container align-items-center justify-content-center text-center">
        <div className="row">
          <h1 className="pt-3">Get in Touch</h1>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-2 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <a
                  href="https://www.linkedin.com/in/krystle-murphy/"
                  target="_blank"
                  className="btn rounded"
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
            <div className="card">
              <div className="card-body">
                <a
                  href="https://github.com/KrystleMurphy"
                  target="_blank"
                  className="btn rounded"
                >
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

      <div className="p-3">
        <h2 className="">Or send me an email...</h2>
        <div className="col-12 border rounded p-3">
          <form
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/f/mvoeqbbg"
            method="post"
          >
            <fieldset id="fs-frm-inputs">
              <div className="form-group m-3">
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  className="form-control"
                  placeholder="First and Last"
                  required
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="email-address">Email Address</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  className="form-control"
                  placeholder="email@domain.tld"
                  required
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Your message here"
                  required
                ></textarea>
              </div>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission"
              />
            </fieldset>
            <div className="d-flex justify-content-end mt-3">
              <input type="submit" className="btn rounded" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
