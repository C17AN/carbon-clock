import React, { useEffect, useRef, useState } from "react";
import "./Clock.scss";

const Clock = () => {
  const [carbonLeft, setCarbonLeft] = useState(500000000000);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setCarbonLeft((prev) => prev - 1101);
    }, 1000);
  }, []);

  useEffect(() => {
    setTime(Math.floor(carbonLeft / 1101));
  }, [carbonLeft]);

  const getYearLeft = () => {
    return Math.floor(time / 31536000);
  };

  const getMonthLeft = () => {
    return Math.floor((time % 31536000) / 2629800);
  };

  const getDayLeft = () => {
    return Math.floor(((time % 31536000) % 2629800) / 86400);
  };

  const getHourLeft = () => {
    return Math.floor((((time % 31536000) % 2629800) % 86400) / 3600);
  };
  const getMinLeft = () => {
    return Math.floor(((((time % 31536000) % 2629800) % 86400) % 3600) / 60);
  };
  const getSecondLeft = () => {
    return Math.floor((((((time % 31536000) % 2629800) % 86400) % 3600) % 60) / 1);
  };

  return (
    <div className="clock__container">
      <div>평균기온 1.5°C 상승까지 남은 시간</div>
      <div className="clock__timer">
        <div>
          {getYearLeft()}년 {getMonthLeft()}개월 {getDayLeft()}일 {getHourLeft()}시간 {getMinLeft()}
          분 {getSecondLeft()}초
        </div>
        {/* <div>{time}</div> */}
        {/* <div>잔여탄소배출총량</div>
        <div>{carbonLeft}</div> */}
      </div>
    </div>
  );
};

export default Clock;
