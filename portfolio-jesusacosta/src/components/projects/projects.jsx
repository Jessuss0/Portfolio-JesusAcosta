import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import projectsData from "./projectData";

export default function Projects() {
  return (
    <div className="min-h-full">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <h2 className="text-[33px] text-center font-black mt-20">
          <span className="text-blue-900">#</span>Projects
          <span className="h-[1px] md:ml-6 w-full md:w-[750px] inline-block bg-light relative top-7 group-hover:w-full transition-[width] ease duration-300 bg-white">
            &nbsp;
          </span>
        </h2>
      </motion.div>
      <div className="m-6 md:m-11 md:h-full md:mx-20 flex flex-col gap-16 md:gap-32">
        {projectsData.map(
          (
            {
              image,
              projectDescription,
              projectExternalLinks,
              projectName,
              projectTech,
              stylesTech,
            },
            index
          ) => {
            const isInverted = index % 2 !== 0;
            return (
              <motion.div
                className={`flex md:mb-0 mb-5 flex-col md:flex-row ${
                  isInverted ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                key={projectName}
                initial={{ x: isInverted ? 200 : -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="relative w-full md:w-[600px] md:min-h-[300px] md:mx-10">
                  <Image
                    className="rounded-xl object-cover w-full h-full"
                    src={image}
                    alt={projectName}
                    quality={100}
                  />
                  <span className="absolute top-0 left-0 w-full h-full rounded-xl bg-opacity-30 hover:bg-opacity-0 transition-all duration-500">
                    &nbsp;
                  </span>
                </div>

                <div className="z-10 flex flex-col md:w-1/2 justify-between">
                  <div>
                    <h3 className="text-4xl font-semibold md:mt-0 mt-5 ml-5">
                      {projectName}
                    </h3>
                    <div className="bg-black p-6 mt-4 md:mt-0">
                      <p>{projectDescription}</p>
                    </div>
                  </div>
                  <div className="flex justify-center flex-wrap mt-4 md:mt-8">
                    {projectTech.map((tech) => (
                      <span
                        className={`px-3 py-1 ${stylesTech} rounded-lg text-white mr-2 mb-2`}
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {projectExternalLinks ? (
                    <div className="flex md:mt-8 mt-3 ml-6">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.github}
                        className="mr-4"
                      >
                        <FiGithub size={25} />
                      </Link>
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                      >
                        <FiExternalLink size={25} />
                      </Link>
                    </div>
                  ) : (
                    <div className="flex md:mt-8 mt-3 ml-6">
                      <SiTypescript size={25} className="mr-4" />
                      <RiTailwindCssFill size={25} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}
