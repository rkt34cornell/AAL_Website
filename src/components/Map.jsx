import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import './map-style.css'
import styles from "../style";

const Map = () => {
  return (
    <div id="map" className={`${styles.marginY}`}>
    <h2 className={styles.heading2}>
        Map
      </h2>
    <div className="w-[85%] sm:ml-10">
      <ComposableMap> 
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
    </div>
  );
};

export default Map;
