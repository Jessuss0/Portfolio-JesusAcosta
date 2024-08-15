import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import imageShoes from "@/icons/Shoes.png";
import imageFreelance from "@/icons/freelance.jpg";
import imagepf1 from "@/icons/pf1.png";
import imagenpi from "@/icons/pi.png";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Proyects() {
  const projectsData = [
    {
      image: imageShoes,
      projectName: "ShoesOnTrack",
      projectDescription:
        "This project is a E-Commerce developed under SCRUM methodologies. ShoesOnTrack is an innovative application designed to sell shoes in the most comfortable way possible for the user and to help small vendors.",
      projectTech: [
        "Next.js",
        "Javascript",
        "React",
        "Redux",
        "CSS",
        "PostgreSQL",
        "Express",
        "Google Login",
        "Paypal",
        "Cloudinary",
        "Auth0",
        "Material-UI",
      ],
      stylesTech: " bg-orange-400",
      projectExternalLinks: {
        github: "https://github.com/ShoesOnTrack",
        externalLink: "https://deploy-front-alpha.vercel.app/",
      },
    },
    {
      image: imageFreelance,
      projectName: "Freelance",
      projectDescription:
        "Joined an ongoing Next.js project working with TypeScript and Tailwind, implementing new features and/or improvements on the Front-end as requested by the client, respecting the pre-established design and responsive designs.",
      projectTech: ["Typescript", "Tailwind CSS", "Next.js"],
      stylesTech: " bg-blue-800",
      projectExternalLinks: false,
    },
    {
      image: imagepf1,
      projectName: "Etnia",
      projectDescription:
        "This project is a E-Commerce developed under SCRUM methodologies. Allows users to buy quality products with Mercado Pago and leave reviews. Administrators manage inventory from a CMS. The objective is to offer an agile and safe purchasing experience.",
      projectTech: [
        "Vite",
        "Javascript",
        "React",
        "Redux",
        "CSS",
        "PostgreSQL",
        "Express",
        "Google Login",
        "Mercado Pago",
        "Cloudinary",
        "Auth0",
        "Material-UI",
      ],
      stylesTech: " bg-green-700",
      projectExternalLinks: {
        github: "https://github.com/SantiagoQuirogaMolina/Etnia-Nuevo-Dashb",
        externalLink: "https://etnia-ecommerce.vercel.app/",
      },
    },
    {
      image: imagenpi,
      projectName: "Countries",
      projectDescription:
        "It is a country information application that utilizes the restcountries API as an external API. Developed with Node.js, Express.js, and SQL using PostgreSQL for backend and database technologies, with Sequelize as ORM. For the frontend, the application was built using the React JavaScript library, and Redux for global state management. Styling was implemented with pure CSS",
      projectTech: [
        "React",
        "SQL",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CSS Modules",
        "Sequelize",
        "PostgreSQL",
        "External API",
      ],
      stylesTech: " bg-orange-500",
      projectExternalLinks: {
        github: "https://github.com/Jessuss0/COUNTRIES-PI-HENRY",
        externalLink:
          "https://www.linkedin.com/feed/update/urn:li:activity:7148253962704523264/",
      },
    },
  ];
  return (
    <div className="min-h-screen">
      <h2 className="text-[33px] text-center font-black mt-20">
        <span className="text-blue-900">#</span>Proyects
        <span className="h-[1px] md:ml-6 w-full md:w-[750px] inline-block bg-light relative top-7 group-hover:w-full transition-[width] ease duration-300 bg-white">
          &nbsp;
        </span>
      </h2>

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
              <div
                className={`flex flex-col md:flex-row ${
                  isInverted ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                key={projectName}
              >
                <div className="relative w-full md:w-[600px] md:h-[300px] md:mx-10">
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
                    <h3 className="text-4xl font-semibold md:mt-0 mt-5">
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
                    <div className="flex md:mt-8">
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
                    <div className="flex md:mt-8">
                      <SiTypescript size={25} className="mr-4" />
                      <RiTailwindCssFill size={25} />
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
