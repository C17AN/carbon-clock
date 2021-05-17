import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KoreaMap from "../KoreaMap/KoreaMap";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const KoreaComponent = () => {
  return (
    <Container>
      <KoreaMap />
    </Container>
  );
};

export default KoreaComponent;
