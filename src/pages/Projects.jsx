import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Projects = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.padding} flex-col text-center`}>
            <h1 className={`${styles.heading2} mb-5`}>Projects</h1>
            <p className={`${styles.paragraph} mb-5`}>
              Check back soon for updates on our exciting projects!
            </p>
            <p className={`${styles.paragraph}`}>
              For more information, please contact:{" "}
              <a
                href="mailto:gfalco@cornell.edu"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                gfalco@cornell.edu
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
