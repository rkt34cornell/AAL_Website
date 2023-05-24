import { React } from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const GroundStationProject = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>Peer-to-Peer Ground Stations</h2>
          <p className={`${styles.paragraph} mt-5 mb-5 text-justify`}>
            <b>Researcher:</b> Damiano Marsili
            <br></br> <br></br>
            <b>Description:</b> The Aerospace Adversary's Ground Station
            project, funded by Space@Hopkins, seeks to build an easy-to-use,
            highly modular, and secure ground station for educational
            institutions and hobbyist users. The project is divided into three
            submodules: Hardware, Automation, and Security.
            <br></br> <br></br>
            <b>Hardware:</b> To facilitate a cheap and highly modular design,
            all of the necessary hardware is 3D printed. Our team underwent an
            extensive prior art discovery and design phase to develop robust and
            effective 3D printed designs at a fraction of the cost of equivalent
            commercial solutions. All of our designs, as well as assembly and
            wiring instructions can be found{" "}
            <a
              className="text-secondary"
              target="_blank"
              href="https://github.com/AerospaceAdversary/GroundStation/tree/main/Hardware"
            >
              here
            </a>
            .<br></br> <br></br>
            <b>Automation:</b> Our design features full-fledged automation of
            ground station services typical of commercial solutions. The
            automation module, built on top of GPredict, allows for autonomous
            satellite tracking, trajectory prediction and autonomous down-link
            of data. All of the source code for the automation module can be
            found{" "}
            <a
              className="text-secondary"
              target="_blank"
              href="https://github.com/AerospaceAdversary/GroundStation/tree/main/Automation"
            >
              here
            </a>
            .<br></br> <br></br>
            <b>Security:</b> To deploy the ground station on educational
            networks, a strong level of security is necessary. As a result, our
            team developed a Machine Learning based intrusion-detection system
            fine-tuned on intrusion data collected by our in-house ground
            station honeypot. Upon detection of malicious connections,
            connections are interrupted and a flag is thrown. All of the source
            code and models for the security module can be found{" "}
            <a
              className="text-secondary"
              target="_blank"
              href="https://github.com/AerospaceAdversary/GroundStation/tree/main/IDS"
            >
              here
            </a>
            .
          </p>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default GroundStationProject;
