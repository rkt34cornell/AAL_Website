import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";

const Contact = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={styles.heading2}>Contact Us</h2>
          <p className={`${styles.paragraph} mt-5 text-center`}>
                    We warmly welcome inquiries from prospective student members
                    (undergrad to doctoral) and all those interested in our
                    lab's work.
                  </p>
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="text-center">
              <h4 className="text-secondary mb-1 text-xl font-normal">
                Our Location
              </h4>
              <p className="text-white text-base">
                124 Hoy Rd, Ithaca, NY 14850
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-secondary mb-1 text-xl font-normal">
                Email Address
              </h4>
              <p className="text-white text-base">gfalco@cornell.edu</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
