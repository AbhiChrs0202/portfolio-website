import React from "react";
import AbhishekPic from "../assets/AbhishekPic.jpeg";
import { HiArrowRight } from "react-icons/hi";
import Projects from "./Projects";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray-500 py-4 max-wd-md text-3xl">
            Hey there, I am Abhishek
          </p>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            A Full-Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-wd-md text-xl ">
            I am a Fresher who loves to build and design websites.
          </p>
          <div>
            <Link
             to="projects"
             smooth
             duration={500}
              className="group text-white w-fit px-6  py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={17} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
