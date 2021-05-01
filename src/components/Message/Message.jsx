import React from "react";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message__container">
      <span className="message--first">지금 이 순간에도</span>
      <br />
      <span className="message--second">초당 약 1,101톤의 온실가스가 방출되고 있습니다.</span>
      <br />
      <br />
      <span className="message--third">여러분의 지구는, 과연 안녕하신가요?</span>
    </div>
  );
};

export default Message;
