import React from "react";
import styles from "../style";
import WorldMap from 'react-world-map'
import "./map-style.css"

const Map = () => {
  return (
    <div id="map" className={`${styles.marginY} flex flex-col justify-center items-center`}>
    <h2 className={styles.heading2}>
        Map
      </h2>
      <div className="">
      <WorldMap />
      </div>
    </div>
  );
};

export default Map;
