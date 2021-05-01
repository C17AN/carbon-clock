import React from "react";
import "./Clock.scss";

const Clock = () => {
  return (
    <div className="clock__container">
      <div>평균기온 1.5°C 상승까지 남은 시간</div>
      <div className="clock__timer">
        <div>24시간 30분 12초</div>
      </div>
    </div>
  );
};

export default Clock;
