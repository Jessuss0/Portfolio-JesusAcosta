import imageShoes from "@/icons/Shoes.png";
import imageFreelance from "@/icons/freelance.jpg";
import imagepf1 from "@/icons/pf1.png";
import imagenpi from "@/icons/pi.png";
import imageVorhealth from "@/icons/Vorhealth.png";
import soploDeVida from "@/icons/SoploDeVida2.png";

const projectsData = [
  {
    image: soploDeVida,
    projectName: "Soplo De Vida",
    projectDescription:
      "Soplo de Vida is a shelter that cares for, sponsors, and relocates animals. Its mission is to give them a new chance at life in loving homes.",
    projectTech: ["Next.js", "Javascript", "React", "TailwindCSS"],
    stylesTech: "bg-purple-400",
    projectExternalLinks: {
      github: "https://github.com/martin-tercero1/soplo-de-vida",
      externalLink: "https://soplo-de-vida.vercel.app/",
    },
  },
  {
    image: imageVorhealth,
    projectName: "Vorhealth Web",
    projectDescription:
      "Group web development project for the startup Vorhealth, featuring a landing page with sections about the team, a company description, and a contact area.",
    projectTech: [
      "Next.js",
      "Javascript",
      "React",
      "TailwindCSS",
      "Docker",
      "Framer Motion",
    ],
    stylesTech: " bg-blue-700",
    projectExternalLinks: {
      github: "https://github.com/Vorhealth",
      externalLink: "https://vorhealth-web.vercel.app/",
    },
  },
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

export default projectsData;
