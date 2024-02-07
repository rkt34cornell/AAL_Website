import React from 'react';
import { Navbar, Footer, ProjectsPanel } from "../components";
import projectsData from '../constants/projectsData.json';
import styles from '../style';

const Present2024 = () => {
  const present2024Projects = projectsData.filter(project => project.period === '2024-present');

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2} text-center`}> {/* Ensure the heading is centered */}
            Research
          </h2>
          <p className={`${styles.paragraph} mt-5 mb-5 text-center italic`}> {/* Add text-center and italic for Tailwind CSS */}
            Driving the next generation of national security space capabilities.
          </p>
          <ProjectsPanel projects={present2024Projects} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Present2024;
