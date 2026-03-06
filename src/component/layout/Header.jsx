import React from "react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Input from "../ui/Input";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const navbar = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
const Header = () => {
  return (
    <div className="flex justify-between p-2 items-center bg-white shadow-lg px-10">
      <div className="flex justify-center items-center">
        <div className="w-40">
          <img src={logo} alt="" />
        </div>

        <div>
          <ul className="flex gap-8 ">
            {navbar.map((nav, index) => {
              return (
                <li key={nav.title}>
                  <Link to={nav.link}>{nav.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="">
        <Input
          type={"text"}
          className="w-64 px-2 py-1 border rounded-md border-[#ccc]"
          placeholder={"search here .."}
        />
        <button className=" bg-[#ED3237] text-white px-2 py-1 border border-[#ED3237] -m-2 rounded-r-md">
          Search
        </button>
      </div>
      <div className="flex space-x-6 text-[#ED3237] ">
        <div>
          <Heart className=" " />
        </div>
        <div>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
