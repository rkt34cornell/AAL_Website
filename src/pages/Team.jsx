import { React, useState } from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const greg = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Gregory_ghrza5.png";
const arpit = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903711/the-aerospace-adversary/Arpit_vr4xzb.jpg";
const nathaniel = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Nathaniel_mg3xfw.png";
const nicolo = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903715/the-aerospace-adversary/Nicolo_ywx48i.png";
const yanni = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903708/the-aerospace-adversary/Yanni_qmngau.jpg";
const damiano = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Damiano_jwu5uy.png";
const devang = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903716/the-aerospace-adversary/Devang_zscwuy.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faResearchgate,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const setIndex = (i) => {
    setSelectedIndex(i == selectedIndex ? -1 : i);
  };
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>Team</h2>

          <div
            className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}
          >
            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img src={greg} alt="greg" className="h-[100%] w-[100%]" />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Gregory Falco
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-5"
                  >
                    PI
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://www.linkedin.com/in/gregoryfalco/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="ResearchGate">
                      <Typography
                        as="a"
                        href="https://www.researchgate.net/profile/Gregory-Falco"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faResearchgate} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Twitter">
                      <Typography
                        as="a"
                        href="https://twitter.com/gregfalco"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: falco@jhu.edu"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Typography>
                    </Tooltip>
                  </Typography>
                </div>
                <div>
                  <Typography
                    onClick={() => {
                      setIndex(0);
                    }}
                    className="cursor-pointer"
                  >
                    {selectedIndex == 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Typography>
                </div>
              </CardBody>
              <div className={selectedIndex == 0 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Gregory Falco is an assistant professor in the Department of
                    Civil and Systems Engineering and the Institute for Assured
                    Autonomy, where he holds an appointment at the Applied
                    Physics Laboratory in the Asymmetric Operations Sector. He
                    is also a member of the Center for Systems Science and
                    Engineering.
                  </Typography>
                </CardFooter>
              </div>
            </Card>
          </div>
          <div className="grid gap-16 grid-cols-1 sm:grid-cols-3 sm:px-16 px-6 sm:py-16 py-6 justify-center items-start justify-items-center">
            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img src={nicolo} alt="nicolo" className="h-[100%] w-[100%]" />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Nicolo Boschetti
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    PhD Candidate
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://www.linkedin.com/in/nicolò-boschetti-13b73b143/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="ResearchGate">
                      <Typography
                        as="a"
                        href="https://www.researchgate.net/profile/Nicolo-Boschetti"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faResearchgate} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Twitter">
                      <Typography
                        as="a"
                        href="https://twitter.com/iperione_"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: nbosche1@jhu.edu"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Typography>
                    </Tooltip>
                  </Typography>
                </div>
                <div>
                  <Typography
                    onClick={() => {
                      setIndex(1);
                    }}
                    className="cursor-pointer"
                  >
                    {selectedIndex == 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Typography>
                </div>
              </CardBody>
              <div className={selectedIndex == 1 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Nicolò Boschetti is pursuing a Ph.D. in Civil and System
                    Engineering at the Johns Hopkins University and is an
                    assistant researcher at the Aerospace ADVERSARY Lab at the
                    JHU’s Whiting School of Engineering. He received his B.A.
                    Degree in International and Diplomatic Sciences from the
                    University of Bologna and his M.A. Degree in Politics and
                    Economics of Eurasia from the Moscow State Institute of
                    International Relations (MGIMO). His research focuses on the
                    security of space systems, space cybersecurity, satellite
                    ground networks security, and the Russian space program and
                    policy. He is a Space Generation Advisory Council Space and
                    Cybersecurity Project Group member has published papers in
                    several AIAA, IEEE and IAF conferences and journals.
                  </Typography>
                </CardFooter>
              </div>
            </Card>
            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={nathaniel}
                  alt="nathaniel"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Nathaniel Gordon
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    PhD Candidate
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://www.linkedin.com/in/nathaniel-gordon/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="ResearchGate">
                      <Typography
                        as="a"
                        href="https://www.researchgate.net/profile/Nathaniel-Gordon-2"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faResearchgate} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: ngordon9@jhu.edu"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Typography>
                    </Tooltip>
                  </Typography>
                </div>
                <div>
                  <Typography
                    onClick={() => {
                      setIndex(2);
                    }}
                    className="cursor-pointer"
                  >
                    {selectedIndex == 2 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Typography>
                </div>
              </CardBody>
              <div className={selectedIndex == 2 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Nathaniel G. Gordon received his B.S in computer engineering
                    and computer science from Northeastern University and M.S.
                    in systems engineering from Johns Hopkins University. He is
                    now a Ph.D. candidate at Johns Hopkins University under the
                    direction of Dr. Gregory Falco. As a member of the Aerospace
                    ADVERSARY research group, he investigates resilient space
                    systems with a particular interest in zero-trust
                    architectures and multi-agent systems.
                  </Typography>
                </CardFooter>
              </div>
            </Card>
            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img className="h-[100%] w-[100%]" src={arpit} alt="arpit" />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Arpit Kubadia
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    Graduate Student
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://linkedin.com/in/arpitkubadia"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="GitHub">
                      <Typography
                        as="a"
                        href="https://github.com/ArpitKubadia"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Twitter">
                      <Typography
                        as="a"
                        href="https://twitter.com/aksquaretech"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: akubadi1@jhu.edu"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Typography>
                    </Tooltip>
                  </Typography>
                </div>
                <div>
                  <Typography
                    onClick={() => {
                      setIndex(3);
                    }}
                    className="cursor-pointer"
                  >
                    {selectedIndex == 3 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Typography>
                </div>
              </CardBody>
              <div className={selectedIndex == 3 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Arpit Kubadia is a Graduate student at the Information
                    Security Institute who hails from India and is passionate
                    about space and cybersecurity. At the Aerospace ADVERSARY
                    lab, they are currently working on developing a
                    proof-of-concept ransomware toolkit for satellite systems,
                    specifically those using NASA's coreFlightSystems. Unlike
                    traditional ransomware attacks, a ransomware attack against
                    a space vehicle would need to be carefully crafted to
                    mitigate the risk of destroying the underlying functionality
                    of the spacecraft, while still achieving its purpose -
                    denying access until a ransom is paid. The team is trying to
                    demonstrate how hackers can specifically target modules of a
                    satellite to take down mission critical systems, while not
                    entirely bricking and killing it.
                  </Typography>
                </CardFooter>
              </div>
            </Card>
            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img className="h-[100%] w-[100%]" src={devang} alt="devang" />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Devang Jain
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    Graduate Student
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://www.linkedin.com/in/djrobin17/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="GitHub">
                      <Typography
                        as="a"
                        href="https://github.com/djrobin17"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Twitter">
                      <Typography
                        as="a"
                        href="https://twitter.com/dj_robin17"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: djain7@jh.edu"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Typography>
                    </Tooltip>
                  </Typography>
                </div>
                <div>
                  <Typography
                    onClick={() => {
                      setIndex(4);
                    }}
                    className="cursor-pointer"
                  >
                    {selectedIndex == 4 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Typography>
                </div>
              </CardBody>
              <div className={selectedIndex == 4 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Devang Jain is a Graduate student pursuing Master of Science
                    in Security Informatics at the Information Security
                    Institute. At the Aerospace ADVERSARY lab, he is currently
                    working on developing a new website and easy-to-use tools
                    like Space Stations Map and Security Risk Taxonomy to help
                    users understand the research work efficiently. Devang has a
                    Bachelor of Science degree in Computer Science and is
                    passionalte about Cybersecurity.
                  </Typography>
                </CardFooter>
              </div>
            </Card>
            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={damiano}
                  alt="damiano"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Damiano Marsili
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    Undergraduate Student
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: : marsilid22@gmail.com"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Typography>
                    </Tooltip>
                  </Typography>
                </div>
                <div>
                  <Typography
                    onClick={() => {
                      setIndex(5);
                    }}
                    className="cursor-pointer"
                  >
                    {selectedIndex == 5 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Typography>
                </div>
              </CardBody>
              <div className={selectedIndex == 5 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Damiano Marsili is an undergraduate student majoring in
                    Computer Science and Mathematics at Johns Hopkins
                    University. He is an assistant researcher at Johns Hopkins'
                    Aerospace ADVERSARY lab, Center for Language and Speech
                    Processing, and Center for Imaging Science. His research
                    interests include autonomous space systems, robot
                    perception, and unsupervised learning for vision.
                  </Typography>
                </CardFooter>
              </div>
            </Card>
            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img className="h-[100%] w-[100%]" src={yanni} alt="yanni" />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Yanni Nikas
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    Undergraduate Student
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: inikas1@jhu.edu"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Typography>
                    </Tooltip>
                  </Typography>
                </div>
                <div>
                  <Typography
                    onClick={() => {
                      setIndex(6);
                    }}
                    className="cursor-pointer"
                  >
                    {selectedIndex == 6 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Typography>
                </div>
              </CardBody>
              <div className={selectedIndex == 6 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Ioannis “Yanni” Nikas is a junior undergraduate student in
                    the Whiting School of Engineering studying mechanical
                    engineering. His interests include space vehicle and
                    communications technology, and space security policy. Yanni
                    is originally from Chicago, IL.
                  </Typography>
                </CardFooter>
              </div>
            </Card>
            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Team;
