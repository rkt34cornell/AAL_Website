import React from 'react';
import { Navbar, Footer } from "../components";
import styles from '../style';

const Present2024 = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2}`}>
            2024 - Present Projects
          </h2>
          <p className={`${styles.paragraph} mt-5 mb-5 text-justify`}>
            Content for 2024 - Present Projects goes here. Highlight ongoing projects, future plans, and visions for this period.
          </p>
          {/* Content and structure specific to 2024 - Present Projects can be added here */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Present2024;
