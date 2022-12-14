import { impact } from "../constants";
import styles from "../style";

const Impact = () => (
  <div id="impact">
    <div
      className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 mb-10`}
    >
      <h2 className={styles.heading2}>Impact</h2>
    </div>
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {impact.map((impact) => (
        <div
          key={impact.id}
          className={`flex-1 flex justify-center items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {impact.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-white uppercase ml-3">
            {impact.title}
          </p>
        </div>
      ))}
    </section>
  </div>
);

export default Impact;
