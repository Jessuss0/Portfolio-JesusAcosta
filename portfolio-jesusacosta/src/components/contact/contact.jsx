import React, { useState } from "react";

export default function Contact() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  return (
    <div className="min-h-screen">
      <h2 className="text-[33px] text-center font-black mt-20">
        <span className=" text-blue-900">#</span>Contact Me
        <span className="h-[1px] md:ml-6 w-full md:w-[750px] inline-block bg-light relative top-7 group-hover:w-full transition-[width] ease duration-300 bg-white">
          &nbsp;
        </span>
      </h2>
      <div className="flex items-center justify-center mt-20">
        <div className="flex flex-col items-center justify-center w-72 min-h-[350px] p-5 bg-gray-300 shadow-2xl shadow-blue-700 rounded-md">
          {/* <a className="text-black uppercase tracking-wider font-bold text-xl mt-6">
            Sign Up
          </a> */}

          <div className="relative w-full my-4">
            <input
              type="text"
              required
              className="w-full px-3 py-2 text-black bg-transparent border-l-2 border-b-2 border-black outline-none focus:border-2 focus:border-black focus:rounded-md transition-all duration-500"
              onFocus={() => setEmailFocused(true)}
              onBlur={(e) => setEmailFocused(e.target.value !== "")}
            />
            <span
              className={`absolute top-2 left-3 text-sm uppercase tracking-wider text-black pointer-events-none transition-all duration-500 transform ${
                emailFocused
                  ? "translate-x-[113px] translate-y-[-15px] text-xs bg-black text-white px-2 py-1 rounded"
                  : ""
              }`}
            >
              Fullname...
            </span>
          </div>

          <div className="relative w-full my-4">
            <input
              type="text"
              required
              className="w-full px-3 py-2 text-black bg-transparent border-l-2 border-b-2 border-black outline-none focus:border-2 focus:border-black focus:rounded-md transition-all duration-500"
              onFocus={() => setUsernameFocused(true)}
              onBlur={(e) => setUsernameFocused(e.target.value !== "")}
            />
            <span
              className={`absolute top-2 left-3 text-sm uppercase tracking-wider text-black pointer-events-none transition-all duration-500 transform ${
                usernameFocused
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
              required
              className="w-full min-h-40 px-3 py-2 text-black bg-transparent border-l-2 border-b-2 border-black outline-none focus:border-2 focus:border-black focus:rounded-md transition-all duration-500"
              onFocus={() => setPasswordFocused(true)}
              onBlur={(e) => setPasswordFocused(e.target.value !== "")}
            />
            <span
              className={`absolute top-2 left-3 text-sm uppercase tracking-wider text-black pointer-events-none transition-all duration-500 transform ${
                passwordFocused
                  ? "translate-x-[113px] translate-y-[-15px] text-xs bg-black text-white px-2 py-1 rounded"
                  : ""
              }`}
            >
              ...
            </span>
          </div>

          <button className="w-24 h-11 border-2 border-black rounded-md uppercase text-xs tracking-wider bg-transparent hover:bg-black hover:text-white text-gray-600 transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
