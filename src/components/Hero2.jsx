import { useCallback } from "react";
import styles from "../style";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import sat1 from "../assets/sat1.svg";
import sat2 from "../assets/sat2.svg";
import sat3 from "../assets/sat3.svg";

const Hero2 = () => {
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
              speed: 0.08,
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
        id="Team"
        className={`flex md:flex-col flex-col ${styles.paddingY} ${styles.marginY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}
        >
          {/* Content can be added here */}
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 z-0`}>
          {/* Remove the image of the earth */}
        </div>

        <Particles
          id="satellite1"
          init={oldParticlesInit}
          options={{
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "attract",
                },
                onHover: {
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
                  replace_color: "#ffffff",
                },
              },
              move: {
                enable: true,
                speed: 0.5,
              },
              size: {
                value: 10,
              },
              number: {
                value: 1,
              },
              color: {
                value: "#ffffff", // Satellite color (white)
              },
              line_linked: {
                color: "#00ff00", // Line color (green)
              },
            },
          }}
        />

        <Particles
          id="satellite2"
          init={oldParticlesInit}
          options={{
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "attract",
                },
                onHover: {
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
                value: 10,
              },
              number: {
                value: 1,
              },
              color: {
                value: "#ffffff", // Satellite color (white)
              },
              line_linked: {
                color: "#00ff00", // Line color (green)
              },
            },
          }}
        />

        <Particles
          id="satellite3"
          init={oldParticlesInit}
          options={{
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "attract",
                },
                onHover: {
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
                value: 10,
              },
              number: {
                value: 1,
              },
              color: {
                value: "#ff0000", // Satellite color (red)
              },
              line_linked: {
                color: "#00ff00", // Line color (green)
              },
            },
          }}
        />
      </section>
    </div>
  );
};

export default Hero2;
