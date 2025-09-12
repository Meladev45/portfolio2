import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Chiemela Emmanuel  | Frontend Developer Portfolio",
  description: "Portfolio of Chiemela Emmanuel, a frontend developer specializing in Next.js, React, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden bg-white dark:bg-darkTheme text-black dark:text-lightText`}
      >
        {children}
      </body>
    </html>
  );
}
