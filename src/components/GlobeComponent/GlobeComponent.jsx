import React, { useState, useEffect } from "react";
import Globe from "react-globe.gl";
import Clock from "../Clock/Clock";
import Message from "../Message/Message";
import nanumgothic from "../../fonts/NanumBarunGothic_Regular.json";
import ModalComponent from "../ModalComponent/ModalComponent";

const GlobeComponent = () => {
  const [places, setPlaces] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [countryName, setCountryName] = useState(null);
  const [countryDescription, setCountryDescription] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ features }) => {
          setPlaces(features);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Message />
      <ModalComponent
        name={countryName}
        description={countryDescription}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <Clock />
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={places}
        labelLat={(d) => d.properties.latitude}
        labelLng={(d) => d.properties.longitude}
        labelText={(d) => d.properties.name}
        labelSize={(d) => Math.sqrt(d.properties.pop_max) * 0.03}
        labelDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 0.065}
        labelColor={() => "rgba(255, 50, 50, 0.6)"}
        labelTypeFace={nanumgothic}
        labelResolution={2}
        onLabelClick={(d) => {
          setCountryName(d.properties.name);
          setCountryDescription(d.properties.description);
          setIsOpen(() => true);
        }}
      />
    </>
  );
};

export default GlobeComponent;
