import React from "react";
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animations";
import smoke from "../img/smoke.jpg";
import danger from "../img/danger.png";

const About = () => {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" className="about__container">
      <h2>탄소배출과 온실가스란?</h2>
      <div className="about__content__container">
        <figure>
          <img src={danger} className="about__danger"></img>
          <figcaption>출처 : 환경부 홍보영상 - '2050 탄소중립의 모든 것' 중</figcaption>
        </figure>
        <div className="about__content">
          <p>"온실 효과" 라는 말을 들어보신 적 있으신가요?</p>
          <p>
            공장과 발전소, 자동차들이 내뿜는 매연에 포함된 이산화탄소가 지구의 온도를 높여 가고
            있습니다.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
