import React from 'react';
import { Navbar, Footer, ProjectsPanel } from "../components"; // Make sure to import ProjectsPanel
import projectsData from '../constants/projectsData.json'; // Import your projects data
import styles from '../style';

const Present2024 = () => {
  // You might want to filter projectsData to only include projects relevant to 2024 - Present
  const present2024Projects = projectsData.filter(project => project.period === '2024-present');

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
          {/* Integrate ProjectsPanel to display projects for 2024 - Present */}
          <ProjectsPanel projects={present2024Projects} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Present2024;
