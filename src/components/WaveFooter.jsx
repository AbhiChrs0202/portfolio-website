import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Logo.jpeg';
const WaveFooter = () => {
  return (
    
    <div className='h-[15rem]'>
      
      <footer className="bg-black text-white flex flex-col justify-center items-center w-full h-[18rem]   ">
      <img
              src={Logo}
              alt="My logo"
              className="w-[7rem] h-[7rem] object-cover pb-5"
            />
        <div className="container mx-auto flex flex-col justify-between items-center ">
          <div className="flex space-x-6 ">
            <a href="https://github.com/AbhiChrs0202" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </div>
          <p className="text-center text-sm pt-10 font-bold text-4xl pb-0">
            &copy; {new Date().getFullYear()} Abhishek Chaurasia | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WaveFooter;
