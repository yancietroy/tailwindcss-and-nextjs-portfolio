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
          <p className="text-lg mt-4 mb-6 md:text-3xl">
            Hello! I&#39;m Yancie Troy,
          </p>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">
            I Elevate User Experiences
            <br />
            through Design and Code.
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl md:mb-8">
            As a{" "}
            <span className="font-semibold text-sky-600">
              UI/UX Designer | Frontend Developer
            </span>
            , I combine creativity and technical expertise to craft visually
            stunning and intuitive digital experiences that bring ideas to life
          </p>

          <div className="flex space-x-4">
            <Link
              to="projects"
              className={
                "text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded shadow hover:bg-sky-700 cursor-pointer"
              }
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <a
              href="/path/to/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={
                "text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded shadow hover:bg-sky-700 cursor-pointer flex items-center justify-center"
              }
            >
              <FiFileText size={18} className="mr-2" />
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/yancie-troy-saludo/"
              target="_blank"
              rel="noopener noreferrer"
              className={
                "text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded shadow hover:bg-sky-700 cursor-pointer flex items-center justify-center"
              }
            >
              <FaLinkedin size={24} className="mr-0" />
            </a>
            <a
              href="https://dribbble.com/ynctry"
              target="_blank"
              rel="noopener noreferrer"
              className={
                "text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded shadow hover:bg-sky-700 cursor-pointer flex items-center justify-center"
              }
            >
              <FaDribbble size={24} className="mr-0" />
            </a>
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
