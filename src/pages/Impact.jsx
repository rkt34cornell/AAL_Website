import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const spd5 = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903706/the-aerospace-adversary/spd5_ok6dlt.png";
const nistir = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903706/the-aerospace-adversary/nistir_deidkl.png";
const isam = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903705/the-aerospace-adversary/isam_enobly.png";
const twp = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903705/the-aerospace-adversary/twp_iykyik.jpg";
const npr = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903701/the-aerospace-adversary/npr_vit6ui.png";
const aaas = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903701/the-aerospace-adversary/aaas_efixgl.png";
const dsc = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903701/the-aerospace-adversary/dsc_rjs07l.jpg";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Impact = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>Impact</h2>
          <h2 className={`${styles.heading3} mt-5`}>
            National Policy Involvement
          </h2>
          <p className={`${styles.paragraph} mt-5 text-justify`}>
            {" "}
            We pride ourselves on having real-world impact beyond producing
            intellectual capital in the form of publications. Here are some
            outlets where our impact is readily apparent (other times our impact
            is more stealthy):{" "}
          </p>
          <div className="grid gap-16 grid-cols-1 sm:grid-cols-3 sm:px-16 px-6 sm:py-16 py-6 justify-center items-start justify-items-center">
            <Card className="w-auto">
              <CardHeader
                floated={false}
                color="black"
                className="relative h-128 w-auto"
              >
                <img src={spd5} alt="spd5" className="h-full w-full" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  SPD-5
                </Typography>
                <Typography>
                  Elements of Space Policy Directive - 5 called "Cybersecurity
                  Principles for Space Systems" reflects Falco's research
                  "Cybersecurity Principles for Space Systems"
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-center py-3"
              >
                <Typography
                  variant="small"
                  as="a"
                  target="_blank"
                  href="https://trumpwhitehouse.archives.gov/presidential-actions/memorandum-space-policy-directive-5-cybersecurity-principles-space-systems/"
                >
                  Link
                </Typography>
              </CardFooter>
            </Card>
            <Card className="w-auto">
              <CardHeader
                floated={false}
                color="black"
                className="relative h-128 w-auto"
              >
                <img src={nistir} alt="nistir" className="h-full w-full" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  NISTR 8270
                </Typography>
                <Typography>
                  Introduction to Cybersecurity for Commercial Satellite
                  Operations (2nd Draft)
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-center py-3"
              >
                <Typography
                  variant="small"
                  as="a"
                  target="_blank"
                  href="https://csrc.nist.gov/publications/detail/nistir/8270/draft"
                >
                  Link
                </Typography>
              </CardFooter>
            </Card>
            <Card className="w-auto">
              <CardHeader
                floated={false}
                color="black"
                className="relative h-128 w-auto"
              >
                <img src={isam} alt="isam" className="h-full w-full" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  ISAM
                </Typography>
                <Typography>
                  The In-space Servicing Assembly and Manufacturing (ISAM)
                  Interagency Working Group coordinates science and technology
                  policy, strategy, and federal research and development (R&D)
                  pertaining to ISAM-related capabilities under the auspices of
                  the Office of Science and Technology Policy (OSTP). This
                  coordinated effort aims to ensure that U.S. leadership in
                  servicing, assembly, manufacturing capabilities in space and
                  their applications is maintained and expanded for future use.
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-center py-3"
              >
                <Typography
                  variant="small"
                  as="a"
                  target="_blank"
                  href="https://www.whitehouse.gov/wp-content/uploads/2022/04/04-2022-ISAM-National-Strategy-Final.pdf"
                >
                  Link
                </Typography>
              </CardFooter>
            </Card>
          </div>
          <h2 className={`${styles.heading3} mt-5`}>News Sites Featured</h2>
          <div className="flex flex-row justify-center items-center">
            <img
              src={twp}
              alt="twp"
              className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative"
            />
            <img
              src={npr}
              alt="npr"
              className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative"
            />
            <img
              src={aaas}
              alt="aaas"
              className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative"
            />
            <img
              src={dsc}
              alt="dsc"
              className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative"
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Impact;
