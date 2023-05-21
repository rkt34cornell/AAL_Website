import { React } from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import data from "../constants/taxonomy-data.json";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Taxonomy = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2}`}>
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
            commercial space sector. It can help arm space security policymakers
            with tools to advocate for stricter regulation and security
            enforcement mechanisms, maintain the momentum of space commerce, and
            evaluate the security challenges for the industry. It can also be an
            essential tool for future insurance underwriting commercial space
            missions. The proposed security risk taxonomy is a valuable tool to
            help the commercial space sector systematically address and mitigate
            external security risks. The original research paper can be
            downloaded for free from{" "}
            <a
              className="text-secondary"
              target="_blank"
              href="https://www.researchgate.net/publication/352960784_A_Security_Risk_Taxonomy_for_Commercial_Space_Missions"
            >
              here
            </a>
            .
          </p>
          <hr></hr>
          
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Taxonomy;
