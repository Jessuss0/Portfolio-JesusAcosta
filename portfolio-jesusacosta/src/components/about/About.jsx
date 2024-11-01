/* eslint-disable react/no-unescaped-entities */
import {
  FaHtml5,
  FaCss3Alt,
  IoLogoJavascript,
  FaReact,
  RiTailwindCssFill,
  SiNextdotjs,
  FaNodeJs,
  SiExpress,
  BiLogoPostgresql,
  SiRedux,
  SiTypescript,
  FaGitAlt,
  FaGithub,
  SiVisualstudiocode,
  FaNpm,
  SiSequelize,
  FaAngular,
  SiMongodb,
  FaBootstrap,
  FaPython,
  SiCanva,
  FaDocker,
  FaJava,
  SiNestjs,
  DiScrum,
  TbBrandFramerMotion,
  FaTrello,
} from "@/components/about/icons";
import Link from "next/link";
import sticker from "@/icons/imagenAbout.gif";
import Image from "next/image";
import { motion } from "framer-motion";

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
      {
        icon: <FaBootstrap size={35} className="text-purple-600" />,
        name: "Bootstrap",
      },
      {
        icon: <TbBrandFramerMotion size={35} className="text-purple-600" />,
        name: "Framer Motion",
      },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { icon: <FaNodeJs size={35} className="text-green-800" />, name: "Node" },
      { icon: <SiExpress size={35} className="text-white" />, name: "Express" },
      {
        icon: <SiNestjs size={35} className="text-red-800" />,
        name: "NestJs",
      },
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
        icon: <FaPython size={35} className="text-blue-400" />,
        name: "Python",
      },
      {
        icon: <FaJava size={35} className="text-orange-500" />,
        name: "Java",
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
      {
        icon: <SiCanva size={35} className=" text-cyan-500" />,
        name: "Canva",
      },
      {
        icon: <FaDocker size={35} className=" text-blue-500" />,
        name: "Docker",
      },
      {
        icon: <FaTrello size={35} className=" text-cyan-600" />,
        name: "Trello",
      },
      {
        icon: <DiScrum size={35} className=" text-blue-500" />,
        name: "Scrum",
      },
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-[33px] text-center font-black mt-20">
            <span className="text-blue-900">#</span>About Me
            <span className="h-[1px] md:ml-6 w-full md:w-[750px] inline-block bg-light relative top-7 group-hover:w-full transition-[width] ease duration-300 bg-white">
              &nbsp;
            </span>
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <p className="md:text-2xl text-base font-bold md:p-24 p-10 text-gray-300 md:w-[50%]">
            I am 23 years old, living in San Nicolas de los Arroyos, Buenos
            Aires province. I've been passionate about technology and video
            games since I was very young, which led me to enter the world of
            programming.
            <br />
            <br />
            Besides my technical skills, I am aware of the importance of soft
            skills in any work environment. I was chosen as the best classmate
            in both primary and secondary school and recognized by the Rotary
            Club. Therefore, if you need a professional who can easily integrate
            into your team, provide solutions, and listen, don't hesitate to{" "}
            <Link href={"#Contact"}>
              <span className="md:text-2xl text-xl text-blue-600 underline">
                contact me!
              </span>
            </Link>
          </p>
          <div className="md:w-1/3">
            <Image
              src={sticker}
              alt="Thats me :D"
              width={300}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="rounded-md"
              unoptimized
            />
          </div>
        </div>
      </div>
      <div>
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
/* eslint-enable react/no-unescaped-entities */
