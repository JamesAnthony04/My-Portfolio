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
      items-center justify-center gap-1 min-h-[70px]  overflow-hidden
      transform transition-all duration-300 hover:shadow-lg hover:border-blue-500 
      hover:bg-gray-700 cursor-pointer group"
    >
      <img
        src={skill.img.src}
        alt={skill.img.alt}
        className="h-full w-full object-contain z-10 opacity-80
        transition-all duration-300 group-hover:rotate-6 group-hover:opacity-100 m-1"
      />
      <p
        className="z-10 m-1 font-medium text-white text-[12px]
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
      items-center justify-center gap-1 min-h-[70px]  overflow-hidden
      transform transition-all duration-300 hover:shadow-lg hover:border-blue-500 
      hover:bg-gray-700 cursor-pointer group"
    >
      <img
        src={tool.img.src}
        alt={tool.img.alt}
        className="h-full w-full object-contain z-10 opacity-80
        transition-all duration-300 group-hover:rotate-6 group-hover:opacity-100 m-1"
      />
      <p
        className=" m-1 font-medium text-white text-[12px]
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
      items-center justify-center gap-1 min-h-[70px]  overflow-hidden
      transform transition-all duration-300 hover:shadow-lg hover:border-blue-500
      hover:bg-gray-700 cursor-pointer group"
    >
      <img
        src={other.img.src}
        alt={other.img.alt}
        className="h-full w-full object-contain z-10 opacity-80
        transition-all duration-300 group-hover:rotate-6 group-hover:opacity-100"
      />
      <p
        className=" m-1 font-medium text-white text-[10px]
      transition-all duration-300 group-hover:text-blue-400"
      >
        {other.title}
      </p>
    </div>
  ));

  return (
    <section id="about" className="about-me-section py-6 px-5 flex flex-col items-center">
      <motion.div
        className=" flex flex-col gap-10 m-5 md:m-10"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-transparent text-gray-300 rounded-md shadow max-w-[1200px]">
          <div className="my-3 flex items-center justify-center gap-1">
            <h1 className=" text-md font-bold">About</h1>
            <HR />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Get to <span className="text-blue-700">know</span> me
          </h2>
          <div className="max-w-[370px] lg:max-w-[500px] lg:w-[500px] md:w-[500px] md:float-right m-4 p-4">
          <DotLottieReact
            src={aboutlottie}
            loop
            autoplay
            className="about-lottie h-full
            w-full object-contain"
          />
          </div>
          <div className="xl:max-w-[80%]">
            
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
            technical skills to build beautiful, responsive websites. I found my
            passion with web development when I was in 3rd year college during
            our Web Development subject. I was amazed by how a simple code can
            create a beautiful website. Since then, I started to learn more
            about web development and started to build my own projects.
          </p>
          <h2 className="text-xl md:text-xl font-bold mb-4">
            My <span className="text-blue-600">Hobbies</span>
          </h2>
          <p className="text-sm md:text-md mb-4">
            Outside of coding, I enjoy exploring a variety of hobbies that keep
            me both creative and active. Cooking is one of my favorite ways to
            unwind, as I love experimenting with flavors and creating meals that
            bring people together. I also enjoy sketching, using it as a
            relaxing outlet to capture ideas and moments through art. Alongside
            these, fitness is an essential part of my routine—I follow a
            Push-Pull-Legs workout split to stay active, build strength, and
            maintain a healthy lifestyle. These hobbies help me stay inspired,
            balanced, and ready to tackle new challenges.
          </p>
            <h2 className="text-xl md:text-xl font-bold mb-4">
              My <span className="text-blue-600">Goal</span>
            </h2>
            <p className="text-sm md:text-md mb-4">
              My ultimate goal is to become a highly skilled front-end
              developer, contributing to innovative projects that positively
              impact users’ lives. I aim to continuously learn and refine my
              skills in modern technologies like React and Tailwind CSS while
              building a professional portfolio that showcases my growth and
              creativity. Beyond technical expertise, I aspire to create
              meaningful user experiences that make the web more accessible and
              enjoyable for everyone.
            </p>
            <p className="text-sm md:text-md mb-4">
              Thank you for visiting my portfolio! I look forward to showcasing
              my work and sharing my passion for front-end development.
            </p>
            </div>
        </div>
        <motion.section
        className=""
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >   
    <TabGroup>
      <div className="flex flex-col justify-start items-start gap-4">
    <div className="flex flex-row justify-center items-center gap-1">
      <h1 className="text-md font-bold">Skills</h1>
      <HR />
    </div>
      <TabList>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={clsx(
                "py-2 px-2 rounded-tl-lg focus:outline-none transition",
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
                "py-2 px-2 focus:outline-none transition",
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
                "py-2 px-2 rounded-tr-lg focus:outline-none transition",
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
                <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-[1200px] w-full mx-auto">
                {setOfSkills}
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <br />
              <motion.div
                className="container"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-[1200px] w-full mx-auto">
                {setOfTools}
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <br />
              <motion.div
                className="container"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div 
                className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-[1200px] w-full mx-auto">
                {setOfOthers}
                </div>
              </motion.div>
            </TabPanel>
          </TabPanels>
          </div>
        </TabGroup>
      </motion.section>
      </motion.div>
    </section>
  );
}
