import React from 'react';
import { Navbar, Footer } from "../components";
import styles from '../style';

const LegacyProjects = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2}`}>
            Legacy Projects
          </h2>
          <p className={`${styles.paragraph} mt-5 mb-5 text-justify`}>
            Content for Legacy Projects goes here. Describe the projects, goals, achievements, and any other relevant information.
          </p>
          {/* Content and structure specific to Legacy Projects can be added here */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LegacyProjects;
