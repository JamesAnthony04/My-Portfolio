import HR from './custom-hr'
import ncst from "../assets/ncst-logo.png";
import congre from "../assets/congre.png";
import spc from "../assets/spc.jpg";
import { motion } from "framer-motion";
export default function Education() {
  return (
    <section className="py-6 px-5" id="education">
        
      <motion.div className="m-8 min-h-[50vh]"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              >
        <div className="my-3 flex items-center justify-center gap-1"> 
        <h1 className=" text-lg font-bold">Education</h1>
        <HR />
        </div>
        <h3 className="text-2xl font-bold my-5">See where I <span className="text-blue-700">Went</span></h3>
        <motion.ol className="relative border-s border-gray-200 dark:border-gray-700"
           initial={{ opacity: 0, y: 70 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9 }}
           viewport={{ once: false, amount: 0.3 }}>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img
                src={ncst}
                alt="insta"
                className="scale-125 transform transition-transform hover:scale-150 cursor-pointer"
              />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-300 dark:text-white">
              National College of Science and Technology
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2021 - Present
            </time>
            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              I am pursuing a Bachelor of Science in Information Technology
              (BSIT), where I am enhancing my skills in programming, web
              development, and system analysis. This program provides me with a
              solid foundation in technology and prepares me for a successful
              career in the IT industry.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img src={congre} alt="insta" className="scale-125 transform transition-transform hover:scale-150 cursor-pointer" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-300 dark:text-white">
              Congressional Integrated High School - Senior High School
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2020 - June 2021
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              I studied Computer Systems Servicing (CSS) in Grade 12, where I
              developed practical skills in hardware and software
              troubleshooting, networking, and system maintenance.
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img src={spc} alt="insta" className="scale-125 transform transition-transform hover:scale-150 cursor-pointer" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-300 dark:text-white">
              San Pablo Colleges
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2019 - June 2020
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              I studied Information and Communication Technology (ICT) in Grade
              11, where I gained foundational knowledge in computer systems,
              programming, and digital communication. This experience sparked my
              interest in technology.
            </p>
          </li>
        </motion.ol>
      </motion.div>
    </section>
  );
}
