import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/abhishek-chaurasia-a31169285/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/AbhiChrs0202",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:abhichrs0202@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/AbhishekResume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      {/* Floating button for smaller screens */}
      <div className="lg:hidden fixed bottom-4 right-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-500 text-white p-3 rounded-full shadow-md"
        >
          {isOpen ? <FaTimes size={24} /> : <FaGithub size={24} />}
        </button>
      </div>

      {/* Modal for smaller screens */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg">
            <ul>
              {links.map(({ id, child, href, download }) => (
                <li key={id} className="flex justify-center my-4">
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Sidebar for larger screens */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
