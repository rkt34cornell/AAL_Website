import React, { useEffect, useRef, useState } from 'react'
import styles from "../style";

const afrl = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903703/the-aerospace-adversary/afrl_dzfaj2.png"
const apl = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903699/the-aerospace-adversary/apl_tlv4n8.png"
const isac = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903701/the-aerospace-adversary/isac_f8w6ty.png"
const nist = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903699/the-aerospace-adversary/nist_gytzgn.png"
const darpa = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903706/the-aerospace-adversary/darpa_hped1z.png"
const ussp = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903703/the-aerospace-adversary/ussp_vz5otz.png"

const Partners = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
       <h2 className={`${styles.heading2} mt-8 mb-4`}>Our Partners</h2>
    <div id="partners" className={`${styles.flexCenter} sm:flex-row flex-col`}>
      <div className='flex flex-row justify-center items-center'>
      <img src={afrl} alt="afrl" className={`partner-logo ${isVisible ? "partner-logo--visible" : ""} p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative`} style={{ animationDelay: "0.05s" }} />
      <img src={apl} alt="apl" className={`partner-logo ${isVisible ? "partner-logo--visible" : ""} p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative`} style={{ animationDelay: "0.15s" }} />
      <img src={isac} alt="isac" className={`partner-logo ${isVisible ? "partner-logo--visible" : ""} p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative`} style={{ animationDelay: "0.25s" }} />
      <img src={nist} alt="nist" className={`partner-logo ${isVisible ? "partner-logo--visible" : ""} p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative`} style={{ animationDelay: "0.35s" }} />
      <img src={darpa} alt="darpa" className={`partner-logo ${isVisible ? "partner-logo--visible" : ""} p-5 w-[20%] h-[20%] lg:p-10 lg:w-[20%] lg:h-[20%] z-1 relative`} style={{ animationDelay: "0.45s" }} />
      <img src={ussp} alt="ussp" className={`partner-logo ${isVisible ? "partner-logo--visible" : ""} p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative`} style={{ animationDelay: "0.55s" }} />
      </div>
    </div>
    </div>
  );
};

export default Partners;
