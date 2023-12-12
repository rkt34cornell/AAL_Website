import styles from "../style";
import logo from "../assets/logo.svg";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="contact" className={`${styles.flexCenter} sm:py-8 py-6 flex-col`}>
    <div className={`sm:${styles.flexStart} ${styles.flexCenter} md:flex-row flex-col mb-6 w-full`}>
      <div className="flex-[1] flex sm:flex-col flex-row sm:justify-start items-center sm:items-start sm:mr-80">
        <img
          src={logo}
          alt="logo"
          className="w-[160px] h-[90px]"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px] text-center sm:text-start`}>
          Mission-Resilient Autonomy: <br className="sm:block hidden" />{" "}
          When Failure is NOT an Option.
          Caelos Oppugno
          
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[16px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={`/${link.link}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col mb-4 pt-4 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
        Copyright Ⓒ 2023 The Aerospace Adversary. All Rights Reserved.
      </p>

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

export default Footer;