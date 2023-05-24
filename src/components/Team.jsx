import styles from "../style";

const Team = () => (
  <section
    id="team"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}
  >
    <div>
      <h2 className={styles.heading2}>Meet our team!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        WE BREAK AEROSPACE SYSTEMS <br />
        If you don’t know how to break it, you don’t know how to fix it.
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
