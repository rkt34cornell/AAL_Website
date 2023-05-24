import React from 'react'
import styles from '../style'
import { Navbar, Hero, Impact, Projects, Publications, Team, Partners, Footer } from "../components";

const Homepage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Impact />
        <Projects />
        <Publications />
        <Partners />
        <Team />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Homepage