import "animate.css";
import { motion } from "framer-motion";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import Blob from "/blob.svg";
import skills from "../skills"
import tools from "../tools"

export default function About() {

  const setOfSkills = skills.map(skill => (
    <div
      key={skill.id}
      className="relative bg-transparent border border-gray-700 max-h-[2rem] rounded-lg w-full flex 
      items-center justify-center gap-2 min-h-[65px] overflow-hidden
      transform transition-all duration-300 hover:shadow-lg hover:border-blue-500
      hover:bg-gray-700 cursor-pointer group"
    >
      <img
        src={skill.img.src}
        alt={skill.img.alt}
        className="h-full w-full object-contain z-10 opacity-80
        transition-all duration-300 group-hover:rotate-6 group-hover:object-cover group-hover:opacity-100"
      />
      <p className="z-10 m-3 font-medium text-white 
      transition-all duration-300 group-hover:text-blue-400">
        {skill.skillName}
      </p>
    </div>
  ))

  const setOfTools = tools.map(tool => (
    <div
      key={tool.id}
      className="relative bg-transparent border border-gray-700 max-h-[2rem] rounded-lg w-full flex 
      items-center justify-center gap-2 min-h-[65px] overflow-hidden
      transform transition-all duration-300 hover:shadow-lg hover:border-blue-500
      hover:bg-gray-700 cursor-pointer group"
    >
      <img
        src={tool.img.src}
        alt={tool.img.alt}
              className="h-full w-full z-10 opacity-80
        transition-all duration-300 group-hover:rotate-6 group-hover:object-cover group-hover:opacity-100"
      />
      <p className=" m-3 font-medium text-white 
      transition-all duration-300 group-hover:text-blue-400">
        {tool.toolName}
      </p>
    </div>
  ))

  return (


    <section
      id="about-me"
      className="about-me-section bg-gray-900 text-gray-100 py-10 px-5 min-h-[100vh]"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 m-5 md:m-10"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-transparent border border-gray-700 text-gray-300 rounded-md shadow p-4 sm:p-6 md:p-8">
          <h1 className="mb-4 text-md font-bold">
            About
            <span className="block w-full border-t border-gray-300 mt-2"></span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Get to know me</h2>
          <p className="text-sm md:text-md mb-4">
            Hello! I&apos;m <strong>James Anthony</strong>, an aspiring
            front-end developer passionate about creating engaging and
            user-friendly web experiences.
          </p>
          <p className="text-sm md:text-md mb-4">
            I am particularly drawn to the intersection of design and
            functionality, where I can combine my creative instincts with my
            technical skills to build beautiful, responsive websites.
          </p>
          <p className="text-sm md:text-md mb-4">
            Thank you for visiting my portfolio! I look forward to showcasing my
            work and sharing my passion for front-end development.
          </p>
        </div>
        <motion.div
          className="md:min-w-[50%] flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={Blob} alt="blob" className="w-96 h-96" />
        </motion.div>
      </motion.div>

      <motion.section
        className="m-5 md:m-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1>Skills</h1>
        <TabGroup>
          <TabList>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "py-2 px-4 rounded-tl-lg focus:outline-none transition",
                    selected
                      ? "bg-blue-800 border border-blue-800 text-white"
                      : "bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-600"
                  )}
                >
                  Tech Stack
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "py-2 px-4 rounded-tr-lg focus:outline-none transition",
                    selected
                      ? "bg-blue-800 border border-blue-800 text-white"
                      : "bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-600"
                  )}
                >
                  Tools
                </button>
              )}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <br />
              <motion.div
                className="container"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {setOfSkills}
               
              </motion.div>
            </TabPanel>
            <TabPanel>
              <br />
              <motion.div
                className="container-tools"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {setOfTools}
              </motion.div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </motion.section>
    </section>
  );
}
