import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import greg from "../assets/Gregory.png";
import arpit from "../assets/Arpit.jpg";
import nathaniel from "../assets/Nathaniel.png";
import nicolo from "../assets/Nicolo.png";
import yanni from "../assets/Yanni.jpg";
import damiano from "../assets/Damiano.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const About = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>About Us</h2>
          <Typography className="text-white text-start m-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>
          <h2 className={styles.heading2}>Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-center items-center">
            {/* <div className="flex flex-col justify-center items-center">
              <img
                src={greg}
                alt="greg"
                className="h-[30%] w-[30%] p-1 mt-10 ml-10 items-center rounded-full"
              />
              
              <Typography className="text-white text-justify m-2">
                Prof. Gregory Falco
              </Typography>
              <Typography className="text-white text-justify m-10">
              Bio: Nicolò Boschetti is pursuing a Ph.D. in Civil and System Engineering at the Johns Hopkins University and is an assistant researcher at the Aerospace ADVERSARY Lab at the JHU’s Whiting School of Engineering. He received his B.A. Degree in International and Diplomatic Sciences from the University of Bologna and his M.A. Degree in Politics and Economics of Eurasia from the Moscow State Institute of International Relations (MGIMO). 
His research focuses on the security of space systems, space cybersecurity, satellite ground networks security, and the Russian space program and policy. 
He is a Space Generation Advisory Council Space and Cybersecurity Project Group member  has published papers in several AIAA, IEEE and IAF conferences and journals.
              </Typography>
            </div> */}
            <div className="flex flex-col justify-center items-center">
              <img
                src={nicolo}
                alt="nicolo"
                className="h-[30%] w-[30%] p-1 mt-10 ml-10 items-center rounded-full"
              />
              <Typography className="text-white font-medium text-lg text-center m-4">
                Nicolo Boschetti (PhD Candidate)
              </Typography>
              <Typography className="text-white text-start m-6">
                Nicolò Boschetti is pursuing a Ph.D. in Civil and System
                Engineering at the Johns Hopkins University and is an assistant
                researcher at the Aerospace ADVERSARY Lab at the JHU’s Whiting
                School of Engineering. He received his B.A. Degree in
                International and Diplomatic Sciences from the University of
                Bologna and his M.A. Degree in Politics and Economics of Eurasia
                from the Moscow State Institute of International Relations
                (MGIMO). His research focuses on the security of space systems,
                space cybersecurity, satellite ground networks security, and the
                Russian space program and policy. He is a Space Generation
                Advisory Council Space and Cybersecurity Project Group member
                has published papers in several AIAA, IEEE and IAF conferences
                and journals.
              </Typography>
              <Typography className="text-white text-left m-6">
                - Linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/nicolò-boschetti-13b73b143/"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  https://www.linkedin.com/in/nicolò-boschetti-13b73b143/
                </a>{" "}
                <br></br>- Researchgate:{" "}
                <a
                  href="https://www.researchgate.net/profile/Nicolo-Boschetti"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  https://www.researchgate.net/profile/Nicolo-Boschetti
                </a>{" "}
                <br></br>- Twitter:{" "}
                <a
                  href="https://twitter.com/iperione_"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  https://twitter.com/iperione_
                </a>{" "}
                <br></br>- Email:{" "}
                <a
                  href="mailto: nbosche1@jhu.edu"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  nbosche1@jhu.edu
                </a>
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={nathaniel}
                alt="nathaniel"
                className="h-[30%] w-[30%] p-1 mt-10 ml-10 items-center rounded-full"
              />
              <Typography className="text-white font-medium text-lg text-center m-4">
                Nathaniel Gordon (PhD Candidate)
              </Typography>
              <Typography className="text-white text-start m-6">
                Nathaniel G. Gordon received his B.S in computer engineering and
                computer science from Northeastern University and M.S. in
                systems engineering from Johns Hopkins University. He is now a
                Ph.D. candidate at Johns Hopkins University under the direction
                of Dr. Gregory Falco. As a member of the Aerospace ADVERSARY
                research group, he investigates resilient space systems with a
                particular interest in zero-trust architectures and multi-agent
                systems.
              </Typography>
              <Typography className="text-white text-left m-6">
                - Linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/nathaniel-gordon/"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  https://www.linkedin.com/in/nathaniel-gordon/
                </a>{" "}
                <br></br>- Researchgate:{" "}
                <a
                  href=": https://www.researchgate.net/profile/Nathaniel-Gordon-2"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  : https://www.researchgate.net/profile/Nathaniel-Gordon-2
                </a>{" "}
                <br></br>- Email:{" "}
                <a
                  href="mailto: ngordon9@jhu.edu"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  ngordon9@jhu.edu
                </a>
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={arpit}
                alt="arpit"
                className="h-[30%] w-[30%] p-1 mt-10 ml-10 items-center rounded-full"
              />
              <Typography className="text-white font-medium text-lg text-center m-4">
                Arpit Kamlesh Kubadia (Graduate Student)
              </Typography>
              <Typography className="text-white text-start m-6">
              Arpit Kubadia is a Graduate student at the Information Security Institute who hails from India and is passionate about space and cybersecurity. At the Aerospace ADVERSARY lab, they are currently working on developing a proof-of-concept ransomware toolkit for satellite systems, specifically those using NASA's coreFlightSystems. Unlike traditional ransomware attacks, a ransomware attack against a space vehicle would need to be carefully crafted to mitigate the risk of destroying the underlying functionality of the spacecraft, while still achieving its purpose - denying access until a ransom is paid. The team is trying to demonstrate how hackers can specifically target modules of a satellite to take down mission critical systems, while not entirely bricking and killing it.
              </Typography>
              <Typography className="text-white text-left m-6">
                - Linkedin:{" "}
                <a
                  href="https://linkedin.com/in/arpitkubadia"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  https://linkedin.com/in/arpitkubadia
                </a>{" "}
                <br></br>- GitHub:{" "}
                <a
                  href="https://github.com/ArpitKubadia"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  https://github.com/ArpitKubadia
                </a>{" "}
                <br></br>- Twitter:{" "}
                <a
                  href="https://twitter.com/aksquaretech"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  https://twitter.com/aksquaretech
                </a>{" "}
                <br></br>- Email:{" "}
                <a
                  href="mailto: akubadi1@jhu.edu"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  akubadi1@jhu.edu
                </a>
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={yanni}
                alt="yanni"
                className="h-[30%] w-[30%] p-1 mt-10 ml-10 items-center rounded-full"
              />
              <Typography className="text-white font-medium text-lg text-center m-4">
                Yanni Nikas (Undergraduate Student)
              </Typography>
              <Typography className="text-white text-start m-6">
              Ioannis “Yanni” Nikas is a junior undergraduate student in the Whiting School of Engineering studying mechanical engineering. His interests include space vehicle and communications technology, and space security policy. Yanni is originally from Chicago, IL.
              </Typography>
              <Typography className="text-white text-left m-6">
                - Email:{" "}
                <a
                  href="mailto: inikas1@jhu.edu"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  inikas1@jhu.edu
                </a>
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={damiano}
                alt="damiano"
                className="h-[30%] w-[30%] p-1 mt-10 ml-10 items-center rounded-full"
              />
              <Typography className="text-white font-medium text-lg text-center m-4">
              Damiano Marsili (Undergraduate Student)
              </Typography>
              <Typography className="text-white text-start m-6">
              Damiano Marsili is an undergraduate student majoring in Computer Science and Mathematics at Johns Hopkins University. He is an assistant researcher at Johns Hopkins' Aerospace ADVERSARY lab, Center for Language and Speech Processing, and Center for Imaging Science. His research interests include autonomous space systems, robot perception, and unsupervised learning for vision.              </Typography>
              <Typography className="text-white text-left m-6">
                - Email:{" "}
                <a
                  href="mailto: : marsilid22@gmail.com"
                  className="cursor-pointer text-secondary"
                  target="_blank"
                >
                  : marsilid22@gmail.com
                </a>
              </Typography>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
