import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import MapComponent from "../components/MapComponent";

const Map = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2}`}>
            Space Ground Infrastructure in the High North
          </h2>
          <p className={`${styles.paragraph} mt-5 mb-5 text-justify`}>
            The following map is described in this <a className="text-secondary" target="_blank" href="https://www.researchgate.net/publication/366050065_Commercial_Space_Risk_Framework_Assessing_the_Satellite_Ground_Station_Security_Landscape_for_NATO_in_the_Arctic_and_High_North">paper</a> published at the IEEE MilCom 2022 Conference.
            This under-constant update map illustrates the current landscape of
            commercial satellite ground stations and other civilian ground space
            capabilities in the High North and bordering regions. The High North
            is an important geopolitical region for NATO and an area of
            increasing power competition between NATO and Russia, with interests
            related to climate change, natural resources, critical
            infrastructures, and sea lines of communication. In addition, ground
            stations in the Arctic have unique access to surveillance and
            intelligence satellites in polar orbits, making the High North
            particularly important to the emergent space sector. However,
            relying on commercial infrastructure to command and control
            defense-related space assets in the region presents security risks.
            The original publication provides ground station owners and
            operators with insights to consider their security risks actively.
            The paper characterizes the complexity of risk identification and
            measurement while designating eight risk regions based on factors
            such as the number of assets, international alignment, security
            policy, proximity to hostile forces or borders, presence of military
            defenses, the current strategic profile, and general remoteness from
            support services. It offers those engaging the services of Ground
            Station as a Service (GSaaS) providers an understanding of the risks
            of working with ground station operators located in designated
            regions.
          </p>
          <div className="flex justify-between">
            <p className={`${styles.paragraph} m-5 text-center`}>
              Zoom Controls
            </p>
            <p className={`${styles.paragraph} m-5 text-center`}>
              Layer Controls
            </p>
          </div>
          <MapComponent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Map;
