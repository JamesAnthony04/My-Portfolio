import 'animate.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Blob from "/blob.svg";

export default function Hero() {
  // Track scroll position
  const { scrollYProgress } = useScroll();

  // Map scroll position to opacity and y position
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]); // Starts fading out after 10% of the scroll
  const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [0, 100]); // Moves down slightly as it fades

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.5], // Range of scroll
    ["#ffffff", "#111827"] // Start and end colors (white to red-500)
  );

  return (
    <motion.section
      className="hero bg-slate-100 flex flex-col md:flex-row justify-center items-center h-lvh md:gap-40 p-5 text-center md:text-justify"
      style={{
        opacity,
        transform: yTransform,
        backgroundColor, // Dynamically applied background color
      }}
    >
      <motion.div className="m-5 p-5 animate__animated animate__bounceInLeft">
        Hello, I&apos;m
        <br />
        <span className="font-extrabold text-2xl md:text-7xl text-center">
          James Anthony.
        </span>
        <div className="typewriter max-w-[13.5rem]">
          <h1>Front-end Developer</h1>
        </div>
        <p>An aspiring Front-end Developer from Dasmarinas City, Cavite, PH.</p>
      </motion.div>
      <motion.div
        className="animate__animated animate__bounceInRight"
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={Blob} alt="blob" className="w-96 h-96" />
      </motion.div>
    </motion.section>
  );
}
