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
import { FaAngular } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import Link from "next/link";

const sections = [
  {
    title: "Frontend",
    technologies: [
      { icon: <FaHtml5 size={35} className="text-orange-700" />, name: "HTML" },
      { icon: <FaCss3Alt size={35} className="text-blue-700" />, name: "CSS" },
      { icon: <FaReact size={35} className="text-blue-500" />, name: "React" },
      {
        icon: <IoLogoJavascript size={35} className="text-yellow-500" />,
        name: "JavaScript",
      },
      {
        icon: <SiTypescript size={35} className="text-blue-400" />,
        name: "TypeScript",
      },
      {
        icon: <SiNextdotjs size={35} className="text-white" />,
        name: "Next.js",
      },
      {
        icon: <RiTailwindCssFill size={35} className="text-cyan-400" />,
        name: "TailwindCSS",
      },
      {
        icon: <SiRedux size={35} className="text-purple-900" />,
        name: "Redux",
      },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { icon: <FaNodeJs size={35} className="text-green-800" />, name: "Node" },
      { icon: <SiExpress size={35} className="text-white" />, name: "Express" },
      {
        icon: <BiLogoPostgresql size={35} className="text-blue-400" />,
        name: "PostgreSQL",
      },
      {
        icon: <SiSequelize size={35} className="text-blue-400" />,
        name: "Sequelize",
      },
    ],
  },
  {
    title: "Learning",
    technologies: [
      {
        icon: <FaAngular size={35} className="text-red-600" />,
        name: "Angular",
      },
      {
        icon: <SiMongodb size={35} className="text-green-800" />,
        name: "MongoDB",
      },
      {
        icon: <FaBootstrap size={35} className="text-purple-600" />,
        name: "Bootstrap",
      },
      {
        icon: <FaPython size={35} className="text-blue-400" />,
        name: "Python",
      },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { icon: <FaGitAlt size={35} className="text-orange-700" />, name: "Git" },
      { icon: <FaGithub size={35} className="text-white" />, name: "GitHub" },
      {
        icon: <SiVisualstudiocode size={35} className="text-blue-500" />,
        name: "VSCode",
      },
      { icon: <FaNpm size={35} className="text-orange-900" />, name: "NPM" },
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <div>
        <h2 className="text-[33px] text-center font-black mt-20">
          <span className=" text-blue-900">#</span>About Me
          <span className="h-[1px] md:ml-6 w-full md:w-[450px] inline-block bg-light relative top-7 group-hover:w-full transition-[width] ease duration-300 bg-white">
            &nbsp;
          </span>
        </h2>
        <p className=" sm:text-xl text-base font-semibold sm:p-24 p-10 text-gray-300">
          I am 23 years old, living in San Nicolas de los Arroyos, Buenos Aires
          province. I've been passionate about technology and video games since
          I was very young, which led me to enter the world of programming.
          <br />
          Besides my technical skills, I am aware of the importance of soft
          skills in any work environment. I was chosen as the best classmate in
          both primary and secondary school and recognized by the Rotary Club.
          Therefore, if you need a professional who can easily integrate into
          your team, provide solutions, and listen, don't hesitate to{" "}
          <Link href={"#Contact"}>
            <span className=" text-blue-600 underline">contact me!</span>
          </Link>
        </p>
      </div>
      <div>
        <h2 className="text-xl text-center mb-2 font-black">my tech stack:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="text-center bg-gradient-to-t from-slate-800 to-black p-4 min-h-[300px]"
            >
              <h4 className="text-2xl font-semibold mb-4">{section.title}</h4>
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex flex-col items-center">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
