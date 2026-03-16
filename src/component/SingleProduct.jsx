import React from "react";
import { Heart, Cookie } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "./rtk/slice/addFavourite";
import toast from "react-hot-toast";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 120,
      damping: 14,
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
        <div className="flex items-center gap-3 mb-5">
          <Cookie className="w-8 h-8 text-red-500" />
          <h2 className="text-2xl md:text-4xl font-semibold">{name}</h2>
        </div>

        <div className="w-full h-0.5 bg-red-500 mb-10 rounded"></div>

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
                    whileHover={{ y: -10, scale: 0.97 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="group w-full cursor-pointer"
                  >
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <motion.div
                        onClick={(e) => addtoFav(e, product, isFav)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-white/90 dark:bg-black/60 p-2 rounded-full"
                      >
                        <Heart
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            isFav ? "fill-red-500 text-red-500" : "text-red-500"
                          }`}
                        />
                      </motion.div>

                      <motion.img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                      <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                        ₹{product.price}
                      </div>
                    </div>

                    <div className="p-3 space-y-2">
                      <h3 className="font-semibold text-lg truncate group-hover:text-red-500 transition-colors">
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
