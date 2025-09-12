import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Meladev45",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chiemela-emmanuel-b7a67728a/",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    url: "https://x.com/Mela_dev45",
    icon: <FaTwitter />,
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/profile.php?id=100095018356786",
    icon: <FaFacebook />,
  },
];

const getYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-[#1a0033] dark:via-darkTheme dark:to-[#2a004a] py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <a href="#top" className="mx-auto group">
          <h1 className="text-4xl font-bold dark:text-lightText text-purple-900 group-hover:text-purple-700 transition-colors duration-300 drop-shadow-lg">
            Chiemela
          </h1>
        </a>
        <div className="flex items-center gap-3 bg-purple-50 dark:bg-purple-900 px-4 py-2 rounded-full shadow">
          <Image src={assets.mail_icon} alt="Mail" className="w-6" />
          <span className="font-medium text-purple-700 dark:text-purple-200">
            chiemelae001@gmail.com
          </span>
        </div>
        <ul className="flex items-center gap-6 mt-2">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-purple-300 dark:from-purple-900 dark:to-purple-700 shadow-lg transition-all duration-300 hover:scale-110 hover:from-purple-700 hover:to-purple-500 dark:hover:from-purple-800 dark:hover:to-purple-600"
                aria-label={link.name}
              >
                <span className="text-white text-2xl group-hover:text-yellow-300 transition-colors duration-300">
                  {link.icon}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-purple-300 dark:border-purple-700 mt-10 pt-6 text-center">
        <p className="text-purple-700 dark:text-lightText font-main2">
          &copy; {getYear()} Chiemela Emmanuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
