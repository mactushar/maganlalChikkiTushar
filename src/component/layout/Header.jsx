import React, { useState } from "react";
import { Heart, ShoppingCart, Menu, X, SunDim, Moon } from "lucide-react";
import Input from "../ui/Input";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const navbar = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Shop", link: "/shop" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggle } = useTheme();

  const SearchBar = () => (
    <div className="flex w-full max-w-md">
      <Input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600
        rounded-l-md text-gray-700 dark:text-gray-200
        bg-white dark:bg-gray-800
        focus:outline-none"
        placeholder="Search here .."
      />
      <button className="bg-[#ED3237] text-white px-4 py-2 rounded-r-md whitespace-nowrap">
        Search
      </button>
    </div>
  );

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg px-5 md:px-10 py-3 transition-colors ">

      <div className="flex justify-between items-center gap-6">

        {/* Logo */}
        <div className="shrink-0">
          <img src={logo} alt="Logo" className="w-32 md:w-40" />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex grow justify-center px-4">
          <SearchBar />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700 dark:text-gray-200">
            {navbar.map((nav) => (
              <li key={nav.title}>
                <Link
                  to={nav.link}
                  className="hover:text-[#ED3237] transition"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4 text-[#ED3237]">

            {/* Theme Toggle */}
            <div
              onClick={toggle}
              className="flex justify-center items-center p-2 rounded-full
              bg-gray-100 dark:bg-gray-800 cursor-pointer transition hover:scale-110"
            >
              <SunDim className="w-5 h-5 dark:hidden" />
              <Moon className="w-5 h-5 hidden dark:block" />
            </div>

            <Heart className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:scale-110 transition" />

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#ED3237]" />
              ) : (
                <Menu className="w-6 h-6 text-[#ED3237]" />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-white dark:bg-gray-900 shadow-md rounded-md p-4 space-y-4 transition-colors">

          <SearchBar />

          <ul className="flex flex-col gap-3 font-medium text-gray-700 dark:text-gray-200 border-t dark:border-gray-700 pt-3">
            {navbar.map((nav) => (
              <li key={nav.title}>
                <Link
                  to={nav.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[#ED3237]"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  );
};

export default Header;