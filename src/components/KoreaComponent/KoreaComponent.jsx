import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KoreaMap from "../KoreaMap/KoreaMap";
import ModalComponent from "../ModalComponent/ModalComponent";
import "./KoreaComponent.scss";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(#f0c4c0, #fff, #dce3e6, #c1dce8, #97d0e8);
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
  width: 700px;
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
  const [provinceInfo, setProvinceInfo] = useState(false);
  return (
    <Container>
      <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <MapWrapper>
        <KoreaMap setProvince={setProvince} setIsOpen={setIsOpen} />
      </MapWrapper>
      <Description>
        <p>2020 한반도 온실가스 인벤토리 현황</p>
        <h6>
          <a
            href="https://www.gihoo.or.kr/portal/kr/community/data_view.do"
            style={{ color: "#333" }}
          >
            출처 : 환경부 온실가스종합정보센터
          </a>
        </h6>
      </Description>
    </Container>
  );
};

export default KoreaComponent;
