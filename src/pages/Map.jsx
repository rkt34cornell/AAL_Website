import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import MapComponent from "../components/MapComponent";

const Map = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2}`}>Map</h2>
          <div className="flex justify-between">
          <p className={`${styles.paragraph} m-5 text-center`}>
            Zoom Controls
          </p>
          <p className={`${styles.paragraph} m-5 text-center`}>
            Layer Controls
          </p>
          </div>
          <MapComponent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Map;
