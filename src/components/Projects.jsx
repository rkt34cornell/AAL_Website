import { projects } from "../constants";
import styles, { layout } from "../style";

const ProjectCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row py-5 rounded-[20px] ${
      index !== projects.length - 1 ? "mb-6" : "mb-0"
    } project-card`}
  >
    <div className="flex-1 flex flex-col">
      <h4 className="font-poppins font-semibold text-white text-[18px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px]">
        {content}
      </p>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className={`${layout.section} items-start justify-start`}>
    <div
      className={`${layout.sectionImg} flex-col md:scrollbar-thin md:scrollbar-thumb-secondary md:scrollbar-track-white md:h-96 md:overflow-y-scroll`}
    >
      {projects.map((projects, index) => (
        <ProjectCard key={projects.id} {...projects} index={index} />
      ))}
    </div>
  </section>
);

export default Projects;
