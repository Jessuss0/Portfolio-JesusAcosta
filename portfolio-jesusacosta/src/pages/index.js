import { Inter } from "next/font/google";
import NavBar from "@/components/navBar/navBar";
import About from "@/components/about/About";
import Proyects from "@/components/proyects/proyects";
import Experience from "@/components/experience/experience";
import Contact from "@/components/contact/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div>
          <h2>Hi i'am Jesus Acosta Full stack web Developer!</h2>
        </div>
        <About />
        <Experience />
        <Proyects />
        <Contact />
      </main>
    </div>
  );
}
