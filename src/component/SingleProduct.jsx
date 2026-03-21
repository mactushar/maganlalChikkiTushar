import React from "react";
import { Heart, Cookie } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "./rtk/slice/addFavourite";
import toast from "react-hot-toast";

/* 🔥 Smooth + Fast Entry Animation */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      type: "tween",
      duration: 0.25,
      ease: "easeOut",
    },
  }),
};

const SingleProduct = ({ name, data, categoryId }) => {
  const favList = useSelector((store) => store.fav.list);
  const dispatch = useDispatch();

  const addtoFav = (e, product, isFav) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isFav) {
      const item = {
        id: product.id,
        name: product.title,
        images: product.images?.[0],
      };

      dispatch(addFav(item));
      toast.success("Added to favourites ❤️");
    } else {
      toast.error("Already in favourites ❤️");
    }
  };

  return (
    <div className="text-gray-800 dark:bg-[#0f172a] dark:text-gray-100 transition-colors duration-300">
      <div className="w-full mx-auto py-16 px-4">

        
<div className="relative mb-14">

 
  <div className="w-full h-0.5 bg-red-500 rounded"></div>

 
  <div
    className="
      absolute left-0  
      flex items-center gap-2
      bg-red-500 dark:bg-red-500
      text-white
      px-4 py-1.5
      rounded-b-md
      shadow-md
    "
  >
    <Cookie className="w-4 h-4 text-white" />
    <span className="text-sm md:text-base font-medium">
      {name}
    </span>
  </div>

</div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data?.map((product, i) => {
            const isFav = favList.some((item) => item.id === product.id);

            return (
              <div key={product.id}>
                <Link to={`/product/${categoryId}/${product.id}`}>
                  
                 
                  <motion.div
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -6, scale: 0.98 }}
                    transition={{
                      type: "tween",
                      duration: 0.12,
                      ease: "easeOut",
                    }}
                    className="
                      group w-full cursor-pointer
                      bg-white dark:bg-[#0f172a]
                      border border-gray-200 dark:border-gray-700
                      shadow-md dark:shadow-black/30
                      rounded-2xl
                      hover:shadow-xl dark:hover:shadow-black/50
                      transition duration-200
                    "
                  >
                  
                    <div className="relative h-48 rounded-t-2xl overflow-hidden">
                      
                    
                      <motion.div
                        onClick={(e) => addtoFav(e, product, isFav)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.12 }}
                        className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-black/60 p-2 rounded-full"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            isFav
                              ? "fill-red-500 text-red-500"
                              : "text-red-500"
                          }`}
                        />
                      </motion.div>

                    
                      <motion.img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          duration: 0.18,
                          ease: "easeOut",
                        }}
                      />

                     
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                   
                      <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                        ₹{product.price}
                      </div>
                    </div>

                  
                    <div className="p-3 space-y-2">
                      <h3 className="font-semibold text-lg truncate group-hover:text-red-500 transition-colors duration-150">
                        {product.title}
                      </h3>

                      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                        {product.small_description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;