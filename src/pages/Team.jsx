import { React, useState } from "react";
import { Hero2 } from "../components";
import styles from "../style";
import { Navbar, Footer } from "../components";

const greg = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Gregory_ghrza5.png";
const nathaniel = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Nathaniel_mg3xfw.png";
const nicolo = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903715/the-aerospace-adversary/Nicolo_ywx48i.png";


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
               <Hero2 />
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
                  Dr. Gregory Falco is an Assistant Professor at the Sibley School of Mechanical and Aerospace Engineering and the Systems Engineering Program at Cornell University. He received his PhD from MIT, where NASA’s Jet Propulsion Laboratory funded his doctoral research in Cybersecurity at MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL). Prior to joining Cornell University, he was an Assistant Professor at Johns Hopkins University’s Institute for Assured Autonomy and completed postdoctoral research at Stanford University’s Freeman Spogli Institute and MIT CSAIL. As a hacker, he exploits physics and modern computing systems to achieve missions previously thought to be infeasible. His space technology research is policy-relevant and advances standards and national security conversations relating to space supremacy and cybersecurity. He was listed in Forbes 30 Under 30 for Enterprise Technology, named a DARPA RISER, and received the DARPA Young Faculty Award for his disruptive security and space technology research. His research and patents have been spun out into startups that have achieved international impact and recognition, resulting in acquisition. He consults for a range of big technology companies, space systems and defense contractors including Johns Hopkins University’s Applied Physics Laboratory. Prior to completing his PhD, he was an executive at Accenture.
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

           
           
            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Team;