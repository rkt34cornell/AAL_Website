import { React, useCallback } from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const astro = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684911642/the-aerospace-adversary/astro_tn3uhk.png";

const oldParticlesInit = async (main) => {
  await loadFull(main);
};

const Error = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>Error 404: Page Lost in Space</h2>
          <div className="min-h-screen">
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
        <Particles
          id="astro"
          init={oldParticlesInit}
          options={{

            particles: {
              shape: {
                type: "image",
                image: {
                  src: astro,
                },
              },
              move: {
                enable: true,
                speed: 0.5,
              },
              size: {
                value: 50,
              },
              number: {
                value: 1,
              },
            },
          }}
        />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Error;
