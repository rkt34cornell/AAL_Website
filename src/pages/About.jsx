import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import greg from "../assets/Gregory.png";
import nicolo from "../assets/Nicolo.png";

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
          <Typography className="text-white text-justify m-10">
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
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={greg}
                alt="greg"
                className="h-[30%] w-[30%] p-1 mt-10 ml-10 items-center rounded-full"
              />
              
              <Typography className="text-white text-justify m-2">
                Prof. Gregory Falco
              </Typography>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={nicolo}
                alt="nicolo"
                className="h-[30%] w-[30%] p-1 mt-10 ml-10 items-center rounded-full"
              />
              <Typography className="text-white text-justify m-2">
                Nicolo Boschetti
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
