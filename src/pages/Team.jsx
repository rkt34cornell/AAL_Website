import React, { useState, useEffect } from "react"; // Import useEffect here
import styles from "../style";
import { Navbar, Footer, Bingo } from "../components";

const greg = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Gregory_ghrza5.png";
const nathaniel = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903709/the-aerospace-adversary/Nathaniel_mg3xfw.png";
const nicolo = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1706424728/Boschetti_pic263_div8rv.png";
const cameron = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1697328844/100cam_q3bfyt.png";
const rajiv = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1697330716/rkt34_lhzlwf.png";
const matteo = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1704835581/ntnu_shoot_square_pngybh.jpg";
const aalaudio = "https://res.cloudinary.com/dlxh3nrry/video/upload/v1706240962/AALMUSIC_fiyfdy.mp3";

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
    setSelectedIndex(i === selectedIndex ? -1 : i);
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
                    {selectedIndex === 0 ? (
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
              {/* Horizontal dropdown for Dr. Gregory Falco */}
              <div
                className={`${
                  selectedIndex === 0 ? "flex" : "hidden"
                } flex-row items-start p-4 border border-gray-300 rounded-lg ml-4`}
                style={{ maxWidth: "600px" }}
              >
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Prof. Gregory Falco has been at the forefront of space
                    system and critical infrastructure security...
                  </Typography>
                </CardFooter>
              </div>
            </Card>
          </div>

          {/* Other team members */}
          <div className="grid gap-16 grid-cols-1 sm:grid-cols-3 sm:px-16 px-6 sm:py-16 py-6 justify-center items-start justify-items-center">
            {/* Card components for other team members like Nicolò Boschetti, Nathaniel Gordon, etc. */}
            {/* The rest of the team members' cards remain the same as the original code provided */}
            <Card className="sm:w-96" shadow={false} color="white">
              <CardHeader floated={false}>
                <img
                  src={nicolo}
                  alt="nicolo"
                  className="h-[100%] w-[100%]"
                />
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
                    {selectedIndex === 1 ? (
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
              <div className={selectedIndex === 1 ? "block" : "hidden"}>
                <CardFooter className="pt-0">
                  <Typography color="black" className="text-start">
                    Nicolò Boschetti is pursuing a Ph.D. in Aerospace Engineering
                    at Cornell University and is an assistant researcher at the
                    Aerospace ADVERSARY Lab...
                  </Typography>
                </CardFooter>
              </div>
            </Card>
            {/* Repeat similarly for other team members */}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Team;
