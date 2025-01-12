import SpeedDial from "./Navbar-sm";
import { useEffect } from "react";
import aboutIcon from "../assets/about-icon.svg";
import educationIcon from "../assets/education-icon.svg";
import projectIcon from "../assets/project-icon.svg";
import contactIcon from "../assets/contact-icon.svg";
import myLogo from "../assets/myLogo.png";


const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-blue-800");
      } else {
        navbar.classList.remove("bg-blue-800");
        navbar.classList.add("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="flex sticky top-0 z-50 md:mb-0 bg-transparent transition-colors duration-300"
      id="navbar"
    >
      <div className="flex justify-evenly items-center p-2 md:p-1 w-full px-10">
        <a href="/" className="flex-shrink-0">
          <img
            src={myLogo}
            alt="Logo"
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-13 md:w-13 lg:h-16 lg:w-16 object-contain animate__animated animate__lightSpeedInLeft cursor-pointer transition-all duration-300"
          />
        </a>
        
        <div className="animate__animated animate__fadeIn">
          <ul className="flex items-center gap-8 lg:gap-20">
            <a href="#about">
              <li className="hidden md:block cursor-pointer hover:text-blue-400 transition-colors">
                <div className="flex items-center gap-2">
                  <img src={aboutIcon} alt="" className="w-4 h-4" />
                  About
                </div>
              </li>
            </a>
            <a href="#education">
              <li className="hidden md:block cursor-pointer hover:text-blue-400 transition-colors">
                <div className="flex items-center gap-2">
                  <img src={educationIcon} alt="" className="w-4 h-4" />
                  Education
                </div>
              </li>
            </a>
            <a href="#project">
              <li className="hidden md:block cursor-pointer hover:text-blue-400 transition-colors">
                <div className="flex items-center gap-2">
                  <img src={projectIcon} alt="" className="w-4 h-4" />
                  Project
                </div>
              </li>
            </a>
            <a href="#contact">
              <li className="hidden md:block cursor-pointer hover:text-blue-400 transition-colors">
                <div className="flex items-center gap-2">
                  <img src={contactIcon} alt="" className="w-4 h-4" />
                  Contact
                </div>
              </li>
            </a>
          </ul>
        </div>
        
        <nav className="block md:hidden">
          <SpeedDial />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;