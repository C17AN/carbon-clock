import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KoreaMap from "../KoreaMap/KoreaMap";
import "./KoreaComponent.scss";
import ProvinceModal from "../ProvinceModal/ProvinceModal";
import data from "../../provinceData";
import Clock from "../Clock/Clock";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(#f0c4c0, #fff, #dce3e6, #c1dce8, #97d0e8);
  &:after {
    background-color: red;
    background: url("https://images.unsplash.com/photo-1552783160-27bfdb2625d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1860&q=80");
    width: 100vw;
    height: 100vh;
    top: 0;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: calc(50vh - 100px);
  right: 20%;
  width: 800px;
  height: 200px;
  background-color: #ffffff50;
  border-radius: 12px;
  border: 3px solid #cdcdcd;
  font-size: 1.4rem;
  p {
    margin-top: 50px;
    margin-bottom: 0;
    padding-bottom: 15px;
    border-bottom: 2px solid #302a85;
    vertical-align: middle;
    align-self: center;
  }
`;

const KoreaComponent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [province, setProvince] = useState(false);
  const [provinceData, setProvinceData] = useState(null);

  useEffect(() => {
    setProvinceData(data.filter((el) => el.province === province));
  }, [province]);

  return (
    <Container>
      {provinceData && (
        <ProvinceModal
          provinceData={provinceData}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          setProvince={setProvince}
        />
      )}
      <MapWrapper>
        <KoreaMap setProvince={setProvince} setIsOpen={setIsOpen} />
      </MapWrapper>
      <Description>
        <p>
          2021 한반도 온실가스 인벤토리 현황{" "}
          <span style={{ fontSize: "0.88rem" }}>(2016 ~ 2018)</span>
        </p>
        <h6>
          <a
            href="https://www.gihoo.or.kr/portal/kr/community/data_view.do"
            style={{ color: "#333" }}
          >
            출처 : 환경부 온실가스종합정보센터
          </a>
        </h6>
      </Description>
      <Clock />
    </Container>
  );
};

export default KoreaComponent;
