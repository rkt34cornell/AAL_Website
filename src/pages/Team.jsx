import React, { useState, useEffect } from "react"; // Import useEffect here
import styles from "../style";
import { Navbar, Footer, Bingo } from "../components";

const greg = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Gregory_ghrza5.png";
const nathaniel = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Nathaniel_mg3xfw.png";
const nicolo = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1706424728/Boschetti_pic263_div8rv.png"
const cameron = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1697328844/100cam_q3bfyt.png"
const rajiv = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1697330716/rkt34_lhzlwf.png"
const matteo = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1704835581/ntnu_shoot_square_pngybh.jpg"
const aalaudio = "https://res.cloudinary.com/dlxh3nrry/video/upload/v1706240962/AALMUSIC_fiyfdy.mp3"

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
           
          <div className={`bg-primary ${styles.flexStart}`}>
             <div className={`${styles.boxWidth}`}>
               <Bingo />
      </div>

    </div>
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
                        href="mailto: gfalco@cornell.edu"
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
Dr. Gregory Falco is an Assistant Professor at the Sibley School of Mechanical and Aerospace Engineering and the Systems Engineering Program at Cornell University. He received his PhD from MIT, where NASA’s Jet Propulsion Laboratory funded his doctoral research in Cybersecurity at MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL). Prior to joining Cornell University, he was an Assistant Professor at Johns Hopkins University’s Institute for Assured Autonomy and completed postdoctoral research at Stanford University’s Freeman Spogli Institute and MIT CSAIL. He is the director of the Aerospace ADVERSARY Laboratory, which designs and develops next-generation autonomous, secure and resilient space infrastructure. As a hacker, he exploits physics and modern computing systems to achieve missions previously thought to be infeasible. His space technology research is policy-relevant and advances standards and national security conversations relating to space supremacy and cybersecurity.  Falco is the founding chair of IEEE's Standard for Space System Cybersecurity and the NATO Country Project Director for the NATO Science for Peace and Security effort to reroute the internet to space.

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
                   Nicolò Boschetti
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
                  Nicolò Boschetti is pursuing a Ph.D. in Aerospace Engineering at Cornell University and is an assistant researcher at the Aerospace ADVERSARY Lab. He is the Secretary of the IEEE Standard Association's Space Systems Cybersecurity International Working Group. He received his B.A. in International and Diplomatic Sciences from the University of Bologna and his M.A. in Politics and Economics of Eurasia from the Moscow State Institute of International Relations (MGIMO). His research focuses on the security of space systems, space cybersecurity, satellite ground network security, and the Russian space program and policy. He has published papers in several AIAA, IEEE, and IAF conferences and journals. 
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
                    now a Ph.D. candidate at Cornell University under the
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
                <img
                  className="h-[100%] w-[100%]"
                  src={cameron}
                  alt="cameron"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Cameron Mehlman
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    PhD Candidate
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://www.linkedin.com/in/cameron-mehlman/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="ResearchGate">
                      <Typography
                        as="a"
                        href="https://www.researchgate.net/scientific-contributions/Cameron-Mehlman-2245968516"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faResearchgate} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: cpm222@cornell.edu"
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
                  Cameron Mehlman is a PhD candidate at Cornell University specializing in dynamic controls and autonomy. His project experience includes designing autonomous path planning algorithms, working with complex ML and RL models for dynamic control, and designing novel physical systems for human-robot interaction. 
                  </Typography>
                </CardFooter>
              </div>
            </Card>

            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={rajiv}
                  alt="rajiv"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Rajiv Thummala
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    PhD Candidate
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://www.linkedin.com/in/rajivthummala/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="ResearchGate">
                      <Typography
                        as="a"
                        href="https://www.researchgate.net/profile/Rajiv-Thummala"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faResearchgate} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: rkt34@cornell.edu"
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
                  Rajiv Thummala is pursuing a PhD in Aerospace Engineering at Cornell University with a minor in National Security. He graduated summa cum laude and as a NASA Space Grant Scholar from the Pennsylvania State University in 2023, where he earned his M.S and B.S degrees in Cybersecurity. As a graduate researcher at the Aerospace ADVERSARY Laboratory, Rajiv is developing disruptive space technology. His research interests/experiences are in the domain of aerospace security, space combat power projection, and national security space topics.                    </Typography>
                </CardFooter>
              </div>
            </Card>

           <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={matteo}
                  alt="matteo"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="black" className="mb-2">
                    Matteo Calabrese
                  </Typography>
                  <Typography
                    color="black"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5"
                  >
                    PhD Candidate
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://no.linkedin.com/in/matcala?trk=public_post_feed-actor-name"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="ResearchGate">
                      <Typography
                        as="a"
                        href="https://www.researchgate.net/profile/Matteo-Calabrese-5"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faResearchgate} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: mc2884@cornell.edu"
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
                  Matteo Calabrese is pursuing a Ph.D. in Systems Engineering at Cornell University and is an assistant researcher at the Aerospace ADVERSARY Lab. He received his B.A. in Cybersecurity from the University of Milan and a double M.S. in Security and Cloud Computing from Aalto University and the Norwegian University of Science and Technology. During his academic journey he has explored novel threats to space vehicles using machine learning and penetration testing techniques. His current research focuses on the cybersecurity of space systems, satellite ground networks, and small satellites.
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
