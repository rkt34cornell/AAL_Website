import React, { useEffect, useState } from 'react';
import { Navbar, Footer } from "../components";
import styles from '../style';
import MapComponent from "../components/MapComponent";
import data from "../constants/taxonomy-data.json";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Present2024 = () => {
  const [researchItems, setResearchItems] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(researchItems.length / itemsPerPage);
  useEffect(() => {
    const loadResearch = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.BASE_URL}recent-research.json`,
          { cache: "no-store" }
        );
        if (!res.ok) {
          return;
        }
        const data = await res.json();
        if (Array.isArray(data.items)) {
          setResearchItems(data.items);
        }
      } catch (error) {
        console.error("Failed to load recent research:", error);
      }
    };
    loadResearch();
  }, []);

  useEffect(() => {
    if (researchItems.length === 0) {
      return;
    }
    if (pageCount <= 1) {
      return;
    }
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPageIndex((prev) => (prev + 1) % pageCount);
        setIsFading(false);
      }, 350);
    }, 12000);
    return () => clearInterval(intervalId);
  }, [researchItems]);

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

  const podcastShowLink = "https://open.spotify.com/show/4hfSOTDIXK4yEnESnEbAzn";

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2} text-center`}>
            Research
          </h2>
          <p className={`${styles.paragraph} mt-5 mb-5 text-center italic`}>
            Driving the next generation of national security space capabilities.
          </p>
          <section className="mt-6">
            {researchItems.length > 0 ? (
              <>
                <div
                  className={`mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 transition-all duration-500 ${
                    isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  {researchItems
                    .slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage)
                    .map((item) => (
                      <div
                        key={item.id || item.title}
                        className="w-full rounded-lg border border-white/10 px-6 py-4 transition-shadow hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-poppins font-semibold text-white text-[18px] hover:text-secondary"
                        >
                          {item.title}
                        </a>
                        <p className="font-poppins text-dimWhite text-[14px] mt-2">
                          {item.venue}
                          {item.venue && item.year ? " • " : ""}
                          {item.year}
                        </p>
                      </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-center items-center gap-4">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="border border-white/20 text-white px-4 py-2 rounded hover:border-white/40"
                  >
                    Prev
                  </button>
                  <p className="text-dimWhite text-[14px]">
                    Page {pageCount === 0 ? 0 : pageIndex + 1} of {pageCount}
                  </p>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="border border-white/20 text-white px-4 py-2 rounded hover:border-white/40"
                  >
                    Next
                  </button>
                </div>
              </>
            ) : null}
          </section>
          
          <hr className="my-12" />

          <section id="map" className="mt-8">
            <h2 className={`${styles.heading2} text-center`}>
              Space Ground Infrastructure in the High North
            </h2>
            <p className={`${styles.paragraph} mt-5 mb-5 text-justify`}>
              The following map is described in this{" "}
              <a
                className="text-secondary"
                target="_blank"
                rel="noreferrer"
                href="https://www.researchgate.net/publication/366050065_Commercial_Space_Risk_Framework_Assessing_the_Satellite_Ground_Station_Security_Landscape_for_NATO_in_the_Arctic_and_High_North"
              >
                paper
              </a>{" "}
              published at the IEEE MilCom 2022 Conference. This under-constant
              update map illustrates the current landscape of commercial
              satellite ground stations and other civilian ground space
              capabilities in the High North and bordering regions. The High
              North is an important geopolitical region for NATO and an area of
              increasing power competition between NATO and Russia, with
              interests related to climate change, natural resources, critical
              infrastructures, and sea lines of communication. In addition,
              ground stations in the Arctic have unique access to surveillance
              and intelligence satellites in polar orbits, making the High North
              particularly important to the emergent space sector. However,
              relying on commercial infrastructure to command and control
              defense-related space assets in the region presents security
              risks. The original publication provides ground station owners and
              operators with insights to consider their security risks actively.
              The paper characterizes the complexity of risk identification and
              measurement while designating eight risk regions based on factors
              such as the number of assets, international alignment, security
              policy, proximity to hostile forces or borders, presence of
              military defenses, the current strategic profile, and general
              remoteness from support services. It offers those engaging the
              services of Ground Station as a Service (GSaaS) providers an
              understanding of the risks of working with ground station
              operators located in designated regions.
            </p>
            <hr />
            <div className="flex justify-between">
              <p className={`${styles.paragraph} m-5 text-center`}>
                Zoom Controls
              </p>
              <p className={`${styles.paragraph} m-5 text-center`}>
                Layer Controls
              </p>
            </div>
            <MapComponent />
          </section>

          <hr className="my-12" />

          <section id="taxonomy" className="mt-8">
            <h2 className={`${styles.heading2} text-center`}>
              Security Risk Taxonomy for Commercial Space Missions
            </h2>
            <p className={`${styles.paragraph} mt-5 mb-5 text-justify`}>
              Commercial space missions have unique characteristics that expose
              them to external security risks. A security risk taxonomy has been
              proposed to address these risks, defining security risks as
              incidents that may disrupt the success of a mission and are caused
              by external factors to the space system. The taxonomy includes
              nation-state motivated, natural, cybercrime, space debris, and
              policy incidents. The proposed taxonomy provides a systematic
              approach to characterizing security challenges for the emerging
              commercial space sector. It can help arm space security
              policymakers with tools to advocate for stricter regulation and
              security enforcement mechanisms, maintain the momentum of space
              commerce, and evaluate the security challenges for the industry.
              It can also be an essential tool for future insurance underwriting
              commercial space missions. The proposed security risk taxonomy is
              a valuable tool to help the commercial space sector systematically
              address and mitigate external security risks. The original
              research paper can be downloaded for free from{" "}
              <a
                className="text-secondary"
                target="_blank"
                rel="noreferrer"
                href="https://www.researchgate.net/publication/352960784_A_Security_Risk_Taxonomy_for_Commercial_Space_Missions"
              >
                here
              </a>
              .
            </p>
            <hr />

            <div
              className={`${styles.paddingY} hidden md:flex md:justify-center md:items-center`}
            >
              <h2 className="font-poppins font-semibold xs:text-[26px] text-[16px] text-white text-start w-64 mr-5">
                Where
              </h2>
              <h2 className="font-poppins font-semibold xs:text-[26px] text-[16px] text-white text-start w-64 mr-4">
                How
              </h2>
              <h2 className="font-poppins font-semibold xs:text-[26px] text-[16px] text-white text-start w-64 mr-3">
                What
              </h2>
              <h2 className="font-poppins font-semibold xs:text-[26px] text-[16px] text-white text-start w-64 mr-4">
                Which
              </h2>
              <h2 className="font-poppins font-semibold xs:text-[26px] text-[16px] text-white text-start w-64 mr-5">
                Description
              </h2>
            </div>
            <div className="md:flex md:justify-start md:items-start md:mt-0 mt-10 hidden">
              <Tabs orientation="vertical">
                <TabsHeader className="w-64 h-96">
                  {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  {data.map(({ value, desc, how }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                      <Tabs orientation="vertical">
                        <TabsHeader className="w-64 h-96">
                          {how.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                              {label}
                            </Tab>
                          ))}
                        </TabsHeader>
                        <TabsBody
                          animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                          }}
                        >
                          {how.map(({ value, desc, what }) => (
                            <TabPanel key={value} value={value}>
                              {desc}
                              <Tabs orientation="vertical">
                                <TabsHeader className="w-64 h-96">
                                  {what.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                      {label}
                                    </Tab>
                                  ))}
                                </TabsHeader>
                                <TabsBody
                                  animate={{
                                    initial: { y: 250 },
                                    mount: { y: 0 },
                                    unmount: { y: 250 },
                                  }}
                                >
                                  {what.map(({ value, desc, which }) => (
                                    <TabPanel key={value} value={value}>
                                      {desc}
                                      <Tabs orientation="vertical">
                                        <TabsHeader className="w-64 h-96">
                                          {which.map(({ label, value }) => (
                                            <Tab key={value} value={value}>
                                              {label}
                                            </Tab>
                                          ))}
                                        </TabsHeader>
                                        <TabsBody>
                                          {which.map(({ value, desc }) => (
                                            <TabPanel
                                              key={value}
                                              value={value}
                                              className="text-white"
                                            >
                                              {desc}
                                            </TabPanel>
                                          ))}
                                        </TabsBody>
                                      </Tabs>
                                    </TabPanel>
                                  ))}
                                </TabsBody>
                              </Tabs>
                            </TabPanel>
                          ))}
                        </TabsBody>
                      </Tabs>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
            <div className="md:hidden">
              <Tabs orientation="horizontal">
                <TabsHeader className="w-full">
                  {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  {data.map(({ value, desc, how }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                      <Tabs orientation="horizontal">
                        <TabsHeader className="w-full">
                          {how.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                              {label}
                            </Tab>
                          ))}
                        </TabsHeader>
                        <TabsBody
                          animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                          }}
                        >
                          {how.map(({ value, desc, what }) => (
                            <TabPanel key={value} value={value}>
                              {desc}
                              <Tabs orientation="horizontal">
                                <TabsHeader className="w-full">
                                  {what.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                      {label}
                                    </Tab>
                                  ))}
                                </TabsHeader>
                                <TabsBody
                                  animate={{
                                    initial: { y: 250 },
                                    mount: { y: 0 },
                                    unmount: { y: 250 },
                                  }}
                                >
                                  {what.map(({ value, desc, which }) => (
                                    <TabPanel key={value} value={value}>
                                      {desc}
                                      <Tabs orientation="horizontal">
                                        <TabsHeader className="w-full">
                                          {which.map(({ label, value }) => (
                                            <Tab key={value} value={value}>
                                              {label}
                                            </Tab>
                                          ))}
                                        </TabsHeader>
                                        <TabsBody
                                          animate={{
                                            initial: { y: 250 },
                                            mount: { y: 0 },
                                            unmount: { y: 250 },
                                          }}
                                        >
                                          {which.map(({ value, desc }) => (
                                            <TabPanel key={value} value={value}>
                                              {desc}
                                            </TabPanel>
                                          ))}
                                        </TabsBody>
                                      </Tabs>
                                    </TabPanel>
                                  ))}
                                </TabsBody>
                              </Tabs>
                            </TabPanel>
                          ))}
                        </TabsBody>
                      </Tabs>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </section>

          <hr className="my-12" />

          <section id="podcast" className="mt-8">
            <h2 className={`${styles.heading2} text-center`}>
              Checkout our lab's podcast
            </h2>
            <div className="mt-6" />
            <div className="flex flex-col items-center gap-6">
              <a
                href={podcastShowLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white py-2 px-4 rounded"
              >
                <em>The Ultimate High Ground</em>
              </a>
              <iframe
                className="w-full max-w-[700px] rounded-lg"
                src="https://open.spotify.com/embed/episode/0m9RnicdQ4LynHTt9dNGUY"
                width="100%"
                height="232"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="The Ultimate High Ground podcast"
              />
              <iframe
                className="w-full max-w-[700px] rounded-lg"
                src="https://open.spotify.com/embed/episode/6AF891qCC16jtxJZH5HsYQ"
                width="100%"
                height="232"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="The Ultimate High Ground podcast episode"
              />
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Present2024;
