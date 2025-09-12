"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScroll, setisScroll] = useState(false);
  const sideMenuRef = useRef();

  // Toggle dark mode by adding/removing 'dark' class on html and persist in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (typeof window !== "undefined") {
        const html = document.documentElement;
        if (newMode) {
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }
      return newMode;
    });
  };

  const openmenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closemenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
    // Set initial dark mode from localStorage or system preference
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (theme === "dark" || (!theme && prefersDark)) {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setDarkMode(false);
      }
    }
  }, []);

  console.log(darkMode);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]"></div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white dark:bg-darkTheme bg-opacity-80 backdrop-blur-lg shadow-lg dark:bg-opacity-90 transition-all duration-500"
            : "bg-gradient-to-r from-purple-100 via-white to-purple-200 dark:from-[#1a0033] dark:via-darkTheme dark:to-[#2a004a] shadow-md"
        }`}
      >
        <a href="#top" className="group">
          <h1 className="text-4xl font-extrabold text-purple-700 dark:text-lightText tracking-tight group-hover:text-pink-500 transition-colors duration-300 drop-shadow-lg">
            Chiemela
          </h1>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white dark:bg-darkTheme shadow-sm bg-opacity-60 dark:bg-opacity-80"
          } `}
        >
          {[
            { href: "#top", label: "Home" },
            { href: "#about", label: "About me" },
            { href: "#portfolio", label: "My Work" },
            { href: "#faqs", label: "Faq" },
            { href: "#contact", label: "Contact me" },
          ].map((item) => (
            <li key={item.label} className="font-main2">
              <a
                href={item.href}
                className="relative px-2 py-1 transition-all duration-300 hover:text-pink-500 dark:hover:text-yellow-300 hover:scale-110"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="transition-transform duration-300 hover:rotate-12"
          >
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme toggle"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-gray-300 rounded-full ml-4 font-main2 dark:text-lightText bg-gradient-to-r from-purple-700 to-pink-500 text-white shadow-lg hover:scale-105 hover:from-pink-500 hover:to-purple-700 transition-all duration-300"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button
            className="block md:hidden ml-3 transition-transform duration-300 hover:scale-110"
            onClick={openmenu}
          >
            <Image
              src={darkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* ---- mobile menu ------ */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-[#1a0033] dark:via-darkTheme dark:to-[#2a004a] shadow-2xl transition duration-500"
        >
          <button
            className="absolute right-6 top-6 transition-transform duration-300 hover:scale-125"
            onClick={closemenu}
            aria-label="Close menu"
          >
            <Image
              src={darkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </button>

          {[
            { href: "#top", label: "Home" },
            { href: "#about", label: "About me" },
            { href: "#portfolio", label: "My Work" },
            { href: "#faqs", label: "Faq" },
            { href: "#contact", label: "Contact me" },
          ].map((item) => (
            <li key={item.label} className="font-main2 dark:text-lightText">
              <a
                href={item.href}
                className="block py-2 px-3 rounded-lg transition-all duration-300 hover:bg-purple-200 dark:hover:bg-purple-900 hover:text-pink-500 dark:hover:text-yellow-300 hover:scale-105"
                onClick={closemenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
