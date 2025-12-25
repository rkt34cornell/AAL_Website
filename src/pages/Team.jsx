import React, { useState, useEffect } from "react"; // Import useEffect here
import styles from "../style";
import { Navbar, Footer, Bingo } from "../components";

const greg = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Gregory_ghrza5.png";
const nathaniel = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Nathaniel_mg3xfw.png";
const nicolo = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1706424728/Boschetti_pic263_div8rv.png"
const cameron = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1697328844/100cam_q3bfyt.png"
const rajiv = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1697330716/rkt34_lhzlwf.png"

const varija = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271626/headshot_11_-_Varija_Mehta_codcbf.png";
const joshua = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271626/IMG_2847_2_-_Joshua_Caplan_psij7u.jpg";
const adhyan = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271631/cropped-image-min_-_Adhyan_Prasad_fevixg.png";
const jonathan = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271629/IMG_9238_-_Jonathan_Distler_haqgqu.jpg";
const denis = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271625/8040ad81-72a7-49f3-978b-4f6138eac22e_2-2-2-2_-_Denis_Brown_uqogtc.jpg";
const laurence = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271625/IMG_6030_-_Laurence_Lai_tcoxqi.jpg";
const william = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271629/wmr48_headshot_-_William_Rosenthal_bbynk5.png";


const aalaudio = ""

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
Dr. Gregory Falco is an Assistant Professor at the Sibley School of Mechanical and Aerospace Engineering and the Systems Engineering Program at Cornell University. He received his PhD from MIT, where NASA’s Jet Propulsion Laboratory funded his doctoral research in Cybersecurity at MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL). Prior to joining Cornell University, he was an Assistant Professor at Johns Hopkins University’s Institute for Assured Autonomy and completed postdoctoral research at Stanford University’s Freeman Spogli Institute and MIT CSAIL. Falco is the founding chair of IEEE's Standard for Space System Cybersecurity and the NATO Country Project Director for the NATO Science for Peace and Security effort to reroute the internet to space.

                  </Typography>
                </CardFooter>
              </div>
            </Card>
          </div>
         <h2 className={styles.heading2}>Graduate Students</h2>

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
                    ADVERSARY research group, he investigated resilient space
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
                  Rajiv Thummala is pursuing a PhD in Aerospace Engineering at Cornell University with a minor in International Relations. He graduated summa cum laude and as a NASA Space Grant Scholar from the Pennsylvania State University in 2023, where he earned his M.S and B.S degrees in Cybersecurity. As a graduate researcher at the Aerospace ADVERSARY Laboratory, Rajiv is developing disruptive space technology. His research interests/experiences are in the domain of aerospace security, space combat power projection, and national security space topics.                    </Typography>
                </CardFooter>
              </div>
            </Card>

          </div>
          <h2 className={styles.heading2}>Undergraduate Students</h2>

