'use client'

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";



export default function Home() {
   const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className=" min-h-screen overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <About darkMode={darkMode} setDarkMode={setDarkMode} />
      <Portfolio />
      <Contact />
      <Faq />
      <Testimonial />
      <Footer />
    </div>
  );
}
