import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen">
      <div>
        <h2>About me</h2>
        <p>
          I am 23 years old, living in San Nicolas de los Arroyos, Buenos Aires
          province. I've been passionate about technology and video games since
          I was very young, which led me to enter the world of programming.
          Besides my technical skills, I am aware of the importance of soft
          skills in any work environment. I was chosen as the best classmate in
          both primary and secondary school and recognized by the Rotary Club.
          Therefore, if you need a professional who can easily integrate into
          your team, provide solutions, and listen, don't hesitate to contact
          me!
        </p>
      </div>
      <div>
        <h2>technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      <div className="text-center bg-gradient-to-t from-slate-800 to-black p-4 min-h-[300px]">
        <h4 className="text-2xl font-semibold mb-4">Frontend</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <FaHtml5 size={30} className="text-orange-700" />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt size={30} className="text-blue-700" />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <IoLogoJavascript size={30} className="text-yellow-500" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact size={30} className="text-blue-500" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <RiTailwindCssFill size={30} className="text-cyan-400" />
            <span>TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs size={30} className="text-white" />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiRedux size={30} className="text-purple-900" />
            <span>Redux</span>
          </div>
        </div>
      </div>

      <div className="text-center bg-gradient-to-t from-slate-800 to-black p-4 min-h-[300px]">
        <h4 className="text-2xl font-semibold mb-4">Backend</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <FaNodeJs size={30} className="text-green-800" />
            <span>Node</span>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress size={30} className="text-white" />
            <span>Express</span>
          </div>
          <div className="flex flex-col items-center">
            <BiLogoPostgresql size={30} className="text-blue-400" />
            <span>PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSequelize size={30} className="text-blue-400" />
            <span>Sequelize</span>
          </div>
        </div>
      </div>

      <div className="text-center bg-gradient-to-t from-slate-800 to-black p-4 min-h-[300px]">
        <h4 className="text-2xl font-semibold mb-4">Learning</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <SiTypescript size={30} className="text-blue-400" />
            <span>TypeScript</span>
          </div>
        </div>
      </div>

      <div className="text-center bg-gradient-to-t from-slate-800 to-black p-4 min-h-[300px]">
        <h4 className="text-2xl font-semibold mb-4">Tools</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <FaGitAlt size={30} className="text-orange-700" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub size={30} className="text-white" />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <SiVisualstudiocode size={30} className="text-blue-500" />
            <span>VSCode</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNpm size={30} className="text-orange-900" />
            <span>NPM</span>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
  );
}
