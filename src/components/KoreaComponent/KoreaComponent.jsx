import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KoreaMap from "../KoreaMap/KoreaMap";
import "./KoreaComponent.scss";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(#fff, #dce3e6, #c1dce8, #97d0e8);
  &:after {
    content: "";
    position: absolute;
    opacity: 0.05;
    border-radius: 12px;
    height: calc(100vh - 120px);
    top: 100px;
    left: 20px;
    width: calc(100vw - 60px);
    padding-right: 20px;
    background-color: red;
    pointer-events: none;
  }
`;

const KoreaComponent = () => {
  return (
    <Container>
      <KoreaMap />
    </Container>
  );
};

export default KoreaComponent;
