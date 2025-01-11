import SpeedDial from "./Navbar-sm";
export default function Navbar() {

  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-blue-800");
    } else {
      navbar.classList.remove("bg-blue-800");
      navbar.classList.add("bg-transparent");
    }
  });
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
