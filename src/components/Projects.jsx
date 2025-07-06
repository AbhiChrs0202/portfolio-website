import React from "react";
import Sareestyle from "../assets/SareeStyle1.png";
import netflixpic from "../assets/netflix1.png";
import cashflow from "../assets/cashflow1.png";
import edufy from "../assets/Edufy.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Sareestyle,
      name: "Utilized: React.js, Node.js, Redux, Express, MongoDB, Vercel",
      url: "https://sareestyle.vercel.app/",
      url2: "https://github.com/AbhiChrs0202/sareestyle",
      description:
        "Developed a comprehensive web application for our client, Jai Ambe Saree, to efficiently manage their Saree Shop.",
    },
    {
      id: 2,
      src: netflixpic,
      name: "Utilized: React JS, Tmdb API, Youtube API, Netlify",
      url: "https://netflix-clone-9324.vercel.app/",
      url2: "https://github.com/AbhiChrs0202/netflix-clone-0220",
      description:
        "Implemented Youtube API for playing trailers realtime on the web application and Netlify for deployment.",
    },
   
    {
      id: 3,
      src: edufy,
      name: "Utilized: React.js, MUI, Vercel",
      url: "https://edufy-course.vercel.app/",
      url2: "https://github.com/AbhiChrs0202/Edufy-course",
      description:
        "Developed a dynamic web application for seamless course selling, featuring user-friendly navigation and course management tools."
    },
  ];

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  const handleClick = (url2) => {
    window.open(url2, "_blank");
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white pt-[7rem]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="pt-6">Check out my work</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-0">
          {projects.map(({ id, name, src, url, url2, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col"
            >
              <img
                src={src}
                alt=""
                className="rounded-t-md duration-200 hover:scale-105 w-full h-48 md:h-60"
              />
              <div className="p-4 flex flex-col flex-grow">
                <p className="font-medium text-sm md:text-base">{name}</p>
                <p className="mt-2 text-sm md:text-base">{description}</p>
                <div className="flex items-center justify-center mt-auto">
                  <button
                    onClick={() => handleButtonClick(url)}
                    className="w-24 px-3 py-2 mt-4 mb-2 border rounded-lg duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => handleClick(url2)}
                    className="w-24 px-3 py-2 mt-4 mb-2 ml-3 border rounded-lg duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
