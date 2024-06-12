import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // downscroll code
        setScrollDirection("down");
      } else {
        // upscroll code
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
    { href: "#Contact", label: "Contact" }
  ];

  return (
    <div className={`fixed w-full transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="z-40 w-full md:h-[90px] px-10 py-5 font-medium flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-sm">
        <div>
         
        </div>
        <div className="flex items-center space-x-10 text-lg text-white">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="cursor-pointer hover:underline hover:scale-125">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
