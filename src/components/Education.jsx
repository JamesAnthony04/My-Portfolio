import HR from './custom-hr'
import ncst from "../assets/ncst-logo.png";
import congre from "../assets/congre.png";
import spc from "../assets/spc.png";
import { motion } from "framer-motion";
export default function Education() {
  return (
    <section className="py-6 px-5" id="education">
      <div className="m-8 flex flex-col justify-center items-center">
        <motion.ol className="relative flex flex-col justify-center md:px-20"
           initial={{ opacity: 0, y: 70 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9 }}
           viewport={{ once: false, amount: 0.3 }}>

        <div className='flex flex-col gap-2'>

        <div className="my-3 flex items-center justify-center gap-1"> 
        <h1 className=" text-lg font-bold">Education</h1>
        <HR />
        </div>

        <h3 className="text-2xl font-bold my-5 ">See where I <span className="text-blue-700">Went</span></h3>
        </div>

        <div className="flex flex-col gap-2">

          <li className="mb-10 border-gray-700 border rounded-md p-4 max-w-[1200px]">
          <div className="flex items-center gap-2 pb-4">
            <img src={ncst} alt="insta" className="scale-125 transform transition-transform hover:scale-150 cursor-pointer w-8 h-8" />
            <h3 className="mb-1 text-lg font-semibold text-gray-300 dark:text-white">
              National College of Science and Technology
            </h3>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2021 - Present
            </time>
            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              I am pursuing a Bachelors of Science in Information Technology
              (BSIT), where I am enhancing my skills in programming, web
              development, and system analysis. This program provides me with a
              solid foundation in technology and prepares me for a successful
              career in the IT industry.
            </p>
          </li>
          <li className="mb-10 border-gray-700 border p-4 rounded-md max-w-[1200px]">
          <div className="flex items-center gap-2 pb-4">
            <img src={congre} alt="insta" className="scale-125 transform transition-transform hover:scale-150 cursor-pointer w-8 h-8" />
            <h3 className="mb-1 text-lg font-semibold text-gray-300 dark:text-white">
              Congressional Integrated High School
            </h3>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2020 - June 2021
            </time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              I studied Computer Systems Servicing (CSS) in Grade 12, where I
              developed practical skills in hardware and software
              troubleshooting, networking, and system maintenance.
            </p>
          </li>
          <li className=" border-gray-700 border p-4 rounded-md max-w-[1200px]">
            <div className="flex items-center gap-2 pb-4">
            <img src={spc} alt="insta" className="scale-125 transform transition-transform hover:scale-150 cursor-pointer w-8 h-8" />
            <h3 className="mb-1 text-lg font-semibold text-gray-300 dark:text-white">
              San Pablo Colleges
            </h3>
            </div>
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
          </div>
        </motion.ol>
      </div>
    </section>
  );
}
