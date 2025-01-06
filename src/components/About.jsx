import Blob from "/blob.svg";
import "animate.css";
import React from "react";
import { motion } from "framer-motion";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

export default function About() {
  return (
    <section
      id="about-me"
      className="about-me-section bg-gray-900 text-gray-100 py-10 px-5 min-h-[100vh]"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 m-5 md:m-10"
        initial={{ opacity: 0, y: 70 }} // Start fully transparent and shifted down
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }} // Duration of the fade-in animation
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-gray-800 border border-gray-700 text-gray-300 rounded-lg shadow p-4 sm:p-6 md:p-8">
          <h1 className="mb-4 text-md font-bold">
            About
            <span className="block w-full border-t border-gray-300 mt-2"></span>
          </h1>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Get to know me</h2>
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
          initial={{ opacity: 0, y: 50 }} // Start fully transparent and shifted down
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }} // Duration of the fade-in animation
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={Blob} alt="blob" className="w-96 h-96" />
        </motion.div>
      </motion.div>

      <motion.section
      initial={{ opacity: 0, y: 50 }} // Start fully transparent and shifted down
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }} // Duration of the fade-in animation
      viewport={{ once: false, amount: 0.3 }}>
        <h1>Skills</h1>
        <TabGroup>
          <TabList>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "py-2 px-4 rounded-tl-lg focus:outline-none transition",
                    selected
                      ? "bg-blue-700 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
                      ? "bg-blue-700 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
              <motion.div className="container"
                      initial={{ opacity: 0, y: 70 }} // Start fully transparent and shifted down
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2 }} // Duration of the fade-in animation
                      viewport={{ once: false, amount: 0.3 }}>
                <div className="html-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4 flex items-center justify-center">
                  HTML 5
                </div>
                <div className="css-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  CSS
                </div>
                <div className="js-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4 flex items-center justify-center">
                  JavaScript
                </div>
                <div className="react-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  React JS
                </div>
                <div className="tailwind-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  Tailwind CSS
                </div>
                <div className="bootstrap-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  Bootstrap
                </div>
                <div className="mysql-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  MySQL
                </div>
                <div className="php-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  PHP
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <br />
            <motion.div className="container-tools"
            initial={{ opacity: 0, y: 70 }} // Start fully transparent and shifted down
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }} // Duration of the fade-in animation
            viewport={{ once: false, amount: 0.3 }}>
            <div className="vsc-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4 flex items-center justify-center">
                  Visual Studio Code
                </div>
                <div className="git-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  Git
                </div>
                <div className="git-hub-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  GitHub
                </div>
                <div className="xampp-icon bg-gray-800 border border-gray-700 rounded-lg w-full p-4">
                  Xampp
                </div>
              </motion.div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </motion.section>
    </section>
  );
}
