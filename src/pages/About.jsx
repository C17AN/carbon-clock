import React from "react";
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animations";

const About = () => {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" className="about__container">
      <h2>탄소배출과 온실가스란?</h2>
      <div>"온실 효과" 라는 말에 대해 들어보신적 있으신가요?</div>
    </motion.div>
  );
};

export default About;
