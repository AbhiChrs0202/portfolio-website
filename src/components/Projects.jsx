import React from "react";
import Sareestyle from "../assets/SareeStyle1.png";
import netflixpic from "../assets/netflix1.png";
import cashflow from "../assets/cashflow1.png"
const Projects = () => {
  
  const projects = [
    {
      id: 1, 
      src: Sareestyle,
      name:"Utilized: React.js, Node.js, Redux, Express, MongoDB, Vercel ",
      url:"https://sareestyle.vercel.app/",
      url2:"https://github.com/AbhiChrs0202/sareestyle",
      description:"Developed a comprehensive web application for our client, Jai Ambe Saree, to efficiently manage their Saree Shop."
    },
    {
      id: 2,
      src: netflixpic,
      name:" Utilized: React JS, Tmdb API, Youtube API, Netlify",
      url:"https://netflix-clone-9324.vercel.app/",
      url2:"https://github.com/AbhiChrs0202/netflix-clone-0220",
      description:" Implemented Youtube API for playing trailers realtime on the web application and Netlify for deployment."
      
    },
    {
      id: 3,
      src: cashflow,
      name:"Utilized: React.js, Node.js, Express, MongoDB, Vercel ",
      url:"https://netflix-clone-9324.vercel.app/",
      url2:"https://github.com/AbhiChrs0202/netflix-clone-0220",
      description:"Created a web application for finance tracking, offering a personalized user experience and secure authentication."
      
    },
  ]
  const handleButtonClick=(url)=>{
    window.open(url, "_blank");
  }
  const handleClick=(url2)=>{
    window.open(url2, "_blank");
  }
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen pt-[7rem]"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="pt-[1rem] pd-[1rem]">Check out my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {projects.map(({ id,name, src,url,url2,description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-[28rem]">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-[15rem]"
              />
              <p className="   pt-[0.5rem] m-2 " style={{fontSize:"15px"}}>{name}</p>

              <p className="m-2  pt-[0.5rem] "style={{fontSize:"15px"}}>{description}</p>

              <div className="flex items-center justify-center">
                <button onClick={()=> handleButtonClick(url)} className="w-[8rem] px-3 py-2 mt-2 mb-5 ml-2 border rounded-[0.5rem] duration-400 hover:scale-105 pt-0">
                  Demo
                </button>
                <button onClick={()=> handleClick(url2)} className="w-[8rem] px-5 py-2 mt-2 mb-5 ml-3 border rounded-[0.5rem] duration-400 hover:scale-105 pt-0">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
