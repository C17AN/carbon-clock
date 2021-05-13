import React, { useState } from "react";
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animations";
import smoke from "../img/smoke.jpg";
import danger from "../img/danger.png";
import recycle from "../img/recycle.svg";
import bus from "../img/bus.svg";
import coffee from "../img/coffee.svg";
import environment from "../img/environment.svg";
import phone from "../img/phone.svg";

const About = () => {
  const [solution, setSolution] = useState(null);

  const renderDescription = () => {
    switch (solution) {
      case "recycle":
        return "재활용은 탄소배출을 줄일 수 있는 가장 쉬운 방법으로,";
      case "bus":
        return "버스는";
      case "cup":
        return "컵은";
      case "environment":
        return "숲은";
      case "digital":
        return '[디지털 기기 사용 줄이기] - 여러분이 접하는 모든 데이터는 "데이터 센터" 에 저장되는데요, 유튜브 시청 10분에 1g, 이메일 한 통에 4g, 데이터 1MB 사용에 11g에 달하는 탄소를 배출하는 것과 같다고 합니다.';
      default:
        break;
    }
  };

  return (
    <motion.div variants={fade} initial="hidden" animate="show" className="about__container">
      <h2>탄소배출이란? & 일상 속 탄소배출</h2>
      <div className="about__content__container">
        <figure>
          <img src={danger} className="about__danger"></img>
          <figcaption>출처 : 환경부 홍보영상 - '2050 탄소중립의 모든 것' 중</figcaption>
        </figure>
        <div className="about__content">
          <p>"온실 효과" 라는 말을 들어보신 적 있으신가요?</p>
          <p>
            공장과 발전소, 자동차들이 내뿜는 매연에 포함된 이산화탄소가 지구를 거대한 온실로 만들고
            있습니다.
          </p>
          <p>
            이산화탄소 농도가 증가하면 지구가 점점 더워지면서 수많은 동식물들의 생태계가 변화해
            본격적인 사막화가 시작되는데요,
          </p>
          <p>공장과 매연뿐만 아니라, 여러분의 일상 속에서도 온난화를 막을 방법이 존재합니다.</p>
          <h2 style={{ marginTop: "2rem" }}>생활 속 탄소배출량 경감 방법</h2>
          <div className="about__solution">
            <img
              src={recycle}
              className="solution__item"
              onMouseOver={() => setSolution("recycle")}
              onMouseLeave={() => setSolution(null)}
            />
            <img
              src={bus}
              className="solution__item"
              onMouseOver={() => setSolution("bus")}
              onMouseLeave={() => setSolution(null)}
            />
            <img
              src={coffee}
              className="solution__item"
              onMouseOver={() => setSolution("cup")}
              onMouseLeave={() => setSolution(null)}
            />
            <img
              src={environment}
              className="solution__item"
              onMouseOver={() => setSolution("environment")}
              onMouseLeave={() => setSolution(null)}
            />
            <img
              src={phone}
              className="solution__item"
              onMouseOver={() => setSolution("digital")}
              onMouseLeave={() => setSolution(null)}
            />
            <div
              style={{ marginTop: 30, lineHeight: 1.7, position: "absolute" }}
              className="about__description"
            >
              {renderDescription()}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
