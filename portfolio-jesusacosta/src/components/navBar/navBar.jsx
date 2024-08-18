import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NavBar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Experience", label: "Experience" },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <div>
      {/* Mobile Menu */}
      <div className="md:hidden fixed w-full z-50">
        <div className="bg-black bg-opacity-70 backdrop-blur-sm px-5 py-3 flex justify-between items-center">
          <div></div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Animated Navbar */}
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          variants={variants}
          transition={{
            ease: "easeInOut",
          }}
          className="bg-black bg-opacity-70 backdrop-blur-sm py-2 flex flex-col items-end fixed right-0 w-full md:hidden"
        >
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="block px-4 py-2 text-white hover:underline hover:scale-125">
                {link.label}
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Desktop Menu */}
      <div
        className={`hidden md:block fixed w-full transition-transform duration-300 z-50 ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="z-50 w-full h-[90px] px-10 py-5 font-medium flex justify-between items-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div></div>
          <div className="flex items-center space-x-10 text-lg text-white">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="cursor-pointer hover:underline hover:scale-125"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
