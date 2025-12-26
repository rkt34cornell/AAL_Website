import styles from "../style";
import logo from "../assets/logo.svg";
import flagUs from "../assets/flag-us.png";
import { socialMedia } from "../constants";
import { useState } from "react";

const Footer = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleAudio = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    window.dispatchEvent(
      new CustomEvent("aal-audio-toggle", { detail: { muted: nextMuted } })
    );
  };

  return (
  <section id="contact" className={`${styles.flexCenter} sm:py-8 py-6 flex-col`}>
    <div className="w-full mb-6 pt-4 border-t-[1px] border-t-[#3F3E45]">
      <div className={`sm:${styles.flexStart} ${styles.flexCenter} md:flex-row flex-col w-full`}>
      <div className="flex-1 w-full px-6 md:px-12 flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col items-center gap-3">
          <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
            Copyright Ⓒ 2024 The Aerospace Adversary. All Rights Reserved.
          </p>
          <button
            type="button"
            onClick={handleToggleAudio}
            className="border border-white/20 text-white px-4 py-2 rounded hover:border-white/40"
          >
            {isMuted ? "Unmute Audio" : "Mute Audio"}
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-[160px] h-[90px]"
            />
            <img
              src={flagUs}
              alt="United States flag"
              className="w-[144px] h-[96px] object-contain"
            />
          </div>
          <p className="font-poppins italic text-white text-center">
            Dominus Siderum
          </p>
        </div>
      </div>
      </div>
    </div>

    <div className="w-full flex justify-center items-center md:flex-row flex-col mb-4">
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[16px] h-[16px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default Footer;
