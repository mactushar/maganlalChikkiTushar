import React, { useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import { getProducts } from "../utils/getAllProducts";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckBox,
  setData,
  applyFilters,
  setPriceRange,
  
} from "../rtk/slice/ProductFilterSlice";
import { addFav } from "../rtk/slice/addFavourite";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";
import AutoComplete from "../AutoComplete";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.25,
    },
  }),
};

const ShopeNavbar = ({ data = [] }) => {
  const dispatch = useDispatch();
  const favList = useSelector((store) => store.fav.list);
  const fiterallData = useSelector((store) => store.filter.filter);
  const cbx = useSelector((store) => store.filter.checkbox);
  const priceRange = useSelector((store) => store.filter.priceRange);

  const result = useQueries({
    queries: data.map((p) => ({
      queryKey: ["product", p.id],
      queryFn: async () => {
        const res = await getProducts(p.id);
        return res.map((r) => ({
          ...r,
          
          category_id: p.id,
        }));
      },
      enabled: !!p.id,
    })),
    combine: (results) => ({
      data: results.map((d) => d.data ?? []).flat(),
      isFetching: results.some((d) => d.isFetching),
    }),
  });

  useEffect(() => {
    if (result.data.length) {
      dispatch(setData(result.data));
      dispatch(applyFilters());
    }
  }, [result.data, dispatch]);

  const addtoFav = (e, product, isFav) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isFav) {
      dispatch(
        addFav({
          id: product.id,
          name: product.title,
          images: product.images?.[0],
        }),
      );
      toast.success("Added to favourites ❤️");
    } else {
      toast.error("Already in favourites ❤️");
    }
  };

  const checkBoxHandler = (id) => {
    dispatch(setCheckBox(Number(id)));
    dispatch(applyFilters());
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Filters
        </h2>

        {/* Category */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Category
          </h3>

          <div className="space-y-2">
            {data?.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <input
                  type="checkbox"
                  className="accent-red-500"
                  checked={cbx.includes(cat.id)}
                  onChange={() => checkBoxHandler(cat.id)}
                />
                {cat.cat_name}
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mb-6"></div>

        {/* Price */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Price
          </h3>

          <input
            type="range"
            min="1"
            max="1000"
            
            className="w-full accent-red-500"
            onChange={(e) => {
              dispatch(setPriceRange([1, Number(e.target.value)]));
              dispatch(applyFilters());
            }}
          />

          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹1</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mb-6"></div>

      
        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Rating
          </h3>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                className="accent-red-500"
                onChange={() => {
                  dispatch(setRating(4));
                  dispatch(applyFilters());
                }}
              />
              ⭐⭐⭐⭐ & above
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                className="accent-red-500"
                onChange={() => {
                  dispatch(setRating(3));
                  
                }}
              />
              ⭐⭐⭐ & above
            </label>

            <button
              className="text-xs text-red-500 mt-2"
              onClick={() => {
                dispatch(setRating(null));
                
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1 p-6">
        <AutoComplete />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {fiterallData.length === 0 && (
            <p className="text-center dark:text-white text-gray-800">
              No Matches Found
            </p>
          )}

          {fiterallData?.map((product, i) => {
            const isFav = favList.some((item) => item.id === product.id);

            return (
              <Link
                key={product.id}
                to={`/product/${product.category_id}/${product.id}`}
                className="block"
              >
                <motion.div
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -6, scale: 0.98 }}
                  className="group bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md dark:shadow-black/30 hover:shadow-xl dark:hover:shadow-black/50 transition duration-200"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <motion.div
                      onClick={(e) => addtoFav(e, product, isFav)}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-black/60 p-2 rounded-full"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFav ? "fill-red-500 text-red-500" : "text-red-500"
                        }`}
                      />
                    </motion.div>

                    <img
                      src={product.images?.[0]}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

                    <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                      ₹{product.price}
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="font-semibold truncate group-hover:text-red-500">
                      {product.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {product.small_description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopeNavbar;
