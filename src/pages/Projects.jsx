import React from "react";
import styles, { layout } from "../style";
import { Navbar, Footer } from "../components";
import uav from "../assets/uav.jpeg";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Projects = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>Projects</h2>
          <div
            className={`${styles.flexCenter} ${styles.paddingY} flex flex-col md:flex-row`}
          >
          <div className="m-10">
            <Card className="w-64">
              <CardHeader color="black" className="relative h-128 w-auto">
                <img src={uav} alt="uav" className="h-full w-full" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  Project 1
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small">Link 1</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                  <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  Link 2
                </Typography>
              </CardFooter>
            </Card>
            </div>
            <div className="m-10">
            <Card className="w-64 ">
              <CardHeader color="black" className="relative h-128 w-auto">
                <img src={uav} alt="uav" className="h-full w-full" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  Project 2
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small">Link 1</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                  <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  Link 2
                </Typography>
              </CardFooter>
            </Card>
            </div>
            <div className="m-10">
            <Card className="w-64 ">
              <CardHeader color="black" className="relative h-128 w-auto">
                <img src={uav} alt="uav" className="h-full w-full" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  Project 3
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
                <Typography variant="small">Link 1</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                  <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  Link 2
                </Typography>
              </CardFooter>
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
