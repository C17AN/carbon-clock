import React from "react";
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animations";
import polar from "../video/polar.mp4";

const Danger = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Danger__container"
    >
      <video className="video-bear" controls={false} autoPlay muted loop>
        <source src={polar} type="video/mp4"></source>
      </video>
      <div className="content-container">
        <h2>위기에 빠진 지구</h2>
        <div>"온실 효과" 라는 말에 대해 들어보신적 있으신가요?</div>
      </div>
    </motion.div>
  );
};

export default Danger;
