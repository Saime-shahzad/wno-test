import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import mainLogo from "../assets/images/mainLogo.png";
import usFlag from "../assets/images/usFlag.png";
import tikTokLogo from "../assets/images/tikTokLogo.png";
import xLogo from "../assets/images/x-image.png";
import instagram from "../assets/images/instagarm.png";
import notify from "../assets/images/notify.png";

import TopNanHeader from "./TopNanHeader";

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 1, path: "/dine-with-us", label: "Dine With Us" },
    { id: 2, path: "/plan-your-visit", label: "Plan Your Visit" },
    { id: 3, path: "/events", label: "Events" },
    { id: 4, path: "/view-groves-map", label: "View Groves Map" },
    { id: 5, path: "/our-story", label: "Our Story" },
    { id: 6, path: "/contact-us", label: "Contact Us" },
  ];

    const topImagesArray = [
      mainLogo,
      tikTokLogo,

      instagram,
      xLogo,
      notify,

      
      
    ];

  return (
    <header className="w-full">

      {/* Top header - visible only on md+ */}
      <div className="hidden md:block px-8 md:px-16 py-2 text-white bg-black ">
        <TopNanHeader images={topImagesArray}
        //  className="px-8 md:px-16 py-2 bg-gray-100" 
  buttonText="Login" 
   />
      </div>

      {/* Bottom navbar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-black border-y border-white px-8 md:px-16 py-2 w-full relative">
        <div className="flex items-center justify-between w-full md:w-auto">
           <img src={topImagesArray[0]} alt="Logo" className="h-10 md:hidden" />
           
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        <nav
          className={`flex flex-col md:flex-row md:flex w-full text-white font-medium ${
            menuOpen
              ? "flex mt-4 md:mt-0 bg-green-500 md:bg-black p-4 md:p-0 rounded md:rounded-none"
              : "hidden md:flex"
          }`}
        >
          {navItems.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`md:flex-1 text-center px-4 py-2 ${
                location.pathname === link.path
                  ? "text-blue-400 font-semibold"
                  : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile: show first top image inside dropdown */}
          <div className="md:hidden flex justify-center mt-2">
            <img src={usFlag} alt="mobile-img" className="h-12 w-auto" />
          </div>
        </nav>
      </div>
    </header>
  );
}
