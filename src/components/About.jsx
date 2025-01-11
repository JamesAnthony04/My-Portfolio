import "animate.css";
import { motion } from "framer-motion";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import skills from "../skills";
import tools from "../tools";
import others from "../others";
import HR from "./custom-hr";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import aboutlottie from "../assets/about.lottie";

export default function About() {
  const setOfSkills = skills.map((skill) => (
    <div
      key={skill.id}
      className="relative bg-transparent border border-gray-700 max-h-[2rem] rounded-lg w-full flex 
      items-center justify-center gap-1 min-h-[65px] overflow-hidden
      transform transition-all duration-300 hover:shadow-lg hover:border-blue-500
      hover:bg-gray-700 cursor-pointer group"
    >
      <img
        src={skill.img.src}
        alt={skill.img.alt}
        className="h-full w-full object-contain z-10 opacity-80
        transition-all duration-300 group-hover:rotate-6 group-hover:opacity-100"
      />
      <p
        className="z-10 m-3 font-medium text-white text-[12px]
      transition-all duration-300 group-hover:text-blue-400"
      >
        {skill.skillName}
      </p>
    </div>
  ));

  const setOfTools = tools.map((tool) => (
    <div
      key={tool.id}
      className="relative bg-transparent border border-gray-700 max-h-[2rem] rounded-lg w-full flex 
      items-center justify-center gap-1 min-h-[65px] overflow-hidden
      transform transition-all duration-300 hover:shadow-lg hover:border-blue-500
      hover:bg-gray-700 cursor-pointer group"
    >
      <img
        src={tool.img.src}
        alt={tool.img.alt}
        className="h-12 w-12 z-10 opacity-80
        transition-all duration-300 group-hover:rotate-6 group-hover:object-cover group-hover:opacity-100"
      />
      <p
        className=" m-3 font-medium text-white text-[12px]
      transition-all duration-300 group-hover:text-blue-400"
      >
        {tool.toolName}
      </p>
    </div>
  ));
  const setOfOthers = others.map((other) => (
    <div
      key={other.id}
      className="relative bg-transparent border border-gray-700 max-h-[2rem] rounded-lg w-full flex 
      items-center justify-center gap-1 min-h-[65px] overflow-hidden
      transform transition-all duration-300 hover:shadow-lg hover:border-blue-500
      hover:bg-gray-700 cursor-pointer group"
    >
      <img
        src={other.img.src}
        alt={other.img.alt}
        className="h-11 w-11 z-10 opacity-80
        transition-all duration-300 group-hover:rotate-6 group-hover:object-cover group-hover:opacity-100"
      />
      <p
        className=" m-3 font-medium text-white text-[12px]
      transition-all duration-300 group-hover:text-blue-400"
      >
        {other.title}
      </p>
    </div>
  ));
  return (
    <section id="about" className="about-me-section py-6 px-5 ">
      <motion.div
        className="flex flex-col md:flex-col xl:flex-row items-center gap-10 m-5 md:m-10"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-transparent border border-gray-700 text-gray-300 rounded-md shadow p-4 sm:p-6 md:p-8">
          <div className="my-3 flex items-center justify-center gap-1">
            <h1 className=" text-md font-bold">About</h1>
            <HR />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Get to know me</h2>
          <p className="text-sm md:text-md mb-4">
            Hello! I&apos;m <strong>James Anthony Guevarra</strong>, a 4th year
            college student taking Bachelors of Science in Information
            Technology (BSIT) at National College of Science and Technology
            (NCST), an aspiring front-end developer passionate about creating
            engaging and user-friendly web experiences.
          </p>
          <p className="text-sm md:text-md mb-4">
            I am particularly drawn to the intersection of design and
            functionality, where I can combine my creative instincts with my
            technical skills to build beautiful, responsive websites.
          </p>
          <p className="text-sm md:text-md mb-4">
            I am particularly drawn to exploring a variety of hobbies that allow
            me to express my creativity and enhance my skills. I enjoy creating
            art that reflects my unique perspective. Additionally, I love
            experimenting with cooking and trying new recipes, as it allows me
            to combine flavors and techniques in exciting ways. Engaging in
            these activities not only brings me joy but also helps me cultivate
            a balanced and fulfilling life.
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
          <DotLottieReact src={aboutlottie} loop autoplay className="about-lottie w-full h-full min-w-[40rem]" />
        </motion.div>
      </motion.div>

      <motion.section
        className="m-5 md:m-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="my-3 flex items-center justify-center gap-1">
          <h1 className=" text-md font-bold">Skills</h1>
          <HR />
        </div>
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
                    "py-2 px-4 focus:outline-none transition",
                    selected
                      ? "bg-blue-800 border border-blue-800 text-white"
                      : "bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-600"
                  )}
                >
                  Tools
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
                  Others
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

            <TabPanel>
              <br />
              <motion.div
                className="container-tools"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {setOfOthers}
              </motion.div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </motion.section>
    </section>
  );
}
