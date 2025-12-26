import React, { useEffect, useState } from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const spd5 = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903706/the-aerospace-adversary/spd5_ok6dlt.png";
const nistir = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903706/the-aerospace-adversary/nistir_deidkl.png";
const isam = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903705/the-aerospace-adversary/isam_enobly.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const newsItems = [
  {
    title: "Cornell research informs cybersecurity executive order",
    description:
      "Space-system cybersecurity research informing a White House executive order that strengthens national cyber protections, including for space assets.",
    url: "https://news.cornell.edu/stories/2025/01/cornell-research-informs-cybersecurity-executive-order",
  },
  {
    title: "Hybrid system would create new 'backbone' for internet in space",
    description:
      "NATO-funded HEIST project proposing a resilient space-based backbone to reroute internet traffic and improve global security.",
    url: "https://news.cornell.edu/stories/2024/08/hybrid-system-would-create-new-backbone-internet-space",
  },
  {
    title: "Cornell-led space tech startup acquired by Pasteur Labs",
    description:
      "Acquisition of FOSAI highlighting work on autonomous space systems and collaborations with the U.S. Space Force.",
    url: "https://news.cornell.edu/stories/2025/09/cornell-led-space-tech-startup-acquired-pasteur-labs",
  },
  {
    title: "Becoming a space computer hacker",
    description:
      "Feature on the Aerospace Adversary Lab, space cybersecurity standards, and protecting critical space infrastructure.",
    url: "https://www.technologyreview.com/2024/10/22/1104906/becoming-a-space-computer-hacker/",
  },
  {
    title: "Growing hacking threat to satellite systems compels global push to secure space tech 'by design'",
    description:
      "Global push for secure-by-design satellite infrastructure and the IEEE space cybersecurity standard.",
    url: "https://cyberscoop.com/space-secure-by-design/",
  },
  {
    title: "U.S. must maintain access to space in new threat landscape",
    description:
      "Strategies for defending U.S. satellite networks and maintaining space access amid emerging threats.",
    url: "https://news.cornell.edu/media-relations/tip-sheets/us-must-maintain-access-space-new-threat-landscape",
  },
  {
    title: "Amazon's Project Kuiper: What cybersecurity experts will be watching",
    description:
      "Cybersecurity considerations for Amazon's satellite constellation and the broader space-based internet ecosystem.",
    url: "https://news.cornell.edu/media-relations/tip-sheets/amazons-project-kuiper-what-cybersecurity-experts-will-be-watching",
  },
  {
    title: "Kuiper launch ushers in 'new age' for competitive mega constellations",
    description:
      "Security and competitive implications of Amazon's Kuiper satellite launches in a growing space economy.",
    url: "https://news.cornell.edu/media-relations/tip-sheets/kuiper-launch-ushers-new-age-competitive-mega-constellations",
  },
  {
    title: "Developments in Salt Typhoon cyberattack 'worrying' for all Americans",
    description:
      "Analysis of a major cyberattack and its implications for infrastructure and national security.",
    url: "https://news.cornell.edu/media-relations/tip-sheets/developments-salt-typhoon-cyberattack-worrying-all-americans",
  },
  {
    title: "Tech outage illustrates 'cascading failures' of homogenous systems",
    description:
      "Lessons from a global tech outage and the risks of cascading failures in homogeneous systems.",
    url: "https://news.cornell.edu/media-relations/tip-sheets/tech-outage-illustrates-cascading-failures-homogenous-systems",
  },
  {
    title: "Cornell expert: Hackers 'already' in our infrastructure, waiting to jump",
    description:
      "Persistent threats within critical infrastructure and the case for proactive defense.",
    url: "https://news.cornell.edu/media-relations/tip-sheets/cornell-expert-hackers-already-our-infrastructure-waiting-jump",
  },
];

const Impact = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(newsItems.length / itemsPerPage);

  useEffect(() => {
    if (pageCount <= 1) {
      return;
    }
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPageIndex((prev) => (prev + 1) % pageCount);
        setIsFading(false);
      }, 350);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [pageCount]);

  const handlePrev = () => {
    if (pageCount <= 1) {
      return;
    }
    setIsFading(true);
    setTimeout(() => {
      setPageIndex((prev) => (prev - 1 + pageCount) % pageCount);
      setIsFading(false);
    }, 200);
  };

  const handleNext = () => {
    if (pageCount <= 1) {
      return;
    }
    setIsFading(true);
    setTimeout(() => {
      setPageIndex((prev) => (prev + 1) % pageCount);
      setIsFading(false);
    }, 200);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className="mt-8">
            <h2 className={`${styles.heading3} text-center`}>In the News</h2>
            <div
              className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 transition-all duration-500 ${
                isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {newsItems
                .slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage)
                .map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-white/10 bg-primary/40 p-5 transition-shadow hover:shadow-[0_0_24px_rgba(59,130,246,0.4)]"
                  >
                    <h3 className="text-white text-[16px] font-poppins font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-dimWhite text-[14px] mt-3">
                      {item.description}
                    </p>
                    <p className="text-secondary text-[13px] mt-4">
                      Read article
                    </p>
                  </a>
                ))}
            </div>
            {pageCount > 1 ? (
              <div className="mt-6 flex justify-center items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="border border-white/20 text-white px-4 py-2 rounded hover:border-white/40"
                >
                  Prev
                </button>
                <p className="text-dimWhite text-[14px]">
                  Page {pageIndex + 1} of {pageCount}
                </p>
                <button
                  type="button"
                  onClick={handleNext}
                  className="border border-white/20 text-white px-4 py-2 rounded hover:border-white/40"
                >
                  Next
                </button>
              </div>
            ) : null}
          </div>
          <hr className="my-12 border-white/10" />
          <h2 className={`${styles.heading3} mt-5`}>
            National Policy Involvement
          </h2>
          <p className={`${styles.paragraph} mt-5 text-justify`}>
            We pride ourselves on having real-world impact beyond producing
            intellectual capital in the form of publications. Here are some
            outlets where our impact is readily apparent.
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Impact;
