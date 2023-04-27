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
          <MapComponent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Map;
