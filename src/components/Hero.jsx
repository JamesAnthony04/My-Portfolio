import 'animate.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import instagram from "../assets/instagram-icon.svg"
import facebook from "../assets/facebook-icon.svg"
import github from "../assets/github-icon.svg"
import linked from "../assets/linkedin-icon.svg"
import Me from "../assets/me.png";
import download from "../assets/download-icon.svg";

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
          <div>
          <a
            href="https://www.facebook.com/jamesanthonyguevarraaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-10 h-10 rounded-full hover:bg-gray-200  transform transform-transition hover:scale-110">
              <img className="w-full h-full" src={facebook} alt="Facebook" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/dyames.crds/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-10 h-10 rounded-full hover:bg-gray-200 transform transform-transition hover:scale-110">
              <img className="w-full h-full" src={instagram} alt="Instagram" />
            </button>
          </a>
          <a
            href="https://github.com/JamesAnthony04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-10 h-9 rounded-full hover:bg-gray-200 transform transform-transition hover:scale-110">
              <img className="w-full h-full" src={github} alt="GitHub" />
            </button>
          </a>
          {/*
          <a
            href="https://linkedin.com/JamesAnthony"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-10 h-10 rounded-full hover:bg-gray-200 transform transform-transition hover:scale-110">
              <img className="w-full h-full" src={linked} alt="LinkedIn" />
            </button>
          </a>*/}
          </div>
          <button className="bg-blue-900 hover:bg-blue-800 p-2 pl-3 rounded-md text-[12px] flex items-center">
            Download CV
            <img src={download} alt="Download" className="w-5 h-5 ml-2" />
          </button>
        </div>
      </motion.div>
      <motion.div
        className="my-image animate__animated animate__bounceInRight max-w-[330px] md:max-w-[600px] max-h-[700px] md:max-h-[750px] overflow-hidden"
        initial={{ opacity: 1, y: 100 }}
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
