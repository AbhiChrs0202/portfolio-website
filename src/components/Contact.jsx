import React from "react";
import contactus from "../assets/contactus.png";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white pt-[8rem]">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Let's make something together , please fill the form below.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/nadodeeb" method="POST" className="flex flex-col w-full md:w-3/5">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">Let's Talk</button>
          </form>
          <div className="flex items-center md:w-2/5 pl-[3rem] pb-[6rem]">
        <img
              src={contactus}
              alt="My Photo"
              className=" w-[20rem] h-[20rem] object-cover"
            />
        </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Contact;
