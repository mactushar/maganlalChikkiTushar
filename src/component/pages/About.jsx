import React from "react";
import { useGetAbout } from "../hooks/useGetAbout";

const About = () => {
  const { data, isFetching } = useGetAbout();

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-screen dark:bg-[#0f172a]">
        <span className="text-gray-700 dark:text-gray-200 text-2xl animate-pulse">
          Loading...
        </span>
      </div>
    );
  }

  const about = data?.[0];

  return (
    <div className="text-gray-800 dark:bg-[#0f172a] dark:text-gray-100 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* ABOUT CARD */}
        <div
          className="flex flex-col lg:flex-row items-center gap-10
          bg-white dark:bg-[#1e293b]
          rounded-2xl shadow-lg p-10
          border border-gray-100 dark:border-gray-700"
        >
          
          {/* IMAGE */}
          <div className="flex-1 w-full max-w-md lg:max-w-full">
            <img
              src={about?.image}
              alt={about?.title}
              className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* TEXT */}
          <div className="flex-1 w-full text-center lg:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              {about?.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed md:text-lg">
              {about?.description}
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

          <div
            className="bg-white dark:bg-[#1e293b]
            p-6 rounded-xl text-center shadow-md
            border border-gray-100 dark:border-gray-700"
          >
            <p className="text-gray-500 dark:text-gray-400 uppercase font-semibold mb-2 text-sm tracking-widest">
              Client Satisfaction
            </p>

            <p className="text-2xl font-bold">
              {about?.client_satisfaction}
            </p>
          </div>

          <div
            className="bg-white dark:bg-[#1e293b]
            p-6 rounded-xl text-center shadow-md
            border border-gray-100 dark:border-gray-700"
          >
            <p className="text-gray-500 dark:text-gray-400 uppercase font-semibold mb-2 text-sm tracking-widest">
              Our Team
            </p>

            <p className="text-2xl font-bold">
              {about?.our_team}
            </p>
          </div>

        </div>

        {/* FOOTER */}
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mt-12 tracking-wide">
          Tradition Meets Innovation • Maganlal Chikki
        </p>

      </div>
    </div>
  );
};

export default About;