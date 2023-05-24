import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Projects = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>Publications</h2>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="mt-5 text-center py-4 px-6 font-poppins font-medium text-[18px] text-black bg-secondary hover:bg-secondary hover:text-white rounded-[10px] outline-none"
            >
              <a
                target="_blank"
                href="https://www.researchgate.net/lab/The-Aerospace-ADVERSARY-Gregory-Falco"
              >
                ResearchGate: The Aerospace ADVERSARY{" "}
              </a>
            </button>
          </div>
          <div
            className={`${styles.flexCenter} mt-10 flex flex-col md:flex-col`}
          >
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    Boschetti, Nicolò, et al. "A Hybrid Space Architecture for
                    Robust and Resilient Satellite Services." 2023 IEEE
                    International Conference on Space Mission Challenges for
                    Information Technology (SMC-IT). IEEE Communications
                    Society, 2023.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    Falco, Gregory, and Nathaniel G. Gordon. "Cybersecurity and
                    Human Spaceflight Safety."
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    Boschetti, Nicolò, et al. "Ground Station as a Service
                    Reference Architectures and Cyber Security Attack Tree
                    Analysis." 2023 IEEE Aerospace Conference (AERO 2023).
                    Institute of Electrical and Electronics Engineers (IEEE),
                    2023.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    Boschetti, Nicolò, et al. "Commercial Space Risk Framework
                    Assessing the Satellite Ground Station Security Landscape
                    for NATO in the Arctic and High North." MILCOM 2022-2022
                    IEEE Military Communications Conference (MILCOM). IEEE,
                    2022.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    Byerly, Adam, Nathaniel G. Gordon, and Gregory Falco.
                    "Spacecraft Diagnostic Generation from Remote Sensing for
                    OSAM Missions." ASCEND 2022. 2022. 4330.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    Boschetti, Nicolò, Nathaniel G. Gordon, and Gregory Falco.
                    "Space Cybersecurity Lessons Learned from The ViaSat
                    Cyberattack." ASCEND 2022. 2022. 4380.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    Falco, Gregory, et al. "An International Technical Standard
                    for Commercial Space System Cybersecurity-A Call to Action."
                    ASCEND 2022. 2022. 4302.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    G. Falco, N. G. Gordon, A. Byerly, A. Grotto, J. Siegel and
                    S. Zanlongo, "The Space Digital Dome: Autonomous Defense of
                    Space Vehicles from Radio Frequency Interference," 2022 IEEE
                    Aerospace Conference (AERO), Big Sky, MT, USA, 2022, pp.
                    1-8,
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    S. Lefcourt, N. Gordon, H. Wong and G. Falco, "Space
                    Cognitive Communications: Characterizing Radiofrequency
                    Interference to Improve Digital Space Domain Awareness,"
                    2022 International Conference on Localization and GNSS
                    (ICL-GNSS), Tampere, Finland, 2022
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    N. G. Gordon and G. Falco, "Reference architectures for
                    autonomous on-orbit servicing, assembly and manufacturing
                    (OSAM) mission resilience," 2022 IEEE International
                    Conference on Assured Autonomy (ICAA), Fajardo, PR, USA,
                    2022, pp. 124-128
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    S. Lefcourt, N. Gordon, H. Wong and G. Falco, "Robustness
                    Assurance Quotient: Demonstrating Context Matters for AI
                    Performance and ML Security," 2022 IEEE International
                    Conference on Assured Autonomy (ICAA), Fajardo, PR, USA,
                    2022, pp. 21-27
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="m-2 w-full">
              <Card>
                <CardBody className="text-start">
                  <Typography variant="h6" className="mb-2">
                    G. Falco, A. Viswanathan and A. Santangelo, "CubeSat
                    Security Attack Tree Analysis," 2021 IEEE 8th International
                    Conference on Space Mission Challenges for Information
                    Technology (SMC-IT), Pasadena, CA, USA, 2021, pp. 68-76,
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
