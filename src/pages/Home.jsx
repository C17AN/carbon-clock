import React, { useState } from "react";
import GlobeComponent from "../components/GlobeComponent/GlobeComponent";
import Header from "../components/Header/Header";
import Switch from "react-switch";
import KoreaComponent from "../components/KoreaComponent/KoreaComponent";
import korea from "../img/korea.png";

const Home = () => {
  const [isGlobal, setIsGlobal] = useState(true);
  return (
    <div className="home">
      <Header />
      <Switch
        className="toggle-switch"
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={"#69a8c7"}
        offColor={"#65c7a3"}
        onChange={() => {
          setIsGlobal(!isGlobal);
        }}
        checked={isGlobal}
      />
      {isGlobal ? <GlobeComponent /> : <KoreaComponent />}
    </div>
  );
};

export default Home;
