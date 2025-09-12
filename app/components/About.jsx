import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = ({ darkMode, setDarkMode }) => {
  return (
    <div
      id="about"
      className="w-full px-[8%] py-16 scroll-mt-20 bg-gradient-to-br from-white via-purple-50 to-purple-100 dark:from-[#1a0033] dark:via-darkTheme dark:to-[#2a004a] transition-all duration-500"
    >
      <h4 className="text-center mb-2 text-lg font-main2 dark:text-white text-purple-700 font-semibold tracking-wide uppercase">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-main2 dark:text-white text-purple-900 font-extrabold mb-8 drop-shadow-lg tracking-tight">
        About Me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-12 md:gap-20 md:my-20">
        {/* Interactive Image Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-80 h-80 rounded-full group relative overflow-hidden shadow-2xl bg-gradient-to-tr from-purple-200 via-purple-100 to-white dark:from-[#2a004a] dark:via-[#1a0033] dark:to-darkTheme flex items-center justify-center mx-auto mb-8 lg:mb-0"
        >
          <Image
            src={assets.about_img}
            alt="user-image"
            className="w-72 h-72 rounded-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:brightness-95"
          />
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-400 dark:border-purple-700 animate-spin-slow pointer-events-none"></div>
          {/* Floating badge */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg text-base font-semibold animate-bounce">
            Frontend Expert
          </span>
        </motion.div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-10 md:max-w-2xl font-main2 text-lg text-gray-700 dark:text-grayText leading-relaxed text-center lg:text-left bg-white/80 dark:bg-darkTheme/80 rounded-xl p-4 shadow transition-all duration-300"
          >
            I am a Top-tier Frontend Developer bringing a depth of expertise to
            every project. I’ve collaborated with prestigious organizations,
            delivering beautiful, high-performance web experiences that drive
            results.
          </motion.p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
                transition={{ duration: 0.7, ease: "easeOut" }}
                key={index}
                className="border border-purple-200 dark:border-purple-700 rounded-xl p-6 cursor-pointer bg-white dark:bg-darkTheme shadow-lg hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex justify-center mb-2">
                  {darkMode ? (
                    <Image
                      src={iconDark}
                      alt={title}
                      className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                    />
                  ) : (
                    <Image
                      src={icon}
                      alt={title}
                      className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                    />
                  )}
                </div>
                <h3 className="my-4 font-semibold text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300 text-center">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-grayText text-sm group-hover:text-black dark:group-hover:text-grayText transition-colors duration-300 text-center">
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>
          <h4 className="my-8 text-purple-700 dark:text-purple-300 font-main2 text-xl font-semibold text-center">
            Tools I Use
          </h4>

          {/* Tools */}
          <ul className="flex items-center justify-center gap-4 sm:gap-7 flex-wrap">
            {toolsData.map((tool, index) => (
              <motion.li
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
                transition={{ duration: 0.7, ease: "easeOut" }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-purple-200 dark:border-purple-700 rounded-lg cursor-pointer bg-white dark:bg-darkTheme shadow hover:-translate-y-2 hover:scale-110 hover:border-purple-700 dark:hover:border-purple-400 hover:bg-purple-100 dark:hover:bg-purple-950 transition-all duration-500"
              >
                <Image src={tool} alt="tool" className="w-6 sm:w-8" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
