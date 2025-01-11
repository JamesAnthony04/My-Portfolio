import 'animate.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import instagram from "../assets/instagram-icon.svg"
import facebook from "../assets/facebook-icon.svg"
import github from "../assets/github-icon.svg"
import linked from "../assets/linkedin-icon.svg"
import Me from "../assets/me.png";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [0, 100]);

  return (
    <section className="hero flex flex-col md:flex-row justify-center items-center min-h-[100vh] md:gap-30 p-5 text-center md:text-justify">
      <motion.div className="m-2 p-2 animate__animated animate__bounceInLeft"
      style={{
        opacity,
        transform: yTransform,
      }}>
        Hello, I&apos;m
        <br />
        <span className="font-extrabold text-2xl md:text-7xl text-center">
          James Anthony.
        </span>
        <div className="typewriter max-w-[13.5rem]">
          <h1>Front-end Developer</h1>
        </div>
        <p>An aspiring Front-end Developer from Dasmarinas City, Cavite, Philippines.</p>
        <br />
        <div className='flex justify-center items-center'>
          <img className="w-10 h-10" src={facebook} alt="Facebook"/>
          <img className="w-10 h-10" src={instagram} alt="Instagram"/>
          <img className="w-10 h-9" src={github} alt="GitHub"/>
          <img className="w-10 h-10" src={linked} alt="LinkedIn"/>
        </div>
      </motion.div>
      <motion.div
        className="my-image animate__animated animate__bounceInRight max-w-[400px] md:max-w-[600px] max-h-[500px] md:max-h-[800px]"
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          opacity,
          transform: yTransform,
        }}>
        <img src={Me} alt="My-Image" className="w-full h-full" />
      </motion.div>
    </section>
  );
}
