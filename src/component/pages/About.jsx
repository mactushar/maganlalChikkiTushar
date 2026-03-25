import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { useGetAbout } from "../hooks/useGetAbout";

const About = () => {
  const { data, isFetching } = useGetAbout();
  const [showMore, setShowMore] = useState(false);

  if (isFetching) return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-[#0f172a]">
      <div className="w-6 h-6 border-t-2 border-blue-500 rounded-full animate-spin" />
    </div>
  );

  const about = data?.[0];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] p-6">
      <LayoutGroup>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 border border-gray-200 dark:border-gray-800"
        >
          
          {/* 1. TOP LEFT: TITLE */}
          <div className="p-10 border-b border-r border-gray-200 dark:border-gray-800 flex flex-col justify-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 dark:text-white uppercase leading-none">
              {about?.title}
            </h2>
          </div>

          {/* 2. TOP RIGHT: IMAGE */}
          <div className="h-64 md:h-auto overflow-hidden border-b border-gray-200 dark:border-gray-800">
            <img
              src={about?.image}
              alt="Brand"
              className="w-full h-full object-cover filter contrast-[1.1]"
            />
          </div>

          {/* 3. BOTTOM LEFT: DESCRIPTION (TRUNCATED) */}
          <div className="p-10 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between">
            <motion.div layout className="space-y-4">
              <p className={`text-sm leading-relaxed text-gray-500 dark:text-gray-400 ${!showMore && 'line-clamp-3'}`}>
                {about?.description}
              </p>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-[10px] font-black uppercase tracking-tighter text-blue-600 hover:text-blue-400 transition-colors"
              >
                {showMore ? "[-] Close" : "[+] Read Story"}
              </button>
            </motion.div>
          </div>

          {/* 4. BOTTOM RIGHT: STATS (SMALL FONT) */}
          <div className="p-10 flex flex-col justify-center space-y-6 bg-gray-50/50 dark:bg-white/[0.02]">
            <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Satisfaction</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{about?.client_satisfaction}</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">The Team</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{about?.our_team}</span>
            </div>
          </div>

        </motion.div>
      </LayoutGroup>
    </section>
  );
};

export default About;