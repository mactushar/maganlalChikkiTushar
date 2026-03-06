import logo from "../../assets/images/logo.png";
import { PhoneCall, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-[#ED3237] mt-20">
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
        
        
        <div className="space-y-4">
          <img src={logo} alt="logo" className="w-40" />
          <p className="text-sm leading-relaxed text-gray-600">
            A Legacy of 100+ years, sweetening people’s life with tradition and
            authentic taste.
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
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

      
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
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

     
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Contact Info
          </h3>

          <p className="text-sm leading-relaxed text-gray-600">
            Maganlal Chikki Products Pvt Ltd, Shed No. 49A & B, Opp. Monsento
            LICEL, Nangargaon, Lonavala 410401 Dist. Pune
          </p>

          <p className="text-sm">
            <span className="font-medium">Online Store:</span>{" "}
            www.maganlalchikki.in
          </p>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <PhoneCall size={16} className="text-[#ED3237]" />
              <span>+91 2114 274060 | +91 76665 30969</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#ED3237]" />
              <span>sales@maganlalchikki.in</span>
            </div>

            <p className="text-xs text-gray-500">
              Time: 9 AM – 6 PM
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Maganlal Chikki. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;