import React, { useState, useEffect } from "react";
import Globe from "react-globe.gl";
import Clock from "../Clock/Clock";
import Message from "../Message/Message";
import nanumgothic from "../../fonts/NanumBarunGothic_Light.json";

const GlobeComponent = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/data.geojson", {
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
        labelColor={() => "rgba(255, 0, 0, 0.75)"}
        labelTypeFace={nanumgothic}
        labelResolution={2}
        onLabelClick={(d) => {
          alert(d.properties.name);
        }}
      />
    </>
  );
};

export default GlobeComponent;
