import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [colors, setColors] = useState({
    primary: "text-orange-800",
    secondary: "text-blue-800",
    border: "border-orange-500",
    gradient: "bg-gradient-to-t from-orange-800 to-blue-800",
    freelance: "border-orange-500",
  });

  const [cardInfo, setCardInfo] = useState({
    title: "Front-end Developer - Freelance",
    period: "Remote | Feb. 2024 - April. 2024",
    details: [
      "Implemented and enhanced key Front-end functionalities.",
      "Responsive designs.",
      "Next.js, TypeScript and Tailwind CSS.",
      "Various user authentication and management features, including password handling and account recovery.",
    ],
  });

  const handleVorhealthClick = () => {
    setColors({
      primary: "text-blue-800",
      secondary: "text-green-600",
      gradient: "bg-gradient-to-t from-green-600 to-blue-800",
      vorhealth: "border-green-600",
    });
    setCardInfo({
      title: "Full-stack web developer - Vorhealth",
      period: "Remote | Sep. 2024 - Current",
      details: [
        "Full-Stack Work: Built and maintained apps with Next.js, React and Tailwind CSS.",
        "Responsive designs.",
        "Agile Collaboration: Worked in Scrum to achieve project goals.",
      ],
    });
  };

  const handleFreelanceClick = () => {
    setColors({
      primary: "text-orange-800",
      secondary: "text-blue-800",
      freelance: "border-orange-500",
      gradient: "bg-gradient-to-t from-orange-800 to-blue-800",
    });
    setCardInfo({
      title: "Front-end Developer - Freelance",
      period: "Remote | Feb. 2024 - April. 2024",
      details: [
        "Implemented and enhanced key Front-end functionalities.",
        "Responsive designs.",
        "Next.js, TypeScript and Tailwind CSS.",
        "Various user authentication and management features, including password handling and account recovery.",
      ],
    });
  };

  return (
    <div className="min-h-screen px-4 lg:max-w-[1700px] h-full md:max-w-7xl m-auto z-10 lg:w-full">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <h2 className="text-[33px] text-center font-black mt-20">
          <span className="text-blue-900">#</span>Experience
          <span className="h-[1px] md:ml-6 w-full md:w-[750px] inline-block bg-light relative top-7 transition-[width] duration-300 bg-white">
            &nbsp;
          </span>
        </h2>
      </motion.div>
      <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-between sm:h-[600px] md:mt-20 mt-0">
        <motion.div
          className="flex flex-col xl:w-[570px] 2xl:w-[950px] md:px-6 xl:px-0"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-white text-center xl:text-left font-bold text-xl leading-10 md:text-2xl sm:leading-[46px] md:leading-[56px] xl:leading-[70px] xl:text-[50px] 2xl:text-[78px] 2xl:leading-[120px]">
            More than 2 year experience as a <br />
            <span className={colors.secondary}>Full Stack Web Developer </span>
            and 6<span className={colors.primary}> Projects </span>
            Completed.
          </p>
        </motion.div>
        <div className="flex md:flex-col md:mt-0 mt-20">
          <button
            onClick={handleVorhealthClick}
            className={`bg-neutral-950 text-neutral-400 border ${
              colors.vorhealth ? colors.vorhealth : "border-neutral-400"
            } border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 active:opacity-75 outline-none duration-300 group`}
          >
            Vorhealth
          </button>
          <button
            onClick={handleFreelanceClick}
            className={`bg-neutral-950 text-neutral-400 md:mt-4 md:ml-0 ml-4 border ${
              colors.freelance ? colors.freelance : "border-neutral-400"
            } border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 active:opacity-75 outline-none duration-300 group`}
          >
            Freelance
          </button>
        </div>
        <motion.div
          className={`xl:mt-0 flex flex-col justify-start items-start ${colors.gradient} p-8 md:w-[800px] lg:w-[1000px] md:h-[350px] h-[450px] rounded-xl`}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="w-full">
            <h2 className="text-3xl font-medium mb-2">{cardInfo.title}</h2>
            <p className="text-lg text-neutral-300">{cardInfo.period}</p>
            <ul className="list-disc list-inside mt-10 space-y-3">
              {cardInfo.details.map((detail, index) => (
                <li key={index} className="text-base text-neutral-100">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
