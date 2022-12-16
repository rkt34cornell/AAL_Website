import { publications } from "../constants";
import styles, { layout } from "../style";

const PublicationCard = ({ title, content, index }) => (
  <div className={`flex flex-row py-5 rounded-[20px] ${index !== publications.length - 1 ? "mr-6" : "mr-0"} publications-card`}>
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

const Publications = () =>  (
  <section id="publications" className={layout.sectionReverse}>
  
  <div className={`${layout.sectionImgReverse} flex-row`}>
      {publications.map((publications, index) => (
        <PublicationCard key={publications.id} {...publications} index={index} />
      ))}
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Publications
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button type="button" className= "py-4 px-6 font-poppins font-medium text-[18px] text-black bg-white hover:bg-secondary  rounded-[10px] outline-none mt-10">
    Know More
  </button>
    </div>
  </section>
);

export default Publications;