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

  return (
    <div className={`fixed w-full transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="z-40 w-full md:h-[90px] px-10 py-5 font-medium flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-sm">
        <div>
         
        </div>
        <div className="flex items-center space-x-10 text-lg text-white">
          <Link href="#Home" className="cursor-pointer hover:underline hover:scale-125">
            Home
          </Link>
          <Link href="#About" className="cursor-pointer hover:underline hover:scale-125">
          About
          </Link>
          <Link href="#Experience" className="cursor-pointer hover:underline hover:scale-125">
            Experience
          </Link>
          <Link href="#Proyects" className="cursor-pointer hover:underline hover:scale-125">
            Projects
          </Link>
          <Link href="#Contact" className="cursor-pointer hover:underline hover:scale-125">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
