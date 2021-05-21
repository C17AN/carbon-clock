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
    height: "300px",
    borderRadius: "12px",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(72, 72, 72, 0.8)",
  },
};

const Table = styled.table`
  width: 100%;
  td {
    text-align: center;
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
        <h2 className="country__name">{province}</h2>
        <article className="country__description">
          <Table>
            <th></th>
            <th>2016</th>
            <th>2017</th>
            <th>2018</th>
            <tr>
              <td>총 배출량</td>
              <td>{totalPopulate2016?.toLocaleString()}</td>
              <td>{totalPopulate2017?.toLocaleString()}</td>
              <td>{totalPopulate2018?.toLocaleString()}</td>
            </tr>
            <tr>
              <td>에너지부문 배출량</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>산업부문 배출량</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>농업부문 배출량</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>폐기물부문 배출량</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
          </Table>
        </article>
        <div style={{ fontSize: "0.8rem", textAlign: "right", marginTop: "5px" }}>
          (단위: Gg CO2eq)
        </div>
      </Modal>
    </div>
  );
};

export default ProvinceModal;
