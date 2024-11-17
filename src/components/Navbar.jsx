import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Ensure these imports match your file structure
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { navLinks } from '../constants'; // Ensure this matches your project structure

const cornelllogo = "https://res.cloudinary.com/dlxh3nrry/image/upload/v1706427526/Cornell-University-Logo_2_dlzgvp.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar z-30 relative">
      <Link to="/" className="ml-2 font-poppins font-normal cursor-pointer text-[14px] text-white">
        <img src={cornelllogo} alt="Logo" className="w-[210px] h-[120px]" />
      </Link>
      <ul className="list-none sm:flex hidden items-center flex-1 justify-end">
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id} 
            className={`font-poppins font-normal cursor-pointer text-[14px] text-white hover:text-secondary ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            {nav.id === 'projects' ? (
              <Link to="/2024-present">Research</Link>
            ) : (
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            )}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[16px] h-[16px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        {toggle && (
          <div className="flex p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="list-none flex flex-col items-center flex-1">
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[14px] text-black ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              <li className={`font-poppins font-normal cursor-pointer text-[14px] text-black mb-4`}>
                <Link to="/2024-present">Research</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
