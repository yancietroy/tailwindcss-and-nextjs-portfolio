"use client"; // this is a client component
import React from "react";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { FaLinkedin, FaDribbble } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 mt-0 my-0 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className=" md:w-100">
          <p
            className="text-lg mt-4 mb-6 md:text-3xl"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}
          >
            Hello! I&#39;m Yancie Troy,
          </p>
          <h1
            className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl"
            style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            I Elevate User Experiences
            <br />
            through <span className="font-bold text-sky-600">
              Design
            </span> and <span className="font-bold text-sky-600">Code</span>.
          </h1>
          <p
            className="text-lg mt-4 mb-6 md:text-2xl md:mb-8"
            style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" }}
          >
            As a{" "}
            <span className="font-semibold text-sky-600">
              UI/UX Designer | Frontend Developer
            </span>
            , I combine creativity and technical expertise to craft visually
            stunning and intuitive digital experiences that bring ideas to life
          </p>

          <div className="flex space-x-4">
            <button className="btn-project bg-sky-600 mr-4">
              <Link
                to="projects"
                className={
                  "text-blue-800 font-semibold px-6 py-3 cursor-pointer md:text-1xl"
                }
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </button>
            <div className="flex items-center space-x-4">
              <a
                href="/path/to/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Btn bg-sky-600 rounded shadow hover:bg-sky-700">
                  <div className="sign">
                    <FiFileText size={24} className="text-neutral-100" />
                  </div>
                  <span
                    className="text-neutral-100 font-semibold cursor-pointer label"
                    style={{
                      ...({ "--label-length": "6" } as React.CSSProperties), // Specify the type and use a computed property
                    }}
                  >
                    Resume
                  </span>
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/yancie-troy-saludo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Btn bg-sky-600 rounded shadow hover:bg-sky-700">
                  <div className="sign">
                    <FaLinkedin size={24} className="text-neutral-100" />
                  </div>
                  <span
                    className="text-neutral-100 font-semibold cursor-pointer label"
                    style={{
                      ...({ "--label-length": "6" } as React.CSSProperties), // Specify the type and use a computed property
                    }}
                  >
                    LinkedIn
                  </span>
                </button>
              </a>
              <a
                href="https://dribbble.com/ynctry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="Btn bg-sky-600 rounded shadow hover:bg-sky-700">
                  <div className="sign">
                    <FaDribbble size={24} className="text-neutral-100" />
                  </div>
                  <span
                    className="text-neutral-100 font-semibold cursor-pointer label"
                    style={{
                      ...({ "--label-length": "6" } as React.CSSProperties), // Specify the type and use a computed property
                    }}
                  >
                    Dribbble
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
