import React from 'react';

const Education = () => {
  return (
    <div
      name="education"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-[7rem] md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-[5rem] h-[5rem] rounded-full bg-white flex items-center justify-center text-black font-bold text-2xl mb-4 md:mb-0 md:mr-6">
              2024
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Bachelor's Degree in Information Technology (2021 – 2024)
              </h3>
              <p className="text-white mb-2">B.N Bandodkar College of Science, Thane</p>
              <p className="text-white">CGPA: 9.17</p>
              <div className="hidden md:block h-6 border-l-2 border-gray-300 ml-8 mt-2" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-[5rem] h-[5rem] rounded-full bg-white flex items-center justify-center text-black font-bold text-2xl mb-4 md:mb-0 md:mr-6">
              2021
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">HSC (12th) (2020 - 2021)</h3>
              <p className="text-white mb-2">Ramanand Arya D.A.V College, Bhandup</p>
              <p className="text-white">Percentage: 84.67%</p>
              <div className="hidden md:block h-6 border-l-2 border-gray-300 ml-8 mt-2" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-[5rem] h-[5rem] rounded-full bg-white flex items-center justify-center text-black font-bold text-2xl mb-4 md:mb-0 md:mr-6">
              2019
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">SSC (10th) (2007 - 2019)</h3>
              <p className="text-white mb-2">Sri Ma Bal Niketan High School, Thane</p>
              <p className="text-white">Percentage: 79.80%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
