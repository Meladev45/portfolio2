import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {motion } from 'framer-motion'

// Example project data (replace with your actual data)
const projects = [
  {
    title: "Fitness Landing page",
    image: { assets }.assets.gymbro,
    live: "https://gym-bros2.netlify.app/",
    github: "https://github.com/Meladev45/Gym-website_project",
  },
  {
    title: "TaskTide Todolist",
    image: { assets }.assets.todo,
    live: "https://task2-web-app.netlify.app/",
    github: "https://github.com/Meladev45/Todo_list",
  },
  {
    title: "Mental Wellness App",
    image: {assets}.assets.mental,
    live: "https://mind-leap.netlify.app/",
    github: "https://github.com/Meladev45/mental-wellness",
  },
  {
    title: "Real Time Currency Converter",
    image: {assets}.assets.coverter,
    live: "https://currencyconverter-web-app.netlify.app/",
    github: "https://github.com/Meladev45/Converter_App",
  },
  {
    title: "Digital Asset Tracker",
    image: {assets}.assets.crypto,
    live: "'https://crypto-base.netlify.app/",
    github: "https://github.com/Meladev45/Cryptto-Base",
  },
  {
    title: "Gym Landing page",
    image: {assets}.assets.gym,
    live: "https://coders-gym2.netlify.app/",
    github: "https://github.com/Meladev45/Project",
  },
];

const Portfolio = () => (
  <section
    id="portfolio"
    className="w-full px-[8%] py-16 bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-[#1a0033] dark:via-darkTheme dark:to-[#2a004a]"
  >
    <h2 className="text-center text-4xl font-main2 mb-10 font-bold text-purple-900 dark:text-purple-200 drop-shadow-lg">
      My Portfolio
    </h2>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="group bg-white dark:bg-[#1a0033] rounded-2xl shadow-xl overflow-hidden flex flex-col border border-purple-200 dark:border-purple-900 hover:shadow-2xl transition-all duration-500 relative"
        >
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-center group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex-1 flex flex-col p-6">
            <h3 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300 drop-shadow">
              {project.title}
            </h3>
            <div className="mt-auto flex gap-4">
              <motion.a
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, y: 2, x: -5 }}
                viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
                transition={{ duration: 0.7, ease: "easeOut" }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-lg font-bold shadow hover:from-purple-800 hover:to-purple-600 transition-all duration-300 text-center"
              >
                Live Preview
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0, }}
                viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
                transition={{ duration: 1, ease: "easeOut" }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 border-2 border-purple-600 text-purple-700 dark:text-purple-300 rounded-lg font-bold shadow hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
              >
                GitHub
              </motion.a>
            </div>
          </div>
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow group-hover:bg-purple-800 transition duration-300">
            {`#${idx + 1}`}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
