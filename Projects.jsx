
import Cards from "./Cards";
import MainCards from "./MainCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", padding: "1%" }}>
          <FontAwesomeIcon icon={faUsers} /> Collaborative Projects
        </h1>
        <div style={{ textAlign: "center", padding: "1%" }}>
          <p>
            Active Collaborator <FontAwesomeIcon icon={faStar} /> Strategic Task
            Assignment <FontAwesomeIcon icon={faStar} /> Productivity
            Optimization <FontAwesomeIcon icon={faStar} /> Excellent
            Communicator <FontAwesomeIcon icon={faStar} /> Reciprocal Working{" "}
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p>
            Enhanced technical proficiency, teamwork, problem-solving{" "}
            <FontAwesomeIcon icon={faStar} /> Committed to excellence and proven
            adaptability in collaborative environments
          </p>
        </div>

        <div className="row">
          <div className="col-md-12">
            {" "}
            <MainCards />
          </div>
        </div>
        <div>
          <h1
            style={{ textAlign: "center", marginTop: ".1rem", padding: "2%" }}
          >
            <FontAwesomeIcon icon={faUser} /> Solo Projects
          </h1>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </>
  );
}
