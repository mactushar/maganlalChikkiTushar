import React, { useEffect, useState } from "react";
import { getBanner,getGallry } from "../utils/getAbout";

import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const [index, setIndex] = useState(0);

  const { data = [], isFetching } = useQuery({
    queryKey: ["slider"],
    queryFn: getGallry,
  });

  const { data:banner = [], isFetching:bannerFetching } = useQuery({
    queryKey: ["banner"],
    queryFn: getBanner,
  });

 console.log(banner)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data?.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [data.length]);

  const next = () => {
    setIndex((prev) => (prev + 1) % data?.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + data?.length) % +data?.length);
  };

  return (
    <>
      <div className="relative py-10">
        <div onClick={prev} className="">
          <ChevronLeft className="absolute left-0 top-1/2  -translate-y-1/2 h-10 w-10  text-white flex justify-center items-center" />
        </div>
        <div>
          <img
            src={data[index]?.image}
            alt=""
            className="transition-opacity duration-500"
          />
        </div>
        <div onClick={next}>
          <ChevronRight className="absolute right-0 top-1/2  -translate-y-1/2  w-10 h-10 text-white  flex justify-center items-center" />
        </div>
      </div>
      <div>
        {banner.map((el)=>{
          return <div></div>
        })}
      </div>
    </>
  );
};

export default Home;
