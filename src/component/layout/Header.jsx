import React, { useState, useEffect } from "react";
import {
  Heart,
  ShoppingCart,
  Menu,
  X,
  SunDim,
  Moon,
  Star,
  Sparkles,
  Coffee,
  Gift,
} from "lucide-react";
import Input from "../ui/Input";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navbar = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Shop", link: "/shop" },
  { title: "Contact", link: "/contact" },
];

const crunchyMessages = [
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "Sweet. Crunchy. Legendary.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "Every Bite Full of Crunch.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "Tradition in Every Crunch.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "Pure Jaggery, Premium Nuts, Perfect Crunch.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "India’s Favorite Crunchy Delight.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "Made with Love, Packed with Crunch.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "The Crunch Everyone Loves.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "Authentic Taste, Timeless Crunch.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "A Sweet Crunch in Every Bite.",
  },
  {
    icon: <Heart className="h-5 w-5 mr-2 inline fill-current text-red-500" />,
    text: "Where Tradition Meets Crunch.",
  },
];

const Header = () => {
  const [transparent, setTransparent] = useState(false);
  const location = useLocation();

  const isPath = location.pathname === "/shop";
  console.log(isPath);

  const data = useSelector((store) => store.fav.list);
  console.log("navefav", data);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggle } = useTheme();

  const [message, setMessage] = useState(crunchyMessages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        crunchyMessages[Math.floor(Math.random() * crunchyMessages.length)];
      setMessage(random);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 px-5 md:px-10 py-3 transition-all duration-100 ${
        transparent &&
        "bg-white/80 backdrop-blur-md dark:bg-slate-900/80 shadow-lg"
      }`}
    >
      <div className="flex justify-between items-center gap-6">
        <div className="shrink-0">
          <img src={logo} alt="Logo" className="w-32 md:w-40" />
        </div>

        <div className="hidden md:flex grow justify-center px-4">
          {isPath ? (
            <SearchBar />
          ) : (
            <div className="md:flex items-center justify-center px-4">
  <AnimatePresence mode="wait">
    <motion.div
      key={message.text} 
      initial={{ opacity: 0, x: 50 }}  
      animate={{ opacity: 1, x: 0 }}   
      exit={{ opacity: 0, x: -50 }}    
      transition={{ duration: 0.5 }}
      className="
        flex items-center justify-center
        text-sm md:text-base text-gray-700 dark:text-gray-200
        px-4 py-1
        transition-all duration-500 ease-in-out
      "
    >
      <div className="text-2xl md:text-3xl mr-2">{message.icon}</div>
      <div className="font-semibold">{message.text}</div>
    </motion.div>
  </AnimatePresence>
</div>
          )}
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700 dark:text-gray-200">
            {navbar.map((nav) => (
              <li key={nav.title}>
                <Link to={nav.link} className="hover:text-[#ED3237] transition">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-[#ED3237]">
            <div
              onClick={toggle}
              className="flex justify-center items-center p-2 rounded-full
              bg-gray-100 dark:bg-gray-800 cursor-pointer transition hover:scale-110"
            >
              <SunDim className="w-5 h-5 dark:hidden" />
              <Moon className="w-5 h-5 hidden dark:block" />
            </div>

            <Link to={"/fav"}>
              <Heart
                className={`w-6 h-6 cursor-pointer hover:scale-110 transition ${data?.length ? "fill-red-500 text-red-500" : "text-red-500"} `}
              />
            </Link>
            <Link to={"/cart"}>
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            </Link>

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
