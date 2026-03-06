import React, { useRef } from "react";
import Slider from "react-slick";
import { useSlider } from "../hooks/useSlider";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useBanner } from "../hooks/useBanner";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl select-none"
    onClick={onClick}
  >
    <ChevronRight className="w-10 h-10" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white text-3xl select-none"
    onClick={onClick}
  >
    <ChevronLeft className="w-10 h-10" />
  </div>
);

const Home = () => {
  const { data: banner, isFetching: bannerFetching } = useBanner();

  const { data = [] } = useSlider();
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
    fade: true, // ✅ fade effect
    cssEase: "linear", // smooth fade transition
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="">
        <div className="w-full overflow-hidden">
          {data.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {data.map((item, i) => (
                <div key={i} className="rounded-lg overflow-hidden mt-[2%]">
                  <img
                    src={item.image}
                    alt={`slide-${i}`}
                    className="w-full h-100 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center text-gray-500">Loading slides...</p>
          )}
        </div>

        <div className="flex w-full gap-10 py-10"> 
          {banner?.map((el, index) => {
            return (
              <div key={index} className="w-1/3 h-full rounded-lg overflow-hidden" >
                <img className="w-full h-full object-cover " src={el.banner_image}></img>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
