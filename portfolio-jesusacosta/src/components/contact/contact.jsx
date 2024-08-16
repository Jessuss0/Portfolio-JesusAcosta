import React, { useEffect, useState } from "react";
import sticker from "@/icons/stickerContact.gif";
import Image from "next/image";
import Link from "next/link";
import curriculumImage from "@/icons/curriculum.png";
import mailImage from "@/icons/mail.png";

export default function Contact() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  function mail() {
    window.location.href = `mailto:${"jesusacosta3321@gmail.com"}`;
  }

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/cvSpanish.pdf"; // Ruta al archivo PDF en la carpeta public
    link.download = "CV Jesús Acosta.pdf"; // Nombre con el que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mb-20 md:mt-10">
      <h2 className="text-[33px] text-center font-black mt-20">
        <span className=" text-blue-900">#</span>Contact Me
        <span className="h-[1px] md:ml-6 w-full md:w-[750px] inline-block bg-light relative top-7 group-hover:w-full transition-[width] ease duration-300 bg-white">
          &nbsp;
        </span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex mt-5 md:mt-20 md:space-y-10 space-y-0 md:space-x-0 space-x-10 md:flex-col md:mr-44">
          <Link href={"https://www.linkedin.com/in/jesus-acosta-42647a26a/"}>
            <button
              href="/"
              class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1.1em"
                viewBox="0 0 512 512"
                stroke-width="0"
                fill="currentColor"
                stroke="currentColor"
                class=" h-8 w-8 md:w-12 md:h-12"
              >
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
              </svg>
            </button>
          </Link>
          <Link href={"https://github.com/Jessuss0"}>
            <button
              href="/"
              class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            >
              <svg
                class=" h-8 w-8 md:w-12 md:h-12"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
          <button
            onClick={downloadFile}
            className="group w-12 h-12 md:w-16 md:h-16 flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-cyan-600 to-blue-950 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={curriculumImage}
              alt="Next.js Logo"
              priority
            />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-white">
              CV
            </span>
          </button>
          <button
            href="/"
            onClick={() => mail()}
            class="group w-12 h-12 md:w-16 md:h-16 flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
              src={mailImage}
              alt="Next.js Logo"
              priority
            />
            <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-white">
              Mail
            </span>
          </button>
        </div>
        <div className="flex items-center justify-center mt-20">
          <div className="flex flex-col items-center justify-center w-72 min-h-[350px] p-5 bg-gray-300 shadow-2xl shadow-blue-700 rounded-md md:w-96">
            <form
              action="https://getform.io/f/blljeokb"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-center items-center">
                <div className="md:w-1/3 w-1/5">
                  <Image
                    src={sticker}
                    alt="fisica"
                    width={300}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded-md"
                    unoptimized
                  />
                </div>
              </div>

              <div className="relative w-full my-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-black bg-transparent border-l-2 border-b-2 border-black outline-none focus:border-2 focus:border-black focus:rounded-md transition-all duration-500"
                  onFocus={() => setEmailFocused(true)}
                  onBlur={(e) => setEmailFocused(e.target.value !== "")}
                />
                <span
                  className={`absolute top-2 left-3 text-sm uppercase tracking-wider text-black pointer-events-none transition-all duration-500 transform ${
                    emailFocused || form.name
                      ? "translate-x-[113px] translate-y-[-15px] text-xs bg-black text-white px-2 py-1 rounded"
                      : ""
                  }`}
                >
                  Fullname...
                </span>
              </div>

              <div className="relative w-full my-4">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-black bg-transparent border-l-2 border-b-2 border-black outline-none focus:border-2 focus:border-black focus:rounded-md transition-all duration-500"
                  onFocus={() => setUsernameFocused(true)}
                  onBlur={(e) => setUsernameFocused(e.target.value !== "")}
                />
                <span
                  className={`absolute top-2 left-3 text-sm uppercase tracking-wider text-black pointer-events-none transition-all duration-500 transform ${
                    usernameFocused || form.email
                      ? "translate-x-[113px] translate-y-[-15px] text-xs bg-black text-white px-2 py-1 rounded"
                      : ""
                  }`}
                >
                  Email...
                </span>
              </div>

              <div className="relative w-full my-4">
                <textarea
                  type="text"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-40 px-3 py-2 text-black bg-transparent border-l-2 border-b-2 border-black outline-none focus:border-2 focus:border-black focus:rounded-md transition-all duration-500"
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={(e) => setPasswordFocused(e.target.value !== "")}
                />
                <span
                  className={`absolute top-2 left-3 text-sm uppercase tracking-wider text-black pointer-events-none transition-all duration-500 transform ${
                    passwordFocused || form.message
                      ? "translate-x-[113px] translate-y-[-15px] text-xs bg-black text-white px-2 py-1 rounded"
                      : ""
                  }`}
                >
                  ...
                </span>
              </div>

              <button
                type="submit"
                className="w-24 h-11 border-2 border-black rounded-md uppercase text-xs tracking-wider bg-transparent hover:bg-black hover:text-white text-gray-600 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
