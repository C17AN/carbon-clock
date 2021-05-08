import React from "react";
import { motion } from "framer-motion";
import { fade, pageAnimation } from "../animations";
import polar from "../video/polar.mp4";
import CustomChart from "../components/CustomChart/CustomChart";

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
        <div>세계 각국의 노력으로 탄소 배출량은 조금씩 감소하고 있지만,</div>
        <div>아직도 가야할 길이 남아 있습니다.</div>
        <br />
        <h3 style={{ fontWeight: 300 }}>탄소중립과 온난화, 이제 우리에게 달려 있습니다.</h3>
        <CustomChart />
      </div>
    </motion.div>
  );
};

export default Danger;
