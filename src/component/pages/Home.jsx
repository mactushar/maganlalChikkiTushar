import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useSlider } from "../hooks/useSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useBanner } from "../hooks/useBanner";
import Products from "../Products";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white"
    onClick={onClick}
  >
    <ChevronRight className="w-10 h-10" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white"
    onClick={onClick}
  >
    <ChevronLeft className="w-10 h-10" />
  </div>
);

const Home = () => {
  const { data: banner } = useBanner();
  const { data = [] } = useSlider();
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      {/* Slider */}
      <div className="w-full overflow-hidden">
        {data.length > 0 ? (
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, i) => (
              <div
                key={i}
                className="relative rounded-lg overflow-hidden mt-[2%]"
              >
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={`slide-${i}`}
                  className="w-full h-100 object-cover"
                  loading="lazy"
                  initial={{
                    x: 60,
                    opacity: 0,
                    scale: 1.06,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 20,
                  }}
                />

                {/* 🔥 Overlay (just added this) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">Loading slides...</p>
        )}
      </div>

      {/* Banner Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {banner?.map((el, index) => (
          <motion.div
            key={index}
            className="h-64 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            <img
              className="w-full h-full object-cover"
              src={el.banner_image}
              alt="banner"
            />
          </motion.div>
        ))}
      </div>

      <Products />
    </div>
  );
};

export default Home;
