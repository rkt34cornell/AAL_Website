import { projects } from "../constants";
import styles, { layout } from "../style";

const ProjectCard = ({ title, content, index }) => (
  <div className={`flex flex-row py-5 rounded-[20px] ${index !== projects.length - 1 ? "mb-6" : "mb-0"} project-card`}>
    {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div> */}
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

const Projects = () =>  (
  <section id="projects" className={layout.section}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Projects
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a href="/projects">
      <button type="button" className= "py-4 px-6 font-poppins font-medium text-[18px] text-black bg-white hover:bg-secondary rounded-[10px] outline-none mt-10">
    Know More
  </button>
  </a>
    </div>
    
    <div className={`${layout.sectionImg} flex-col scrollbar-thin scrollbar-thumb-secondary scrollbar-track-white h-96 overflow-y-scroll`}>
    <div className="hidden md:block">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      {projects.map((projects, index) => (
        <ProjectCard key={projects.id} {...projects} index={index} />
      ))}
      <br></br>
    </div>
  </section>
);

export default Projects;