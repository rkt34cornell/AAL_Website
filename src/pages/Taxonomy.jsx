import { React } from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import data from "../constants/taxonomy.json";
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
          <h2 className={`${styles.heading2}`}>Taxonomy</h2>
          <div
            className={`${styles.paddingY} hidden md:flex md:justify-center md:items-center`}
          >
            <h2 className="font-poppins font-semibold xs:text-[32px] text-[24px] text-white text-start w-80">
              Where
            </h2>
            <h2 className="font-poppins font-semibold xs:text-[32px] text-[24px] text-white text-start w-80">
              How
            </h2>
            <h2 className="font-poppins font-semibold xs:text-[32px] text-[24px] text-white text-start w-80">
              What
            </h2>
            <h2 className="font-poppins font-semibold xs:text-[32px] text-[24px] text-white text-start w-80">
              Which
            </h2>
          </div>
          <div className="md:flex md:justify-start md:items-start md:mt-0 md:ml-10 mt-10 hidden">
            <Tabs orientation="vertical">
              <TabsHeader className="w-80 h-96">
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
                    {/* {desc} */}
                    <Tabs orientation="vertical">
                      <TabsHeader className="w-80 h-96">
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
                            {/* {desc} */}
                            <Tabs orientation="vertical">
                              <TabsHeader className="w-80 h-96">
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
                                    {/* {desc} */}
                                    <Tabs orientation="vertical">
                                      <TabsHeader className="w-80 h-96">
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
                                            {/* {desc} */}
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
                    {/* {desc} */}
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
                            {/* {desc} */}
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
                                    {/* {desc} */}
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
                                            {/* {desc} */}
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
