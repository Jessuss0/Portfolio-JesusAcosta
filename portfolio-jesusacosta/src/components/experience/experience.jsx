import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="min-h-screen px-4 lg:max-w-[1700px] h-full md:max-w-7xl m-auto z-10 lg:w-full">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <h2 className="text-[33px] text-center font-black mt-20">
          <span className=" text-blue-900">#</span>Experience
          <span className="h-[1px] md:ml-6 w-full md:w-[750px] inline-block bg-light relative top-7 group-hover:w-full transition-[width] ease duration-300 bg-white">
            &nbsp;
          </span>
        </h2>
      </motion.div>
      <div className="flex flex-col  justify-center items-center xl:flex-row xl:justify-between sm:h-[600px] md:mt-20 mt-0">
        <motion.div
          className="flex flex-col xl:w-[570px] 2xl:w-[950px] md:px-6 xl:px-0"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p class="text-white text-center xl:text-left font-bold text-xl leading-10 md:text-2xl sm:leading-[46px] md:leading-[56px] xl:leading-[70px] xl:text-[50px] 2xl:text-[78px] 2xl:leading-[120px]">
            More that 1 year experience as a <br />
            <span className=" text-blue-900">Full Stack Web Developer </span>
            and 7<span className=" text-orange-700"> Projects </span>
            Completed.
          </p>
        </motion.div>
        <motion.div
          className=" mt-20 xl:mt-0 xl:flex xl:justify-center xl:items-center flex flex-col-reverse md:flex-row bg-gradient-to-t from-orange-800 to-blue-800 p-8 md:w-[800px] lg:w-[1000px] rounded-xl"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="md:ml-5 md:mr-auto">
            <h2 className="text-2xl font-medium">
              Front-end Developer - Freelance
            </h2>
            <p>Remote | Feb. 2024 - April. 2024</p>
            <ul className="list-disc list-inside">
              <li className="my-3">
                Implemented and enhanced key Front-end functionalities.
              </li>
              <li className="my-3">Responsive designs.</li>
              <li className="my-3">Next.js, TypeScript and Tailwind CSS.</li>
              <li className="my-3">
                Various user authentication and management features, including
                password handling and account recovery.
              </li>
            </ul>
            <div className="w-full flex justify-center md:block">
              <button class="bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                FULLTIME
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

//URL: https://www.linkedin.com/feed/update/urn:li:activity:7207422504972218368/
