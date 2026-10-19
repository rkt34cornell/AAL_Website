import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import labBanner from "../assets/facility/lab-banner.jpg";
import netWall from "../assets/facility/net-wall.jpg";
import andurilBanner from "../assets/facility/anduril-banner.jpg";

const stats = [
  { value: "6,000 sq ft", label: "Indoor flight space" },
  { value: "Motion capture", label: "State-of-the-art tracking system" },
  { value: "Hardware in the loop", label: "Robotics, UAV & spaceflight testing" },
];

const Facility = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />

          <div className="mt-8">
            <h2 className={`${styles.heading3} text-center`}>Our Facility</h2>
            <img
              src={labBanner}
              alt="Aerospace Adversary Lab banner reading 'Building the Ultimate High Ground'"
              className="w-full mt-8 rounded-xl border border-white/10 object-cover max-h-[520px]"
            />
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 mt-10">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl border border-white/10 bg-primary/40 p-5 text-center"
              >
                <p className="text-white text-[22px] font-poppins font-medium">
                  {stat.value}
                </p>
                <p className="text-dimWhite text-[14px] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex md:flex-row flex-col gap-10 mt-12 items-center">
            <div className="flex-1">
              <h3 className="text-white text-[24px] font-poppins font-medium">
                One of the Largest Indoor Flight Facilities in the Country
              </h3>
              <p className={`${styles.paragraph} mt-5`}>
                The Aerospace Adversary Lab operates a 6,000-square-foot indoor
                flight facility, one of the largest of its kind in the United
                States. The space is fully netted and instrumented with a
                state-of-the-art motion capture system, giving us precise,
                real-time tracking of vehicles in flight.
              </p>
              <p className={`${styles.paragraph} mt-5`}>
                We use the facility for hardware-in-the-loop testing across
                robotics, UAV, and spaceflight experiments, so we can take ideas
                from simulation to real hardware in a controlled, repeatable
                environment.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={netWall}
                alt="Netted indoor flight area inside the facility"
                className="w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col-reverse gap-10 mt-16 items-center">
            <div className="flex-1 flex justify-center">
              <img
                src={andurilBanner}
                alt="Anduril Industries banner hanging in the flight facility"
                className="w-full max-w-[420px] rounded-xl border border-white/10 object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-[24px] font-poppins font-medium">
                Supported by Anduril Industries
              </h3>
              <p className={`${styles.paragraph} mt-5`}>
                Our flight facility is funded by Anduril Industries. Their
                support lets us build and operate testing infrastructure at a
                scale rarely available in a university lab.
              </p>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Facility;
