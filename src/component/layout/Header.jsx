import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, Menu, X, SunDim, Moon } from "lucide-react";
import Input from "../ui/Input";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const navbar = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Shop", link: "/shop" },
  { title: "Contact", link: "/contact" },
];

const crunchyMessages = [
  { text: "❤️ Sweet. Crunchy. Legendary." },
  { text: "❤️ Every Bite Full of Crunch." },
  { text: "❤️ Tradition in Every Crunch." },
  { text: "❤️ Pure Jaggery, Premium Nuts, Perfect Crunch." },
  { text: "❤️ India’s Favorite Crunchy Delight." },
];

const Header = () => {
  const [transparent, setTransparent] = useState(false);
 

  const fav = useSelector((store) => store.fav.list);

  const cart = useSelector((store) => store.cart.cart);

  const totalQty = cart.length;

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
      setTransparent(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky shadow-lg top-0 z-50 px-5 md:px-10 py-3 transition-all duration-100 border-b border-gray-200 dark:border-slate-700 ${
        transparent && "bg-white/80 backdrop-blur-md dark:bg-slate-900/80"
      }`}
    >
      <div className="flex justify-between items-center gap-6">
        <img src={logo} alt="Logo" className="w-32 md:w-48" />

        <div className="hidden md:flex grow justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={message.text}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 dark:text-gray-200 font-semibold"
            >
              {message.text}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-5">
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700 dark:text-gray-200">
            {navbar.map((nav) => (
              <li key={nav.title}>
                <Link to={nav.link} className="hover:text-[#ED3237]">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-[#ED3237]">
            <div
              onClick={toggle}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 cursor-pointer"
            >
              <SunDim className="w-5 h-5 dark:hidden" />
              <Moon className="w-5 h-5 hidden dark:block" />
            </div>

            <Link to={"/fav"}>
              <Heart
                className={`w-6 h-6 ${
                  fav?.length ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Link>

            <Link to={"/cart"} className="relative">
              <ShoppingCart className="w-6 h-6 cursor-pointer" />

              <AnimatePresence>
                {totalQty > 0 && (
                  <motion.span
                    key={totalQty}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white 
                    text-xs w-5 h-5 flex items-center justify-center 
                    rounded-full font-semibold"
                  >
                    {totalQty}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-white dark:bg-gray-900 p-4 rounded-md space-y-4">
          

          <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-200">
            {navbar.map((nav) => (
              <li key={nav.title}>
                <Link to={nav.link} onClick={() => setMobileMenuOpen(false)}>
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
