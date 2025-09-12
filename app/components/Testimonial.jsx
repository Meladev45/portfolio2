import { assets } from "@/assets/assets";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager, TechCorp",
    text: "Working with Chiemela was a fantastic experience! The website exceeded our expectations and was delivered ahead of schedule.",
    image: client4,
  },
  {
    name: "Michael Smith",
    role: "CEO, InnovateX",
    text: "Professional, creative, and highly skilled. Chiemela brought our vision to life and improved our user engagement dramatically.",
    image: client2,
  },
  {
    name: "Sarah Lee",
    role: "Founder, StartUpHub",
    text: "The attention to detail and commitment to quality is unmatched. I highly recommend Chiemela for any web project.",
    image: client3,
  },
  {
    name: "David Kim",
    role: "CTO, Webify",
    text: "Chiemela is a true expert in frontend development. Our site is now faster, more beautiful, and easier to use.",
    image: client1,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="w-full px-[8%] py-16 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#1a0033] dark:via-darkTheme dark:to-[#2a004a]">
      <h2 className="text-center text-4xl font-main2 mb-10 font-bold text-purple-900 dark:text-purple-200 drop-shadow-lg">
        What Clients Say
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // once: false triggers every time you scroll into view
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-xl mx-auto relative"
      >
        <div className="bg-white dark:bg-[#1a0033] rounded-2xl shadow-2xl p-8 flex flex-col items-center transition-all duration-500">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-300 dark:border-purple-700 mb-4 shadow-lg flex items-center justify-center">
            <Image
              src={testimonials[current].image}
              alt="client photo"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-lg italic text-gray-700 dark:text-gray-200 text-center mb-6 transition-colors duration-300">
            "{testimonials[current].text}"
          </p>
          <div className="text-center">
            <span className="font-bold text-purple-800 dark:text-purple-200">
              {testimonials[current].name}
            </span>
            <br />
            <span className="text-sm text-purple-500 dark:text-purple-400">
              {testimonials[current].role}
            </span>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-200 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-full p-3 shadow hover:bg-purple-400 hover:text-white transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-200 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-full p-3 shadow hover:bg-purple-400 hover:text-white transition-all duration-300"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-purple-600 dark:bg-purple-400"
                  : "bg-purple-200 dark:bg-purple-800"
              }`}
              onClick={() => setCurrent(idx)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
