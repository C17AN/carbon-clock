import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./ModalComponent.scss";

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

const ModalComponent = ({ name, description, modalIsOpen, setIsOpen }) => {
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
        <form></form>
      </Modal>
    </div>
  );
};

export default ModalComponent;
