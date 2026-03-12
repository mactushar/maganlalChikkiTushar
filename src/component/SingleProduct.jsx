import React from "react";

import { Heart, Cookie } from "lucide-react";

const SingleProduct = ({name,data}) => {
  

  

  return (
    <div className="text-gray-800 dark:bg-[#0f172a] dark:text-gray-100 transition-colors duration-300">
      <div className="w-full mx-auto py-20">
        {/* TITLE */}
        <div className="flex items-center justify-start gap-3 mb-5">
          <Cookie className="w-8 h-8 text-red-500" />
          <h2 className="text-3xl  md:text-4xl font-semibold">
           {name}
          </h2>
        </div>
        <div className="w-full h-0.5 bg-red-500 mb-10 rounded"></div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {data?.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-[#1e293b]
              rounded-2xl shadow-lg
              border border-gray-100 dark:border-gray-700
              overflow-hidden
              hover:scale-105 transition-transform duration-300"
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-lg line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                  {product.small_description}
                </p>

                {/* PRICE */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-red-500">
                    ₹{product.price}
                  </span>
                  <div className="flex space-x-4 justify-center items-center">
                    <Heart className="w-6 h-6 cursor-pointer hover:scale-110 transition text-red-500" />
                    <button className="flex items-center justify-center px-4 py-2 text-sm leading-none font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
  View
</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
