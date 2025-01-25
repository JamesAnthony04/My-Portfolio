import 'animate.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Me from "../assets/me.png";
import download from "../assets/download-icon.svg";
import Socials from "./socials-account";
import backgroundImage from "../assets/background.png";
import { Analytics } from "@vercel/analytics/react"


const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [0, 100]);

  return (
    <section className="hero-container">
      <Analytics/>
      <div className="hero flex flex-col md:flex-row md:justify-center items-center text-center md:text-justify md:h-screen" style={{ zIndex: 2 }}>
        <motion.div
          className="m-2 p-2 animate__animated animate__bounceInLeft"
          style={{
            opacity,
            y: yTransform,
          }}
        >
          Hello, I&apos;m
          <br />
          <span className="font-extrabold text-2xl md:text-7xl text-center">
            James Anthony.
          </span>
          <div className="typewriter max-w-[14rem] md:max-w-[13.5rem]">
            <h1>Front-end Developer</h1>
          </div>
          <p className='p-1'>
            An aspiring Front-end Developer from Dasmarinas City, Cavite,
            Philippines.
          </p>
 
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-2">
            <Socials />
            {/**<a href="https://drive.google.com/uc?export=download&id=1Eb28Ny0gEdAtTTMMEdVvzQusUMkFDePS" download="James_Guevarra_FrontEndDeveloper_Resume.pdf">
            <button className="bg-blue-900 hover:bg-blue-800 p-2 pl-3 rounded-md text-[12px] flex items-center">
              Download 
              <img src={download} alt="Download" className="w-5 h-5 ml-2" />
            </button>
            </a>**/}
          </div>
          
        </motion.div>

        <motion.div
          className="my-image animate__animated animate__bounceInRight max-w-[250px] md:max-w-[600px] max-h-[700px] md:max-h-[700px] overflow-hidden object-contain"
          initial={{ opacity: 1, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            opacity,
            y: yTransform,
          }}
        >
          <img src={Me} alt="My-Image" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
