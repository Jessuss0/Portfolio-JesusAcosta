import { Inter } from "next/font/google";
import Home from "@/components/home/home";
import NavBar from "@/components/navBar/navBar";
import About from "@/components/about/About";
import Proyects from "@/components/proyects/proyects";
import Experience from "@/components/experience/experience";
import Contact from "@/components/contact/contact";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function app() {
  return (
    <div>
      <div className="relative w-full h-screen bg-cover bg-center flex flex-col bg-custom-bg">
        <NavBar />
        <section id="Home">
          <Home />
        </section>
      </div>
      <section id="About">
        <About />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Projects">
        <Proyects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Link href={"#Home"} className="fixed bottom-4 right-4 bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full shadow-lg">
        Botón Fijo
      </Link>
    </div>
  );
}
