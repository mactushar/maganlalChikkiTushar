import React from "react";
import { getAbout } from "../utils/getAbout";

import { useQuery } from "@tanstack/react-query";

const About = () => {
  const { isFetching, isLoading, data } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });

  if (data) {
    console.log(data[0]);
  }
  if (isFetching) {
    return <h1>loading ...</h1>;
  }
  return (
    <>
    <div className="p-8">
      <div className="flex p-4 w-full justify-center items-center">
        <div className="flex-1">
          <img src={data[0]?.image} className="w-200" alt="" />
        </div>
        <div className="flex-1">
          <p className="p-4 px-8 text-xl font-semibold">{data[0].title}</p>
          <p className="px-8 leading-7.5"> {data[0]?.description}</p>
        </div>
      </div>
      <div className="py-4">
        <p className="font-semibold">CLIENT SATISFACTION</p>
        <p>{data[0].client_satisfaction}</p>
      </div>

      <div className="pb-4 ">
        <p className="font-semibold">OUR TEAM</p>
        <p>{data[0].our_team}</p>
      </div>
      </div>
    </>
  );
};

export default About;
