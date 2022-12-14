import styles from "../style";

const Team = () => (
  <section id="about" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}>
    <div >
      <h2 className={styles.heading2}>Meet our team!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 sm:mt-0`}>
    <button type="button" className= "py-4 px-6 font-poppins font-medium text-[18px] text-black bg-white hover:bg-secondary rounded-[10px] outline-none mt-10">
    Join Us
  </button>
    </div>
  </section>
);

export default Team;