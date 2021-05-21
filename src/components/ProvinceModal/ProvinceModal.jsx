import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useState } from "react";
import data from "../../provinceData";
import "./ProvinceModal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "500px",
    height: "350px",
    borderRadius: "12px",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(72, 72, 72, 0.8)",
  },
};

const Table = styled.table`
  width: 100%;
  overflow: hidden;
  border-collapse: separate;
  border-spacing: 0 10px;
  th {
    border-bottom: 2px solid #17477a;
  }
  th:first-child {
    border: none;
  }
  tr {
    padding: 10px 0;
  }
  td {
    text-align: center;
  }
  td:first-child {
    font-weight: bold;
  }
`;

const ProvinceModal = ({ provinceData, modalIsOpen, setIsOpen, setProvince }) => {
  const dataObject = provinceData[0] ?? {};
  const {
    province,
    grade,
    totalPopulate2018,
    totalPopulate2017,
    totalPopulate2016,
    energyUsed2016,
    energyUsed2017,
    energyUsed2018,
    industryUsed2016,
    industryUsed2017,
    industryUsed2018,
    agricultureUsed2016,
    agricultureUsed2017,
    agricultureUsed2018,
    wasteUsed2016,
    wasteUsed2017,
    wasteUsed2018,
    description,
  } = dataObject;

  function closeModal() {
    setIsOpen(false);
    setProvince(null);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="country__name">
          {province}
          {"  "}
          <span style={{ fontSize: "0.88rem", color: "#999" }}>전국 탄소배출량 {grade}등</span>
        </h2>
        <article className="country__description">
          <Table>
            <th></th>
            <th>2016년</th>
            <th>2017년</th>
            <th>2018년</th>
            <tr>
              <td>총 배출량</td>
              <td>{totalPopulate2016?.toLocaleString()}</td>
              <td>{totalPopulate2017?.toLocaleString()}</td>
              <td>{totalPopulate2018?.toLocaleString()}</td>
            </tr>
            <tr>
              <td>에너지부문 배출량</td>
              <td>{energyUsed2016?.toLocaleString()}</td>
              <td>{energyUsed2017?.toLocaleString()}</td>
              <td>{energyUsed2018?.toLocaleString()}</td>
            </tr>
            <tr>
              <td>산업부문 배출량</td>
              <td>{industryUsed2016?.toLocaleString()}</td>
              <td>{industryUsed2017?.toLocaleString()}</td>
              <td>{industryUsed2018?.toLocaleString()}</td>
            </tr>
            <tr>
              <td>농업부문 배출량</td>
              <td>{agricultureUsed2016?.toLocaleString()}</td>
              <td>{agricultureUsed2017?.toLocaleString()}</td>
              <td>{agricultureUsed2018?.toLocaleString()}</td>
            </tr>
            <tr>
              <td>폐기물부문 배출량</td>
              <td>{wasteUsed2016?.toLocaleString()}</td>
              <td>{wasteUsed2017?.toLocaleString()}</td>
              <td>{wasteUsed2018?.toLocaleString()}</td>
            </tr>
          </Table>
        </article>
        <div style={{ fontSize: "0.8rem", textAlign: "right", marginTop: "5px" }}>
          (※ 단위: Gg CO2eq)
        </div>
      </Modal>
    </div>
  );
};

export default ProvinceModal;