<div className="grid gap-16 grid-cols-1 sm:grid-cols-3 sm:px-16 px-6 sm:py-16 py-6 justify-center items-start justify-items-center">
  {/* Joshua Caplan - Senior */}
  <Card className="sm:w-96" shadow={false} color="white">
    <CardHeader floated={false}>
      <img src={joshua} alt="Joshua Caplan" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="black" className="mb-2">
          Joshua Caplan
        </Typography>
        <Typography color="black" className="font-medium flex justify-items-start gap-2 sm:gap-5">
          Undergraduate Student
          <Tooltip content="LinkedIn">
            <Typography as="a" href="https://www.linkedin.com/in/joshcaplans/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Typography>
          </Tooltip>
          <Tooltip content="Email">
            <Typography as="a" href="mailto:jc2567@cornell.edu" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </Typography>
          </Tooltip>
        </Typography>
      </div>
      <div>
        <Typography onClick={() => { setIndex(6); }} className="cursor-pointer">
          {selectedIndex == 6 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>}
        </Typography>
      </div>
    </CardBody>
    <div className={selectedIndex == 6 ? "block" : "hidden"}>
      <CardFooter className="pt-0">
        <Typography color="black" className="text-start">
          I am a senior CS student who loves cybersecurity and AI. I am working under Rajiv Thummala to implement an adversarial machine learning model to simulated spacecraft computer vision systems. This will be a proof of concept to show an attack vector using NASA's Core Flight System.
        </Typography>
      </CardFooter>
    </div>
  </Card>

  {/* Adhyan Prasad - Senior */}
  <Card className="sm:w-96" shadow={false} color="white">
    <CardHeader floated={false}>
      <img src={adhyan} alt="Adhyan Prasad" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="black" className="mb-2">
          Adhyan Prasad
        </Typography>
        <Typography color="black" className="font-medium flex justify-items-start gap-2 sm:gap-5">
          Undergraduate Student
          <Tooltip content="LinkedIn">
            <Typography as="a" href="https://www.linkedin.com/in/adhyan-prasad/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Typography>
          </Tooltip>
          <Tooltip content="Email">
            <Typography as="a" href="mailto:ap842@cornell.edu" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </Typography>
          </Tooltip>
        </Typography>
      </div>
      <div>
        <Typography onClick={() => { setIndex(7); }} className="cursor-pointer">
          {selectedIndex == 7 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>}
        </Typography>
      </div>
    </CardBody>
    <div className={selectedIndex == 7 ? "block" : "hidden"}>
      <CardFooter className="pt-0">
        <Typography color="black" className="text-start">
          Adhyan Prasad is a senior in the College of Engineering pursuing a B.S in Mechanical Engineering. His current research complements Cameron's through designing a dynamics simulation of a satellite and implementing a reinforcement learning algorithm for precise spacecraft control. Adhyan's previous experiences include developing mechanical hardware to support experimentation of an autonomous 6 DOF drone and interning at NASA GSFC in the Mechatronics and Robotics branch, where he worked on a modular rover prototype.
        </Typography>
      </CardFooter>
    </div>
  </Card>

  {/* Denis Brown - Senior */}
  <Card className="sm:w-96" shadow={false} color="white">
    <CardHeader floated={false}>
      <img src={denis} alt="Denis Brown" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="black" className="mb-2">
          Denis Brown
        </Typography>
        <Typography color="black" className="font-medium flex justify-items-start gap-2 sm:gap-5">
          Undergraduate Student
          <Tooltip content="LinkedIn">
            <Typography as="a" href="https://www.linkedin.com/in/denisbrownece/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Typography>
          </Tooltip>
          <Tooltip content="Email">
            <Typography as="a" href="mailto:drb343@cornell.edu" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </Typography>
          </Tooltip>
        </Typography>
      </div>
      <div>
        <Typography onClick={() => { setIndex(8); }} className="cursor-pointer">
          {selectedIndex == 8 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>}
        </Typography>
      </div>
    </CardBody>
    <div className={selectedIndex == 8 ? "block" : "hidden"}>
      <CardFooter className="pt-0">
        <Typography color="black" className="text-start">
          I am a senior majoring in Electrical and Computer Engineering, contributing to the hardware team of the Magpie project. My work focuses on integrating Jetson Nano and LiDAR sensor technology into autonomous drones to enhance real-time navigation and obstacle detection.
        </Typography>
      </CardFooter>
    </div>
  </Card>

  {/* William Rosenthal - Senior */}
  <Card className="sm:w-96" shadow={false} color="white">
    <CardHeader floated={false}>
      <img src={william} alt="William Rosenthal" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="black" className="mb-2">
          William Rosenthal
        </Typography>
        <Typography color="black" className="font-medium flex justify-items-start gap-2 sm:gap-5">
          Undergraduate Student
          <Tooltip content="LinkedIn">
            <Typography as="a" href="https://www.linkedin.com/in/willmrosenthal/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Typography>
          </Tooltip>
          <Tooltip content="Email">
            <Typography as="a" href="mailto:wmr48@cornell.edu" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </Typography>
          </Tooltip>
        </Typography>
      </div>
      <div>
        <Typography onClick={() => { setIndex(10); }} className="cursor-pointer">
          {selectedIndex == 10 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>}
        </Typography>
      </div>
    </CardBody>
    <div className={selectedIndex == 10 ? "block" : "hidden"}>
      <CardFooter className="pt-0">
        <Typography color="black" className="text-start">
          William Rosenthal is pursuing a B.S. in Computer Science with a concentration in cybersecurity at Cornell University. He serves as the President of the Cornell Cybersecurity Club and is an active participant in campus initiatives. As an undergraduate researcher at the Aerospace ADVERSARY Lab, William focuses on developing smart contract models to simulate satellite-ground station interactions, optimizing data rerouting during submarine communications cable disruptions. He also analyzes supply chains in the High North, tracing unusual shipments to assess security risks.
        </Typography>
      </CardFooter>
    </div>
  </Card>

  {/* Laurence Lai - Junior */}
  <Card className="sm:w-96" shadow={false} color="white">
    <CardHeader floated={false}>
      <img src={laurence} alt="Laurence Lai" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="black" className="mb-2">
          Laurence Lai
        </Typography>
        <Typography color="black" className="font-medium flex justify-items-start gap-2 sm:gap-5">
          Undergraduate Student
          <Tooltip content="LinkedIn">
            <Typography as="a" href="https://www.linkedin.com/in/laurencemlai/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Typography>
          </Tooltip>
          <Tooltip content="Email">
            <Typography as="a" href="mailto:ll758@cornell.edu" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </Typography>
          </Tooltip>
        </Typography>
      </div>
      <div>
        <Typography onClick={() => { setIndex(11); }} className="cursor-pointer">
          {selectedIndex == 11 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>}
        </Typography>
      </div>
    </CardBody>
    <div className={selectedIndex == 11 ? "block" : "hidden"}>
      <CardFooter className="pt-0">
        <Typography color="black" className="text-start">
          Laurence Lai is an undergraduate junior pursuing a B.S. in Electrical and Computer Engineering at Cornell University. At the Aerospace Adversary Lab, his research experience involves integrating and testing a custom 6DOF omnicopter for autonomous flight control algorithms.
        </Typography>
      </CardFooter>
    </div>
  </Card>

  {/* Varija Mehta - Sophomore */}
  <Card className="sm:w-96" shadow={false} color="white">
    <CardHeader floated={false}>
      <img src={varija} alt="Varija Mehta" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="black" className="mb-2">
          Varija Mehta
        </Typography>
        <Typography color="black" className="font-medium flex justify-items-start gap-2 sm:gap-5">
          Undergraduate Student
          <Tooltip content="LinkedIn">
            <Typography as="a" href="https://www.linkedin.com/in/varija-mehta/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Typography>
          </Tooltip>
          <Tooltip content="Email">
            <Typography as="a" href="mailto:vvm26@cornell.edu" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </Typography>
          </Tooltip>
        </Typography>
      </div>
      <div>
        <Typography onClick={() => { setIndex(12); }} className="cursor-pointer">
          {selectedIndex == 12 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>}
        </Typography>
      </div>
    </CardBody>
    <div className={selectedIndex == 12 ? "block" : "hidden"}>
      <CardFooter className="pt-0">
        <Typography color="black" className="text-start">
          Varija Mehta is currently a sophomore pursuing a Bachelor's in Computer Science at Cornell University. As a student researcher at the Aerospace ADVERSARY Lab, Varija is researching the security of space systems and consolidating security principles to be used by organizations like the IEEE. Her research interests lie in national security and threat intelligence topics.
        </Typography>
      </CardFooter>
    </div>
  </Card>

  {/* Jonathan Distler - Sophomore */}
  <Card className="sm:w-96" shadow={false} color="white">
    <CardHeader floated={false}>
      <img src={jonathan} alt="Jonathan Distler" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="black" className="mb-2">
          Jonathan Distler
        </Typography>
        <Typography color="black" className="font-medium flex justify-items-start gap-2 sm:gap-5">
          Undergraduate Student
          <Tooltip content="LinkedIn">
            <Typography as="a" href="https://www.linkedin.com/in/jonathan-distler-a742b7290/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Typography>
          </Tooltip>
          <Tooltip content="Email">
            <Typography as="a" href="mailto:jhd94@cornell.edu" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </Typography>
          </Tooltip>
        </Typography>
      </div>
      <div>
        <Typography onClick={() => { setIndex(13); }} className="cursor-pointer">
          {selectedIndex == 13 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>}
        </Typography>
      </div>
    </CardBody>
    <div className={selectedIndex == 13 ? "block" : "hidden"}>
      <CardFooter className="pt-0">
        <Typography color="black" className="text-start">
          My name is Jonathan Distler. I am a sophomore studying Mechanical Engineering at the College of Engineering. I'm currently working on the Magpie project as a part of Mr. Mehlman's research group. For the project, I'm trying to develop a controllable attitude for a drone simulation, so that our prototype can be tested virtually before running real-world tests.
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
