import logo from "../../assets/images/logo.png";
import { PhoneCall, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-[#ED3237] mt-20 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700 dark:text-gray-300">

        {/* Logo */}
        <div className="space-y-4">
          <img src={logo} alt="logo" className="w-40" />
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            A Legacy of 100+ years, sweetening people’s life with tradition and
            authentic taste.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              About
            </li>
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              Shop
            </li>
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Important Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              Disclaimer Policy
            </li>
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              Cancellation Policy
            </li>
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              Terms and Conditions
            </li>
            <li className="hover:text-[#ED3237] cursor-pointer transition">
              Shipping & Delivery Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Contact Info
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Maganlal Chikki Products Pvt Ltd, Shed No. 49A & B, Opp. Monsento
            LICEL, Nangargaon, Lonavala 410401 Dist. Pune
          </p>

          <p className="text-sm">
            <span className="font-medium">Online Store:</span>{" "}
            www.maganlalchikki.in
          </p>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">

            <div className="flex items-center gap-2">
              <PhoneCall size={16} className="text-[#ED3237]" />
              <span>+91 2114 274060 | +91 76665 30969</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#ED3237]" />
              <span>sales@maganlalchikki.in</span>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Time: 9 AM – 6 PM
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Maganlal Chikki. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;