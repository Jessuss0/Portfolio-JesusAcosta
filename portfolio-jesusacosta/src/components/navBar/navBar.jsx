import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const home = "<JesusAcosta/>"

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
      <div className="md:hidden fixed w-full">
        <div className="bg-black bg-opacity-70 backdrop-blur-sm px-5 py-3 flex justify-between items-center">
          <div></div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 cursor-pointer"
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
        {isMenuOpen && (
          <div className="bg-black bg-opacity-70 backdrop-blur-sm py-2 flex flex-col items-end">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="block px-4 py-2 text-white hover:underline">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div
        className={`hidden md:block fixed w-full transition-transform duration-300 ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="z-40 w-full h-[90px] px-10 py-5 font-medium flex justify-between items-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div>
          </div>
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
