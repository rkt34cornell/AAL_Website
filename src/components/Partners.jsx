import React from 'react'
import styles from "../style";

import afrl from "../assets/afrl.png"
import apl from "../assets/apl.png"
import isac from "../assets/isac.png"
import nist from "../assets/nist.png"
import darpa from "../assets/darpa.png"
import ussp from "../assets/ussp.png"

const Partners = () => {
  return (
    <div>
       <h2 className={`${styles.heading2} ${styles.marginY} ${styles.padding}`}>Partners</h2>
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
