import React, { useState } from "react";
import styles from "../style";
import WorldMap from 'react-world-map'
import "./map-style.css"

const Map = () => {
  const [selected, onSelect] = useState('eu');
  return (
    <div id="map" className={`flex flex-col justify-center items-center`}>
    <h2 className={`${styles.heading2} ${styles.padding}`}>
        Map
      </h2>
      <div>
      <WorldMap selected ={selected} onSelect={ onSelect }/>
      </div>
    </div>
  );
};

export default Map;
