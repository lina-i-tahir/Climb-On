import "./Home.css";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-background">
        <Link to="/climbsmain">
          <h1 className="home">
            Where's your <br></br>climb today?
          </h1>
          <div className="arrowIcon">
            <FontAwesomeIcon icon={faAnglesDown} size="2xl" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
