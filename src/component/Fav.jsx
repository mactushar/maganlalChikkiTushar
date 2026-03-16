import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Fav = () => {
  const data = useSelector((store) => store.fav.list);



  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col gap-3">
        {data?.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center p-4 overflow-hidden"
          >
           
            <span className="absolute -left-1 -top-1 text-6xl md:text-7xl font-extrabold text-black dark:text-white opacity-30 select-none pointer-events-none">
              {index + 1}
            </span>

            
            <img
              src={item.images}
              alt={item.name}
              className="w-12 h-12 object-cover rounded-lg mr-4 ml-3 shrink-0 z-10"
            />

            
            <div className="text-gray-800 dark:text-gray-100 font-semibold text-sm md:text-base flex-1 z-10">
              {item.name}
            </div>

          
            <button
              className="ml-4 text-gray-500 hover:text-red-500 transition-colors z-10 flex items-center justify-center"
            >
              <X size={24} />
            </button>
          </motion.div>
        ))}

        {data.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10 text-lg">
            Your Favorite Crunch is Missing!
          </div>
        )}
      </div>
    </div>
  );
};

export default Fav;