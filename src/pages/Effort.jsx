import React from "react";
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animations";

const Effort = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="about__container"
    >
      <h2>지속가능한 성장</h2>
      <div>"온실 효과" 라는 말에 대해 들어보신적 있으신가요?</div>
    </motion.div>
  );
};

export default Effort;
