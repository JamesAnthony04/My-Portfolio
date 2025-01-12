import SpeedDial from "./Navbar-sm";
import { useEffect } from "react";
export default function Navbar() {

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

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <header
        className="flex sticky top-0 z-50 md:mb-0 bg-transparent transition-colors duration-300"
        id="navbar"
      >
        <div className="nav relevant flex justify-evenly items-center p-4 min-w-[100%]">
          <a href="/">
            <h1 className="animate__animated animate__lightSpeedInLeft cursor-pointer">
              My Portfolio
            </h1>
          </a>
          <div className="animate__animated animate__fadeIn">
            <ul className="list flex items-center gap-20">
              <a href="#about">
                <li className="hidden md:block cursor-pointer">About</li>
              </a>
              <a href="#education">
                <li className="hidden md:block cursor-pointer">Education</li>
              </a>
              <a href="#project">
                <li className="hidden md:block cursor-pointer">Project</li>
              </a>
              <a href="#contact">
                <li className="hidden md:block cursor-pointer">Contact</li>
              </a>
            </ul>
          </div>
          <nav className="block md:hidden">
            <SpeedDial />
          </nav>
        </div>
      </header>
    </>
  );
}
