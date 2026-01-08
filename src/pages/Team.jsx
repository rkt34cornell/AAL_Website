import React, { useState, useEffect } from "react"; // Import useEffect here
import styles from "../style";
import { Navbar, Footer, Bingo } from "../components";

import greg from "../assets/gregory-falco22.png";
const nicolo = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1706424728/Boschetti_pic263_div8rv.png"
const cameron = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1697328844/100cam_q3bfyt.png"
const rajiv = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1697330716/rkt34_lhzlwf.png"
const jackson = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1767897119/jacksonHeadshot_qn0qm9.jpg";
const anurag = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1767897119/AnuragHeadshot_r1ryyc.png";
const john = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1767897119/johnHeadshot_wt8flk.jpg";

const varija = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271626/headshot_11_-_Varija_Mehta_codcbf.png";
const jonathan = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271629/IMG_9238_-_Jonathan_Distler_haqgqu.jpg";
const laurence = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1729271625/IMG_6030_-_Laurence_Lai_tcoxqi.jpg";


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
          <h2 className="font-poppins font-normal text-white text-[40px] text-center w-full">Our Team</h2>
           
          <div className={`bg-primary ${styles.flexStart}`}>
             <div className={`${styles.boxWidth}`}>
               <Bingo />
      </div>

    </div>
          <div
            className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}
          >
            <div className="w-full rounded-xl border border-white/25 bg-primary/40 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-full md:w-[260px] lg:w-[300px] flex-shrink-0">
                <img
                  src={greg}
                  alt="Gregory Falco"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
                  Dr. Gregory Falco
                </Typography>
                <Typography
                  color="white"
                  className="font-medium flex justify-items-start gap-5 mb-5 text-dimWhite"
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
                <div className="space-y-4">
                  <Typography color="white" className="text-start text-dimWhite">
                    Dr. Gregory Falco is an Assistant Professor at the Sibley School of
                    Mechanical and Aerospace Engineering and the Systems Engineering Program
                    at Cornell University. He received his PhD from MIT, where NASA’s Jet
                    Propulsion Laboratory funded his doctoral research in Cybersecurity at
                    MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL).
                    Prior to joining Cornell University, he was an Assistant Professor at
                    Johns Hopkins University’s Institute for Assured Autonomy and completed
                    postdoctoral research at Stanford University’s Freeman Spogli Institute
                    and MIT CSAIL.
                  </Typography>
                  <Typography color="white" className="text-start text-dimWhite">
                    He is the director of the Aerospace ADVERSARY Laboratory, which designs
                    and develops next-generation autonomous, secure and resilient space
                    infrastructure. As a hacker, he exploits physics and modern computing
                    systems to achieve missions previously thought to be infeasible. His
                    space technology research is policy-relevant and advances standards and
                    national security conversations relating to space supremacy and
                    cybersecurity. DARPA, the US Space Force, AFRL, NIST and NASA have
                    funded his lab.
                  </Typography>
                  <Typography color="white" className="text-start text-dimWhite">
                    He was listed in Forbes 30 Under 30 for Enterprise Technology, named a
                    DARPA RISER, and received the DARPA Young Faculty Award for his
                    disruptive security and space technology research. His research and
                    patents have been spun out into startups that have achieved
                    international impact and recognition, resulting in acquisition. He
                    consults for a range of big technology companies, space systems and
                    defense contractors including Johns Hopkins University’s Applied Physics
                    Laboratory. Prior to completing his PhD, he was an executive at
                    Accenture.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
         <h2 className="font-poppins font-normal text-white text-[28px] text-center w-full mt-6">
           Graduate Students
         </h2>

          <div className="grid gap-16 grid-cols-1 sm:grid-cols-3 sm:px-16 px-6 sm:py-16 py-6 justify-center items-start justify-items-center">
            <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
              <CardHeader floated={false}>
                
                <img src={nicolo} alt="nicolo" className="h-[100%] w-[100%]" />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
                   Nicolò Boschetti
                  </Typography>
                  <Typography
                    color="white"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite"
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
                  <Typography color="white" className="text-start text-dimWhite">
                  Nicolò Boschetti is pursuing a Ph.D. in Aerospace Engineering at Cornell University and is an assistant researcher at the Aerospace ADVERSARY Lab. He is the Secretary of the IEEE Standard Association's Space Systems Cybersecurity International Working Group. He received his B.A. in International and Diplomatic Sciences from the University of Bologna and his M.A. in Politics and Economics of Eurasia from the Moscow State Institute of International Relations (MGIMO). His research focuses on the security of space systems, space cybersecurity, satellite ground network security, and the Russian space program and policy. He has published papers in several AIAA, IEEE, and IAF conferences and journals. 
                  </Typography>
                </CardFooter>
              </div>
            </Card>
            <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={cameron}
                  alt="cameron"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
                    Cameron Mehlman
                  </Typography>
                  <Typography
                    color="white"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite"
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
                  <Typography color="white" className="text-start text-dimWhite">
                  Cameron Mehlman is a PhD candidate at Cornell University specializing in dynamic controls and autonomy. His project experience includes designing autonomous path planning algorithms, working with complex ML and RL models for dynamic control, and designing novel physical systems for human-robot interaction. 
                  </Typography>
                </CardFooter>
              </div>
            </Card>

            <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={rajiv}
                  alt="rajiv"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
                    Rajiv Thummala
                  </Typography>
                  <Typography
                    color="white"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite"
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
                  <Typography color="white" className="text-start text-dimWhite">
                  Rajiv Thummala is pursuing a PhD in Aerospace Engineering at Cornell University with a minor in International Relations. He graduated summa cum laude and as a NASA Space Grant Scholar from the Pennsylvania State University in 2023, where he earned his M.S and B.S degrees in Cybersecurity. As a graduate researcher at the Aerospace ADVERSARY Laboratory, Rajiv is developing disruptive space technology. His research interests/experiences are in the domain of aerospace security, space combat power projection, and national security space topics.                    </Typography>
                </CardFooter>
              </div>
            </Card>

            <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={jackson}
                  alt="Jackson Artis"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
                    Jackson Artis
                  </Typography>
                  <Typography
                    color="white"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite"
                  >
                    PhD Candidate
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://www.linkedin.com/in/jacksonartis/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: jaa395@cornell.edu"
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
                  <Typography color="white" className="text-start text-dimWhite">
                    Jackson is a first year PhD student who came to Cornell to study satellite constellation design. He graduated from Princeton University with a Bachelor's in Mechanical and Aerospace Engineering and from Johns Hopkins University with a Master's in Space System Engineering. He spent 5 years working in the Aerospace and Defense Industry, focusing on mission level analysis. He is interested in identifying new ways to improve the efficacy of current and future constellations for humanitarian aid and national security.
                  </Typography>
                </CardFooter>
              </div>
            </Card>

            <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={anurag}
                  alt="Anurag Koyyada"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
                    Anurag Koyyada
                  </Typography>
                  <Typography
                    color="white"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite"
                  >
                    J.D. Candidate
                    <Tooltip content="LinkedIn">
                      <Typography
                        as="a"
                        href="https://www.linkedin.com/in/anu-koy/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: ak2542@cornell.edu"
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
                  <Typography color="white" className="text-start text-dimWhite">
                    Anurag Koyyada enjoys designing new technologies and creatively interpreting rules. He is pursuing a J.D. at Cornell Law School and is a graduate researcher in the Aerospace ADVERSARY Lab. Anurag is also a Lloyd N. Cutler Fellow in International Law at the Salzburg Seminar and a Reppy Fellow at the Judith Reppy Institute for Peace and Conflict Studies. He is currently developing a hybrid space architecture for NATO’s HEIST project and researching the cybersecurity of remote sensing space systems. Anurag has previously worked with the U.S. Department of Defense (DIU/NSIN), Stargate Project (SoftBank), Flock Safety, SynMax, and Chatham House. He did his undergraduate studies at King’s College London and grew up in the San Francisco Bay Area.
                  </Typography>
                </CardFooter>
              </div>
            </Card>

            <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
              <CardHeader floated={false}>
                <img
                  className="h-[100%] w-[100%]"
                  src={john}
                  alt="John Miller"
                />
              </CardHeader>
              <CardBody className="flex flex-row items-center justify-between">
                <div>
                  <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
                    John Miller
                  </Typography>
                  <Typography
                    color="white"
                    className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite"
                  >
                    PhD Candidate
                    <Tooltip content="Email">
                      <Typography
                        as="a"
                        href="mailto: jhm368@cornell.edu"
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
                      setIndex(7);
                    }}
                    className="cursor-pointer"
                  >
                    {selectedIndex == 7 ? (
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
              <div className={selectedIndex == 7 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="white" className="text-start text-dimWhite">
                    John Miller is pursuing a Systems Engineering PhD with a focus in drone research. He is currently researching ways to improve drone fault detection and autonomous behavior and aims to apply his work to national defense. John graduated the US Air Force Academy in 2015 and double majored in Electrical Engineering and Computer Engineering. He earned his M.Eng in Systems Engineering from the Air Force Institute of Technology in 2023. He is currently a US Air Force Officer at Cornell as part of the DAWN PhD fellowship.
                  </Typography>
                </CardFooter>
              </div>
            </Card>

          </div>
          <h2 className="font-poppins font-normal text-white text-[28px] text-center w-full mt-10">
            Undergraduate Students
          </h2>

<div className="grid gap-16 grid-cols-1 sm:grid-cols-3 sm:px-16 px-6 sm:py-16 py-6 justify-center items-start justify-items-center">
  {/* Laurence Lai - Junior */}
  <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
    <CardHeader floated={false}>
      <img src={laurence} alt="Laurence Lai" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
          Laurence Lai
        </Typography>
        <Typography color="white" className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite">
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
        <Typography color="white" className="text-start text-dimWhite">
          Laurence Lai is an undergraduate junior pursuing a B.S. in Electrical and Computer Engineering at Cornell University. At the Aerospace Adversary Lab, his research experience involves integrating and testing a custom 6DOF omnicopter for autonomous flight control algorithms.
        </Typography>
      </CardFooter>
    </div>
  </Card>

  {/* Varija Mehta - Sophomore */}
  <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
    <CardHeader floated={false}>
      <img src={varija} alt="Varija Mehta" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
          Varija Mehta
        </Typography>
        <Typography color="white" className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite">
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
        <Typography color="white" className="text-start text-dimWhite">
          Varija Mehta is currently a sophomore pursuing a Bachelor's in Computer Science at Cornell University. As a student researcher at the Aerospace ADVERSARY Lab, Varija is researching the security of space systems and consolidating security principles to be used by organizations like the IEEE. Her research interests lie in national security and threat intelligence topics.
        </Typography>
      </CardFooter>
    </div>
  </Card>

  {/* Jonathan Distler - Sophomore */}
  <Card className="sm:w-96 bg-primary/40 border border-white/25" shadow={false}>
    <CardHeader floated={false}>
      <img src={jonathan} alt="Jonathan Distler" className="h-[100%] w-[100%]" />
    </CardHeader>
    <CardBody className="flex flex-row items-center justify-between">
      <div>
        <Typography variant="h4" color="white" className="mb-2 font-poppins font-normal text-[22px]">
          Jonathan Distler
        </Typography>
        <Typography color="white" className="font-medium flex justify-items-start gap-2 sm:gap-5 text-dimWhite">
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
        <Typography color="white" className="text-start text-dimWhite">
          My name is Jonathan Distler. I am a sophomore studying Mechanical Engineering at the College of Engineering. I'm currently working on the Magpie project as a part of Mr. Mehlman's research group. For the project, I'm trying to develop a controllable attitude for a drone simulation, so that our prototype can be tested virtually before running real-world tests.
        </Typography>
      </CardFooter>
    </div>
  </Card>
</div>

          <div className="mt-12">
            <h2 className="font-poppins font-normal text-white text-[28px] text-center w-full mt-6">
              Alumni
            </h2>
            <div className="mt-6 text-center">
              <p className="font-poppins font-normal text-white text-[18px]">
                Dr. Nathaniel Gordon '25 -{" "}
                <em>Efficient and Robust Marketplace Platforms for Heterogenous On-Orbit Networks</em>
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Footer />
          </div>
</div>
</div>
</div>
);
};

export default Team;
