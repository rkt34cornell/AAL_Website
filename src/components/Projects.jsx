import { projects } from "../constants";
import styles, { layout } from "../style";

const ProjectCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row py-5 rounded-[20px] ${
      index !== projects.length - 1 ? "mb-6" : "mb-0"
    } project-card`}
  >
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

const Projects = () => (
  <section id="projects" className={`${layout.section} items-start justify-start`} >
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>Projects</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        WE BREAK AEROSPACE SYSTEMS <br></br>
        If you don’t know how to break it, you don’t know how to fix it: this is
        the core of our many projects! <br></br>
        We design and develop the future of aerospace technology enabling
        secure, resilient, and assured autonomous space infrastructure
        operations.
      </p>
      <a href="/projects">
        <button
          type="button"
          className="py-4 px-6 font-poppins font-medium text-[18px] text-black bg-white hover:bg-secondary rounded-[10px] outline-none mt-10 mb-10 md:mb-0"
        >
          Know More
        </button>
      </a>
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Publications
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The lab's groundbreaking research has yielded multiple impactful publications, revolutionizing the scientific community and shaping future discoveries.
      </p>
      <a href="/publications">
      <button type="button" className= "py-4 px-6 font-poppins font-medium text-[18px] text-black bg-white hover:bg-secondary rounded-[10px] outline-none mt-10">
    Know More
  </button>
  </a>
    </div>
    {/* <div
      className={`${layout.sectionImg} flex-col md:scrollbar-thin md:scrollbar-thumb-secondary md:scrollbar-track-white md:h-96 md:overflow-y-scroll`}
    >
      {projects.map((projects, index) => (
        <ProjectCard key={projects.id} {...projects} index={index} />
      ))}
    </div> */}
  </section>
);

export default Projects;
