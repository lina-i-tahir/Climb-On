import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// import images from "../../images";
import "./Carousel.css";
import image1 from "../../assets/1_pexels-rodrigo-946337.jpg";
import image2 from "../../assets/2_pexels-daniel-torobekov-13079721.jpg";
import image3 from "../../assets/3_pexels-matias-henriquez-8607120.jpg";
import image4 from "../../assets/4_pexels-ronny-siegel-10581456.jpg";
import image5 from "../../assets/6_pexels-katya-wolf-8729239.jpg";
import image6 from "../../assets/5_pexels-nicolas-diaz-14241729.jpg";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <motion.div className="item">
            <div className="img">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
            </div>
          </motion.div>
          {/* ); */}
          {/* })} */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
