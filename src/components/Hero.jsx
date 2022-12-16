import styles from "../style";
import earth from "../assets/earth.png";
import sat1 from "../assets/sat1.svg";
import sat2 from "../assets/sat2.svg";
import sat3 from "../assets/sat3.svg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (main) => {
  await loadFull(main);
};

const Hero = () => {
  return (
    <div>
      <Particles
        id="particles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            shape: {
              type: "star",
            },
            move: {
              enable: true,
              speed: 0.2,
            },
            size: {
              value: 1,
            },
            opacity: {
              random: true,
            },
          },
        }}
      />
      <section
        id="home"
        className={`flex md:flex-col flex-col ${styles.paddingY} ${styles.marginY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-col justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-thin ss:text-[72px] text-[52px] text-white text-center ss:leading-[100.8px] leading-[75px]">
              The Aerospace <span className="text-secondary">Adversary</span>{" "}
              Lab
              <br className="sm:block hidden" />{" "}
            </h1>

            <p className={`${styles.paragraph} max-w-[800px] mt-5 text-center`}>
              We design and develop the future of aerospace technology enabling
              secure, resilient and assured autonomous space infrastructure
              operations.
            </p>
          </div>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
          <img
            src={earth}
            alt="earth"
            className="w-[60%] h-[60%] z-10 relative"
          />
        </div>
        <Particles
        id="satellite1"
        init={particlesInit}
        options={{
          interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "attract"
      },
      onHover:{
        enable: true,
        mode: "grab",
      },
    },
          },
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            shape: {
              type: "image",
              image: {
              src: sat1,
            },
            },
            move: {
              enable: true,
              speed: 0.5,
            },
            size: {
              value: 20,
            },
            number:{
              value: 1,
            },

          },
        }}
      />
       <Particles
        id="satellite2"
        init={particlesInit}
        options={{
          interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "attract"
      },
      onHover:{
        enable: true,
        mode: "grab",
      },
    },
          },
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            shape: {
              type: "image",
              image: {
              src: sat2,
              replace_color: "#ffffff",
            },
            },
            move: {
              enable: true,
              speed: 0.6,
            },
            size: {
              value: 20,
            },
            number:{
              value: 1,
            },

          },
        }}
      />
       <Particles
        id="satellite3"
        init={particlesInit}
        options={{
          interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "attract"
      },
      onHover:{
        enable: true,
        mode: "grab",
      },
    },
          },
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            shape: {
              type: "image",
              image: {
              src: sat3,
            },
            },
            move: {
              enable: true,
              speed: 0.3,
            },
            size: {
              value: 22,
            },
            number:{
              value: 1,
            },
          },
        }}
      />
  
      </section>
    </div>
  );
};

export default Hero;
