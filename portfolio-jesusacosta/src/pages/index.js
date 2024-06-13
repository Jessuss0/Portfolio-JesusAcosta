import { Inter } from "next/font/google";
import Home from "@/components/home/home";
import NavBar from "@/components/navBar/navBar";
import About from "@/components/about/About";
import Proyects from "@/components/proyects/proyects";
import Experience from "@/components/experience/experience";
import Contact from "@/components/contact/contact";

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
    </div>
  );
}
