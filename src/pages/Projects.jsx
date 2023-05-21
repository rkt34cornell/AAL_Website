import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import orbits from "../assets/orbits.png";
import antiransomware from "../assets/anti-ransomware.png";
import uav from "../assets/uav.jpeg";
import soalrsail from "../assets/solar-sail.jpg";
import gsaas from "../assets/gsaas.png";

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
            className={`${styles.flexCenter} ${styles.paddingY} grid grid-cols-1 sm:grid-cols-2 justify-center items-stretch`}
          >
            <div className="m-10">
              <Card className="w-auto">
                <CardHeader
                  floated={false}
                  color="black"
                  className="relative h-128 w-auto"
                >
                  <img src={gsaas} alt="gsaas" className="h-full w-full" />
                </CardHeader>
                <CardBody className="text-start">
                  <Typography variant="h5" className="mb-2">
                    Space Ground Infrastructure Security Analysis
                  </Typography>
                  <Typography>
                    Satellite Ground Stations and Ground Station as a Service
                    (GSaaS) networks are the focus of an extensive research
                    project that merges systems engineering, cybersecurity,
                    open-source intelligence, and international security
                    concepts and methods. This research aims to provide a
                    comprehensive analysis of the current security landscape of
                    ground space infrastructures. The project has already
                    produced three research papers, which have provided valuable
                    insights into the security of GSaaS assets in the Arctic and
                    High North, and have analyzed the reference architectures of
                    existing GSaaS networks. Additionally, the project has
                    explored the potential implementation of future Hybrid Space
                    Architecture concepts. Overall, this research project is a
                    valuable contribution to satellite communications. The
                    results of this research provide insights and
                    recommendations that can be used to improve these networks'
                    security, performance, and scalability. Furthermore, the
                    project has demonstrated the value of a multidisciplinary
                    research method.
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Typography variant="small" color="gray">
                    Nicolò Boschetti
                  </Typography>
                </CardFooter>
              </Card>
            </div>
            <div className="m-10">
              <Card className="w-auto">
                <CardHeader
                  floated={false}
                  color="black"
                  className="relative h-128 w-auto"
                >
                  <img src={orbits} alt="uav" className="h-full w-full" />
                </CardHeader>
                <CardBody className="text-start">
                  <Typography variant="h5" className="mb-2">
                    ORBITS
                  </Typography>
                  <Typography>
                    The Orbital Resilient Blockchain-enabled Inter-agent
                    Transaction Service (ORBITS) research project is the result
                    of a Young Faculty Award from the DARPA Strategic Technology
                    Office. The ORBITS architecture offers a means to securely
                    facilitate space infrastructure as a service, which will
                    allow the ‘new space’ industry to scale and help drive down
                    costs for intelligence and military space operations. Gordon
                    manages a team of undergraduate and masters-level student
                    researchers in prototyping, testing, and evaluating a
                    distributed ledger-enabled service marketplace designed to
                    run on a variety of space assets and payloads with minimal
                    resource overhead. Additionally, the team seeks to gain
                    flight heritage of their system before the conclusion of the
                    project.
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Typography variant="small" color="gray">
                    Nathaniel Gordon
                  </Typography>
                </CardFooter>
              </Card>
            </div>
            <div className="m-10">
              <Card className="w-auto">
                <CardHeader
                  floated={false}
                  color="black"
                  className="relative h-128 w-auto"
                >
                  <img src={uav} alt="uav" className="h-full w-full" />
                </CardHeader>
                <CardBody className="text-start">
                  <Typography variant="h5" className="mb-2">
                    Peer-to-Peer Ground Stations
                  </Typography>
                  <Typography>
                    We are developing the hardware and software infrastructure
                    needed to enable a peer-to-peer network of affordable ground
                    stations. The work involves the production of novel 3D
                    printed designs for low-cost antenna rotators, the
                    development of a low-compute software module capable of
                    satellite acquisition and tracking, and the assembly of a
                    honey-pot based intrusion detection system. The project is
                    generously funded by Space@Hopkins.
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex flex-col justify-between items-center"
                  >
                    Damiano Marsili
                  </Typography>
                </CardFooter>
              </Card>
            </div>
            <div className="m-10">
              <Card className="w-auto">
                <CardHeader
                  floated={false}
                  color="black"
                  className="relative h-128 w-auto"
                >
                  <img src={soalrsail} alt="uav" className="h-full w-full" />
                </CardHeader>
                <CardBody className="text-start">
                  <Typography variant="h5" className="mb-2">
                    Dielectric Elastomer Actuation for Solar Sails
                  </Typography>
                  <Typography>
                    Development of dialectic elastomer actuation for solar sails
                    powered by solar radiation pressure. Dielectric elastomers
                    for actuation take advantage of the dialectic nature of
                    materials to cause large amounts of strain with the power of
                    an electric field. Solar sails use solar radiation for
                    propulsion, and controlled manipulations of the shape of the
                    solar sail to vary incident solar flux can be used to
                    maneuver the spacecraft. We are exploring the possibility of
                    using dielectric elastomers for solar sails with small scale
                    (homemade) dielectric elastomers with the hope of creating a
                    control model that could simulate such a system in space.
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Typography
                    variant="small"
                    color="gray"
                    className="grid gap-5"
                  >
                    Yanni Nikas
                  </Typography>
                </CardFooter>
              </Card>
            </div>
            <div className="m-10">
              <Card className="w-auto">
                <CardHeader
                  floated={false}
                  color="black"
                  className="relative h-128 w-auto"
                >
                  <img
                    src={antiransomware}
                    alt="uav"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody className="text-start">
                  <Typography variant="h5" className="mb-2">
                    Fully Distributed Anti-Ransomware Defense System
                  </Typography>
                  <Typography>
                    We are developing a novel anti-ransomware defense system
                    tailored to distributed networks. The work leverages
                    advancements in entropy-based ransomware detection,
                    distributed system diagnostics, and blockchain to provide a
                    mechanism for combating ransomware in a distributed nature
                    without imposing additional structure to the network.
                    Importantly, the proposed architecture provides a novel two
                    layers of security: the program monitors file systems on the
                    network, and the program monitors itself to ensure results
                    are not being tampered with.
                  </Typography>
                </CardBody>
                <CardFooter
                  divider
                  className="flex items-center justify-between py-3"
                >
                  <Typography
                    variant="small"
                    color="gray"
                    className="grid gap-5"
                  >
                    Damiano Marsili
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
