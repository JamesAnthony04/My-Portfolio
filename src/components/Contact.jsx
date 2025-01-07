import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Send from "../assets/send-icon.svg";
import Contactlottie from "../assets/contact.lottie";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section className="bg-gray-900 text-white min-h-[100vh] p-5">
      <motion.div
        className="contact-container m-10 flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-2"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div
          className="border border-gray-700 bg-gray-800 text-gray-300 flex flex-col justify-center items-center gap-2 md:gap-5
        max-w-xs md:max-w-4xl p-4 sm:p-6 md:p-8 shadow rounded-md"
        >
          <motion.div
            className=""
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="mb-4 text-md font-bold">Contact</h1>
            <hr className="horizontal-line" />
            <h1 className="text-gray-200 font-bold text-2xl p-2">
              Get in Touch
            </h1>
            <p className="text-sm p-2">
              I&apos;d love to hear from you! Whether it&apos;s a question, a
              project idea, or just to say hello, feel free to drop me a
              message. I&apos;ll get back to you as soon as I can!
            </p>
          </motion.div>
          <form className="contact gap-2 m-2">
            <motion.div
              className="flex flex-col justify-center gap-2"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <label htmlFor="name" className="">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="eg. James Anthony"
                className="p-2 w-72 md:w-96  rounded-md text-gray-800 bg-gray-700 text-sm"
              ></input>

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="eg. james.anthony@gmail.com"
                className="p-2 w-72 md:w-96 rounded-md text-gray-800 bg-gray-700 text-sm"
              ></input>

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                className="p-2 w-72 md:w-96  h-40 rounded-md text-gray-800 bg-gray-700 text-sm"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 p-2 w-auto rounded-md"
              >
                <span className="flex justify-center items-center gap-2">
                  Send Message
                  <img src={Send} alt="Send" className="h-7 w-7" />
                </span>
              </button>
            </motion.div>
          </form>
        </div>
        <DotLottieReact
          src={Contactlottie}
          className="h-70 md:h-2/4 w-96 md:w-3/4"
          loop
          autoplay
        />
      </motion.div>
    </section>
  );
}
