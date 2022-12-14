import React from 'react'
import styles from './style'
import { Navbar, Hero, Impact, Projects, Publications, Map, Taxonomy, Team, Partners, Footer } from "./components";

const App = () => {
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
        <Map />
        <Taxonomy />
        <Partners />
        <Team />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default App