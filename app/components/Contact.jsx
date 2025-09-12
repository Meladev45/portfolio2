import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[8%] py-14 scroll-mt-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#1a0033] dark:via-darkTheme dark:to-[#2a004a]"
    >
      <h4 className="text-center mb-2 text-lg font-main2 dark:text-lightText text-purple-700 font-semibold">
        Connect With Me
      </h4>
      <h2 className="text-center text-5xl font-main2 dark:text-lightText text-purple-900 font-bold mb-2">
        Get In Touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-main2 text-black dark:text-lightText  ">
        I’d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form 
      action="https://formsubmit.co/chiemelae001@gmail.com" method="POST"
       className="max-w-xl mx-auto bg-gradient-to-br from-white via-purple-50 to-purple-100 dark:from-[#2a004a] dark:via-[#1a0033] dark:to-darkTheme rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
            transition={{ duration: 0.7, ease: "easeOut" }}
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-darkTheme text-purple-900 dark:text-grayText focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
          />
          <motion.input
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
            transition={{ duration: 0.8, ease: "easeOut" }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-darkTheme text-purple-900 dark:text-grayText focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300"
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
          transition={{ duration: 0.9, ease: "easeOut" }}
          rows={6}
          name="Message"
          placeholder="Your Message"
          required
          className="p-4 rounded-lg border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-darkTheme text-purple-900 dark:text-grayText focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300 resize-none"
        ></motion.textarea>

        <motion.button
        initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
          transition={{ duration: 1, ease: "easeOut" }}
          type="submit"
          className="py-3 px-8 flex items-center gap-2 bg-gradient-to-r from-purple-700 via-pink-500 to-purple-500 text-white rounded-full mx-auto shadow-lg 
            hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-700 hover:to-purple-900 
            transition-all duration-500 font-semibold text-lg"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
