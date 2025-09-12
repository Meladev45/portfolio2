import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const typingText = "Frontend web developer very Exceptional.";
const typingSpeed = 80;

const Header = () => {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= typingText.length) {
        setTyped(typingText.slice(0, i));
        i++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen md:h-[680px] flex flex-col items-center justify-center gap-4 ">
      {/* Profile Image with Verify Badge */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex items-center justify-center group mt-14 md:mt-35 "
      >
        <Image
          src={assets.user}
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover border-4 border-purple-400 shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl"
        />
        {/* Verify Badge with React Icon */}
        <span className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-lg flex items-center animate-bounce">
          <FaCheckCircle className="text-white text-2xl" title="Verified" />
        </span>
        {/* Animated Ring */}
        <span className="absolute inset-0 rounded-full border-4 border-purple-300 animate-spin-slow pointer-events-none"></span>
      </motion.div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-main2 justify-center">
        Hi I&apos;m Chiemela Emmanuel
        <Image src={assets.hand_icon} alt="" className="w-6 animate-wave" />
      </h3>
      {/* Typing Effect */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-main2 font-bold min-h-[2.5em] text-purple-900 dark:text-white transition-all duration-300"
      >
        <span className="border-r-2 border-purple-500 animate-pulse text-white dark:text-lightText">
          {typed}
        </span>
      </motion.h1>
      <p className="max-w-2xl mx-auto font-main2 text-gray-700 dark:text-lightText">
        I&apos;m a frontend developer passionate about creating clean,
        responsive, and user-friendly web experiences.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 md:pb-12">
        <motion.a
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
          transition={{ duration: 0.7, ease: "easeOut" }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white flex items-center gap-2 shadow-lg hover:scale-105 hover:from-purple-900 hover:to-purple-700 transition-all duration-300"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
          transition={{ duration: 1, ease: "easeOut" }}
          href="/"
         
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:bg-darkTheme text-purple-700 dark:text-purple-200 shadow hover:scale-105 hover:bg-purple-50 dark:hover:bg-purple-900 transition-all duration-300"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
