import HR from "./custom-hr";
import { motion } from "framer-motion";
import Button from "./project-button";
import projects from "../projects";
export default function Projects() {
  const sortedProjects = projects.sort((a, b) => b.id - a.id);

  const setOfProjects = projects.map((project) => (
    <div
      key={project.id}
      className="holo-proj-card bg-transparent border border-gray-700 rounded-md w-[280px] md:w-[400px] min-h-[600px] p-4 cursor-pointer hover:shadow-lg hover:border-blue-500"
    >
      <h1 className="my-2 font-bold text-sm">{project.title}</h1>
      <img src={project.img.src} alt={project.img.alt} />
      <div className="w-full">
        <p className="text-sm m-2">{project.desc}</p>
      </div>
      <br />
      <div className=" ">
        <p>Technologies:</p>
        <ul className="tech-container flex flex-wrap items-center m-2 gap-1 md:gap-y-1">
          {project.tech.map((technology, index) => (
            <li
              key={index}
              className="inline-block p-1 m-1 bg-blue-900 hover:bg-blue-800 text-white rounded-sm transition-colors cursor-pointer text-[12z  px]"
            >
              {technology}
            </li>
          ))}
        </ul>
        <Button url={project.url} repo={project.repo} />
      </div>
    </div>
  ));

  return (
    <section className="text-xs py-6 px-10" id="project">
      <motion.div
        className="text-gray-200"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="my-3 flex items-center justify-center gap-1">
          <h1 className=" text-lg font-bold">Project</h1>
          <HR />
        </div>
        <h1 className="mt-2 text-2xl font-bold">
          See my <span className="text-blue-700">Works</span>
        </h1>
        <p className="text-sm m-1 mb-5">
          A collection of web development projects demonstrating various
          designs, functionalities, and technologies I&apos;ve worked with,
          showcasing practical applications.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-col justify-center items-center xl:flex-row gap-8 md:gap-4">
        {setOfProjects}
      </div>
    </section>
  );
}
