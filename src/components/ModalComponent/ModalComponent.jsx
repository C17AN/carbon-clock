import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import styled from "styled-components";
import "./ModalComponent.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    overflow: "hidden",
    width: "500px",
    height: "350px",
    borderRadius: "12px",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(72, 72, 72, 0.8)",
  },
};

const Table = styled.table`
  width: 100%;
  overflow: hidden;
  border: 1px solid #cdcdcd;
  border-radius: 12px;
  padding: 10px;
  border-collapse: separate;
  border-spacing: 0 10px;
  margin-top: 10px;
  th {
    padding-bottom: 5px;
    border-bottom: 2px solid #17477a;
  }
  th:first-child {
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

const Line = styled.hr`
  margin: 1rem 0;
`;

const ModalComponent = ({
  name,
  description,
  emission2019,
  emission2018,
  emission2017,
  modalIsOpen,
  setIsOpen,
}) => {
  var subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#333";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // overlayClassName="overlay"
      >
        <h2 className="country__name" ref={(_subtitle) => (subtitle = _subtitle)}>
          {name}
        </h2>
        <div className="country__description">{description}</div>
        <Line />
        <div className="country__test">🏭 CO2 배출 현황</div>
        <Table>
          <th>국가</th>
          <th>2017</th>
          <th>2018</th>
          <th>2019</th>
          <th>단위</th>
          <tr>
            <td>{name}</td>
            <td>{emission2017 / 100}</td>
            <td>{emission2018 / 100}</td>
            <td>{emission2019 / 100}</td>
            <td>{"억 톤"}</td>
          </tr>
        </Table>
      </Modal>
    </div>
  );
};

export default ModalComponent;
