import SpeedDial from "./Navbar-sm";
import { useEffect } from "react";
import aboutIcon from "../assets/about-icon.svg";
import educationIcon from "../assets/education-icon.svg";
import projectIcon from "../assets/project-icon.svg";
import contactIcon from "../assets/contact-icon.svg";
import myLogo from "../assets/myLogo.png";
import { Analytics } from "@vercel/analytics/react"
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
      className="flex sticky top-0 z-50 md:mb-0 bg-transparent transition-colors duration-300 p-2"
      id="navbar"
    >
      <div className="flex justify-between md:justify-evenly items-center p-2 md:p-1 w-full px-10">
        <a href="/" className="flex-shrink-0">
          <img src={myLogo} alt="My Logo" className="w-14 h-12" />
        </a>
        <Analytics/>

        <div className="animate__animated animate__fadeIn">
          <ul className="flex items-center gap-8 lg:gap-20">
            {[
              { href: "#about", icon: aboutIcon, label: "About" },
              { href: "#education", icon: educationIcon, label: "Education" },
              { href: "#project", icon: projectIcon, label: "Project" },
              { href: "#contact", icon: contactIcon, label: "Contact" },
            ].map(({ href, icon, label }) => (
              <li key={label} className="hidden md:block cursor-pointer hover:text-blue-400 transition-colors">
                <a href={href} className="flex items-center gap-2">
                  <img src={icon} alt={label} className="w-4 h-4" />
                  {label}
                </a>
              </li>
            ))}
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
