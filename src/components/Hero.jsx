import 'animate.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Me from "../assets/me.png";
import download from "../assets/download-icon.svg";
import Socials from "./socials-account";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [0, 100]);

  return (
    <section className="hero flex flex-col md:flex-row md:justify-center items-center md:gap-30 p-5 text-center md:text-justify md:h-[100vh]">
      <motion.div
        className="m-2 p-2 animate__animated animate__bounceInLeft"
        style={{
          opacity,
          transform: yTransform,
        }}
      >
        Hello, I&apos;m
        <br />
        <span className="font-extrabold text-2xl md:text-7xl text-center">
          James Anthony.
        </span>
        <div className="typewriter max-w-[13.5rem]">
          <h1>Front-end Developer</h1>
        </div>
        <p>
          An aspiring Front-end Developer from Dasmarinas City, Cavite,
          Philippines.
        </p>
        <br />
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-2">

          <Socials />

          <button className="bg-blue-900 hover:bg-blue-800 p-2 pl-3 rounded-md text-[12px] flex items-center">
            Download CV
            <img src={download} alt="Download" className="w-5 h-5 ml-2" />
          </button>
        </div>
      </motion.div>
      <motion.div
        className="my-image animate__animated animate__bounceInRight max-w-[330px] md:max-w-[600px] max-h-[700px] md:max-h-[750px] overflow-hidden"
        initial={{ opacity: 1, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          opacity,
          transform: yTransform,
        }}
      >
        <img src={Me} alt="My-Image" className="w-full h-full " />
      </motion.div>
    </section>
  );
}
