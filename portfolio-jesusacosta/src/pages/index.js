import { Inter } from "next/font/google";
import Home from "@/components/home/home";
import NavBar from "@/components/navBar/navBar";
import About from "@/components/about/About";
import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";
import Contact from "@/components/contact/contact";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function app() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full h-screen bg-cover bg-center flex flex-col bg-custom-bg">
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
        >
          <NavBar />
        </motion.div>

        <section id="Home">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Home />
          </motion.div>
        </section>
      </div>
      <section id="About">
        <About />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
