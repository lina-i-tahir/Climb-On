import "./Home.css";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import About from "./About";
import ClimbsMain from "./ClimbsMain";

const Home = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div ref={ref} className="home-background">
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
              What's your <br></br>project today?
            </motion.div>
          </h1>
          {/* <div className="arrow-icon">
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
          </div> */}
        </Link>
      </div>
      <About />
      <ClimbsMain />
    </>
  );
};

export default Home;
