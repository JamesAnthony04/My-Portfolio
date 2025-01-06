import SpeedDial from "./Navbar-sm";
export default function Navbar(){
    

    return(
        <>
        <header className="flex sticky top-0 z-50">
            <div className="nav flex justify-evenly items-center text-white p-4 min-w-[100%]">
                <h1 className="animate__animated animate__lightSpeedInLeft">My Portfolio</h1>
                <div className="animate__animated animate__fadeIn">
                   <ul className="list flex items-center gap-20">
                    <li className="hidden md:block cursor pointer">About</li>
                    <li className="hidden md:block cursor pointer">Education</li>
                    <li className="hidden md:block cursor pointer">Project</li>
                    <li className="hidden md:block cursor pointer">Skills</li>
                   </ul>
                </div>
            </div>
        </header>
        <nav className="block md:hidden">    
            <SpeedDial/>
        </nav>  
        </>
    )
}