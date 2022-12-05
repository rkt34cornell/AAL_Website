import styles from "../style";
import earth from "../assets/earth.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-col flex-col ${styles.paddingY} ${styles.marginY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-col justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-thin ss:text-[72px] text-[52px] text-white text-center ss:leading-[100.8px] leading-[75px]">
            The Aerospace Adversary
            <br className="sm:block hidden" />{" "}
          </h1>

        <p className={`${styles.paragraph} max-w-[800px] mt-5 text-center`}>
          Our team designs and develops the future of aerospace technology
          enabling secure, resilient and assured autonomous space infrastructure
          operations.
        </p>
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}
      >
        <img
          src={earth}
          alt="earth"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default Hero;
