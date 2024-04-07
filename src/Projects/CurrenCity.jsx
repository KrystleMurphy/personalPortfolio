import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CurrenCityImg from "/images/CurrenCity.png";

export default function CurrenCity() {
  return (
    <div className="col-12">
      <div className="card border-0" style={{ width: "100%", height: "100%" }}>
        <div className="row">
          <div className="col">
            <img
              src={CurrenCityImg}
              className="card-img-top rounded"
              alt="screen shot of app"
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "10%",
                overflow: "hidden",
                position: "relative",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ height: "150px" }}>
            <div className="card-body p-0" style={{ height: "100%" }}>
              <p className="card-text d-flex justify-content-center mb-0 p-0">
                <FontAwesomeIcon icon={faHtml5} className="fs-2 mx-2 my-2" />
                <FontAwesomeIcon icon={faCss3} className="fs-2 mx-2 my-2" />
                <FontAwesomeIcon icon={faJs} className="fs-2 mx-2 my-2" />
                <FontAwesomeIcon icon={faGithub} className="fs-2 mx-2 my-2" />
              </p>
              <h5 className="text-center">
                A travel app, displaying a range of information from a searched city name
              </h5>
              <a
                href="https://caseygirlyn.github.io/CurrenCity/"
                target="_blank"
                className="btn btn-primary col-12"
                style={{
                  backgroundColor: "var(--custom-pink)",
                  borderColor: "var(--custom-pink)",
                }}
              >
                CurrenCity
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}
