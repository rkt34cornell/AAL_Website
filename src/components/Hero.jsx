import { useCallback } from "react";
import styles from "../style";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import adversaryLogo from "../assets/adversary-logo-white.png";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  
  return (
    <div>
       <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        enable: true,
                        speed: 0.08
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 100,
                    },
                    opacity: {
                        random: true,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 1.5 },
                    },
                },
            }}
        />

      <section
        id="home"
        className={`flex md:flex-col flex-col ${styles.paddingY} ${styles.marginY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}
        >
          <div className="flex flex-col items-center w-full gap-8 sm:gap-10">
            <div className="relative flex items-center justify-center -mt-8 fade-in">
              <span
                aria-hidden="true"
                className="absolute -inset-6 rounded-full bg-red-500/55 blur-[42px]"
              />
              <img
                src={adversaryLogo}
                alt="Aerospace Adversary Lab"
                className="relative z-10 w-[320px] sm:w-[460px] md:w-[620px] h-auto drop-shadow-[0_0_22px_rgba(255,0,0,0.55)] drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]"
              />
            </div>
            <p className={`${styles.paragraph} max-w-[800px] text-center fade-in`}>
              The Aerospace Adversary Laboratory at Cornell University designs and develops the next-generation of space defense technology. The lab is particularly interested in developing national security offensive and defensive technical capabilities for space systems and understanding their ethical and policy implications.
            </p>
            <div className="w-full max-w-[900px] mt-6 sm:mt-10">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/qnk-Nk6qk0s?start=810"
                  title="Aerospace Adversary Lab video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 z-0`} />

      </section>
    </div>
  );
};

export default Hero;
