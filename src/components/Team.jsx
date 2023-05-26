import styles from "../style";

const Team = () => (
  <section
    id="team"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}
  >
    <div>
      <h2 className={styles.heading2}>Meet our team!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We warmly welcome inquiries from prospective student members (undergrad to doctoral) and all those interested in our lab's work. Please feel free to contact us, as we are excited to hear from you and exploring potential collaborations.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 sm:mt-0`}>
      <a href="/team">
        <button
          type="button"
          className="py-4 px-6 font-poppins font-medium text-[18px] text-black bg-white hover:bg-secondary rounded-[10px] outline-none mt-10"
        >
          Join Us
        </button>
      </a>
    </div>
  </section>
);

export default Team;
