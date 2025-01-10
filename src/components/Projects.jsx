import enroll from "../assets/enroll-sys.png";
import dish from "../assets/dish-dash.png";
export default function Projects() {
  return (
    <section className="m-3 md:m-10 text-xs">
      <div className="m-8">
        <div className="text-gray-200">
          <h1 className="mb-2 text-lg font-bold">My Projects</h1>
          <hr />
          <h1 className="mt-2 text-xl font-bold">See my works</h1>
          <p className="text-sm m-1">
            A collection of web development projects demonstrating various
            designs, functionalities, and technologies I've worked with,
            showcasing practical applications
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">

        <div className="bg-transparent border border-gray-700 rounded-md max-w-96 p-4 my-8">
            <h1 className="my-2 font-bold text-sm">
              Dish Dash Recipe App with AI Integration
            </h1>
            <div className="max-h-[72%] min-h-[72%]">
            <img src={dish} alt="Project Image" />
            <div className="w-full">
              <p className="text-sm m-2">
                A smart recipe app that generates meal suggestions based on the
                ingredients you have on hand. It simplifies cooking by helping
                you make the most of your available resources.
              </p>
            </div>
            </div>
            <div>
              <br />
              <div className=" ">
              <p>Technologies:</p>
              <ul className="tech-container flex flex-wrap justify-evenly items-center m-2 gap-2 md:gap-y-1">
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  React JS
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  Vite
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  JavaScript
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  TailwindCSS
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  HTML
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  CSS
                </li>
              </ul>
              </div>
            </div>
          </div>

          <div className="bg-transparent border border-gray-700 rounded-md max-w-96 p-4 my-8">
            <h1 className="my-2 font-bold text-sm">
                Enrollment Management System
            </h1>
            <img src={enroll} alt="Project Image" />
            <div className="w-full">
              <p className="text-sm m-2">
                The system for managing enrollment for Sta. Cruz Elementary
                School eases the scheduling, enrollment, and sections
                management. Teachers monitor student list and grades,
                administrators manage enrollment, sections, and schedules, and
                students can readily access, re-enroll, and view sections,
                grades, and schedules.
              </p>
            </div>
            <div>
              <br />
              <p>Technologies:</p>
              <ul className="tech-container flex flex-wrap justify-evenly items-center m-2 gap-2 md:gap-0">
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  HTML
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  CSS
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  JavaScript
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  PHP
                </li>
                <li className="bg-blue-900 rounded-sm text-center min-w-[4rem] max-w-[5rem] p-1">
                  MySQL
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
