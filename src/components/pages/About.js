import "./About.css";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  return (
    <>
      <div className="about">
        <h1 className="about-h1">Oh hey there!</h1>
        <motion.div
          ref={ref}
          className="about-h1-ani"
          animate={{ y: -20, opacity: 100 }}
          initial={{
            y: -50,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <p>
            We're a bunch of climbing enthusiasts on a mission to share the
            thrill of outdoor rock climbing with you. Whether you're a seasoned
            pro or a total newbie, we've got you covered.
          </p>
          <p>
            Get ready to explore our interactive map of epic climbing locations
            worldwide. From breathtaking mountains to scenic canyons, we've
            handpicked the best spots just for you.
          </p>
          <p>
            Reach out to us anytime. Let's climb, connect, and make
            unforgettable memories together. Climb on!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
