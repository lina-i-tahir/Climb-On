import "./Home.css";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import About from "./About";
import ClimbsMain from "./ClimbsMain";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <div className="home-div">
        <Link to="/climbsmain">
          <h1 className="home">
            What's your <br></br>project today?
          </h1>
        </Link>
        <Carousel />
        <div className="arrow-icon">
          <motion.div
            className="arrow-ani"
            animate={{ y: 10, opacity: 100 }}
            initial={{ y: -50, opacity: 100 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 60,
            }}
          >
            <FontAwesomeIcon icon={faAnglesDown} size="xl" color="white" />
          </motion.div>
        </div>
      </div>
      <About />
      <ClimbsMain />
    </>
  );
};

export default Home;
