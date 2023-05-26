import React from 'react'
import styles from "../style";

const afrl = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903703/the-aerospace-adversary/afrl_dzfaj2.png"
const apl = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903699/the-aerospace-adversary/apl_tlv4n8.png"
const isac = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903701/the-aerospace-adversary/isac_f8w6ty.png"
const nist = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903699/the-aerospace-adversary/nist_gytzgn.png"
const darpa = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903706/the-aerospace-adversary/darpa_hped1z.png"
const ussp = "https://res.cloudinary.com/djrobin17/image/upload/q_auto:low,f_auto/v1684903703/the-aerospace-adversary/ussp_vz5otz.png"

const Partners = () => {
  return (
    <div>
       <h2 className={`${styles.heading2} ${styles.marginY}`}>Partners</h2>
    <div id="partners" className={`${styles.flexCenter} sm:flex-row flex-col`}>
      <div className='flex flex-row justify-center items-center'>
      <img src={afrl} alt="afrl" className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative" />
      <img src={apl} alt="apl" className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative" />
      <img src={isac} alt="isac" className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative" />
      <img src={nist} alt="nist" className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative" />
      <img src={darpa} alt="darpa" className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[20%] lg:h-[20%] z-1 relative" />
      <img src={ussp} alt="ussp" className="p-5 w-[20%] h-[20%] lg:p-10 lg:w-[15%] lg:h-[15%] z-1 relative" />
      </div>
    </div>
    </div>
  );
};

export default Partners;
