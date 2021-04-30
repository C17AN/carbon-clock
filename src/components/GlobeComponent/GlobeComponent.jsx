import React, { useState, useEffect } from "react";
import Globe from "react-globe.gl";
import Clock from "../Clock/Clock";

const GlobeComponent = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/ne_110m_populated_places_simple.geojson", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ features }) => {
          console.log(features);
          setPlaces(features);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Clock />
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={places}
        labelLat={(d) => d.properties.latitude}
        labelLng={(d) => d.properties.longitude}
        labelText={(d) => d.properties.name}
        labelSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelColor={() => "rgba(255, 165, 0, 0.75)"}
        labelResolution={2}
        onHexPolygonClick={() => {
          console.log("hello");
        }}
      />
    </>
  );
};

export default GlobeComponent;
