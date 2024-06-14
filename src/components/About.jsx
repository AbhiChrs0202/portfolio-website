import React from "react";
import AbhishekPic1 from "../assets/Logo1.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-[4rem]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-3/5 text-xl mt-4 md:mt-0">
            <p>
              Hey! I am Abhishek Chaurasia, I have recently earned my Bachelor
              of Science degree in Information Technology and am a dedicated and
              proficient full stack developer with expertise in the MERN stack
              (MongoDB, Express.js, React, and Node.js). My academic background
              and various projects have equipped me with robust skills in both
              front-end and back-end development, allowing me to create dynamic,
              responsive web applications from the ground up. I relish the
              opportunity to solve complex problems and am committed to
              continuously expanding my knowledge of new technologies to stay
              current in this fast-paced industry. My ambition is to utilize my
              technical skills and innovative thinking to craft solutions that
              improve user experiences and contribute to business growth. I am
              eager to begin my professional career and make meaningful
              contributions to significant projects as a member of a dynamic
              development team.
            </p>
          </div>
          <div className="hidden md:flex md:w-2/5 mt-8 md:mt-0 justify-center">
            <img
              src={AbhishekPic1}
              alt="My Photo"
              className="rounded-full w-2/3 md:w-3/4 lg:w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
