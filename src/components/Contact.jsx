import React from "react";
import { useState } from "react";
import HR from "./custom-hr";
import Send from "../assets/send-icon.svg";
import Contactlottie from "../assets/contact.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import Socials from "./socials-account";
import emailjs from '@emailjs/browser';
import MessageModal from "./MessageModal";
import ErrorMessageModal from "./ErrorMessageModal";
import { Analytics } from "@vercel/analytics/react";
const Contact = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    to_name: "James",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send('service_25hat9k', 'template_irlyagd', formData, '_REgnnFFoxWASRIRD');
      setResult(response.text);
      setIsModalVisible(true); 
      setFormData({ from_name: '', from_email: '', message: '' }); 
    } catch (error) {
      console.error('Error:', error);
      setResult('error'); 
      setIsModalVisible(true); 
    } finally {
      setLoading(false);
    }
  };
  const closeModal = () => {
    setIsModalVisible(false);
  }

  

  return (
    <section className=" bg-gray-900 text-gray-100" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="my-3 flex gap-1">
                <h1 className="text-md font-bold">Contact</h1>
                <HR />
              </div>
              <h2 className="text-2xl font-bold">
                Get in <span className="text-blue-700">Touch</span>
              </h2>
              <Analytics />
              <p className="text-sm text-gray-400">
                I&apos;d love to hear from you! Whether it&apos;s a question, a
                project idea, or just to say hello, feel free to drop me a
                message. I&apos;ll get back to you as soon as I can!
              </p>
            </div>

            {isModalVisible && (
              <div>
                {result === "OK" ? (
                  <MessageModal onClose={closeModal} />
                ) : (
                  <ErrorMessageModal onClose={closeModal} />
                )}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-transparent border border-gray-700 p-6 rounded-lg shadow-xl order-2 md:order-1 lg:order-1 overflow-hidden object-fill">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="eg. James Anthony"
                      className="w-full p-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      placeholder="eg. james.anthony@gmail.com"
                      className="w-full p-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message here"
                      rows="4"
                      className="w-full p-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-900 hover:bg-blue-800 p-2 w-full rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex justify-center items-center gap-2">
                      {loading ? "Sending..." : "Send Message"}
                      <img src={Send} alt="Send" className="h-7 w-7" />
                    </span>
                  </button>
                </form>
              </div>

              <div className="bg-transparent border border-gray-700 p-6 rounded-lg shadow-xl order-1 md:order-1 lg:order-2">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="flex justify-center items-center">
                  <DotLottieReact
                    src={Contactlottie}
                    className="contact-lottie h-56 w-56 m-4"
                    loop
                    autoplay
                  />
                </div>
                <div className="p-2 object-contain">
                  <ul className="space-y-3">
                    <li className="flex items-center text-xs md:text-sm gap-2 group">
                      <span className="font-bold text-blue-500">Contact:</span>
                      <p className="group-hover:underline">+639949827718</p>
                    </li>
                    <li className="flex items-center text-xs md:text-sm gap-2 group">
                      <span className="font-bold text-blue-500">Email:</span>
                      <p className="group-hover:underline">
                        guevarrajamesanthony@gmail.com
                      </p>
                    </li>
                    <li className="flex items-center text-xs md:text-sm gap-2 group">
                      <span className="font-bold text-blue-500">Address:</span>
                      <p className="group-hover:underline">
                        Dasmarinas City, Cavite, Philippines
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
