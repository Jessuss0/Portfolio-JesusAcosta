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
      <NavBar />
      <section id="Home">
        <Home />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Experience">
        <Experience />
      </section>

      <section id="Proyects">
        <Proyects />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
