import "./Home.css";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home-background">
        <Link to="/climbsmain">
          <h1 className="home">
            <motion.div
              className="home-ani"
              animate={{ y: 10, opacity: 100 }}
              initial={{
                y: -50,
                opacity: 100,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              Where's your <br></br>climb today?
            </motion.div>
          </h1>
          <div className="arrowIcon">
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
              <FontAwesomeIcon icon={faAnglesDown} size="2xl" />
            </motion.div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
