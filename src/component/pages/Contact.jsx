import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 border border-gray-100 dark:border-gray-700">

          <h2 className="text-3xl font-semibold mb-8">
            Send us a message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 
              bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 
              bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 
              bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition"
            >
              Send Message
            </button>

          </form>
        </div>


        {/* CONTACT DETAILS */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 border border-gray-100 dark:border-gray-700">

          <h2 className="text-3xl font-semibold mb-8">
            Contact Details
          </h2>

          <div className="space-y-6">

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="text-red-500 mt-1" size={22} />
              <div>
                <p className="font-semibold">
                  Maganlal Chikki Products Pvt Ltd
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Shed No. 49A & B, Opp. Monsento LICEL, Nangargaon,
                  Lonavala 410401 Dist. Pune
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="text-red-500" size={22} />
              <p className="text-gray-600 dark:text-gray-300">
                +91 2114 274060 | +91 7666530969
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="text-red-500" size={22} />
              <p className="text-gray-600 dark:text-gray-300">
                sales@maganlalchikki.in
              </p>
            </div>

            {/* Time */}
            <div className="flex items-center gap-4">
              <Clock className="text-red-500" size={22} />
              <p className="text-gray-600 dark:text-gray-300">
                9 AM To 6 PM (Closed Thursday)
              </p>
            </div>

            {/* Website */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300">
              Online Store:
              <span className="font-medium text-gray-900 dark:text-white ml-2">
                www.maganlalchikki.in
              </span>
            </div>

          </div>
        </div>

      </div>


      {/* MAP SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.402639949902!2d73.412399!3d18.744236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801d47b0b8a8f%3A0x125b90dcecb8f1b1!2sMaganlal%20Chikki!5e0!3m2!1sen!2sin!4v1710000000000"
            className="w-full h-105 lg:h-150"
            loading="lazy"
            allowFullScreen
            title="Google Map Location"
          ></iframe>

        </div>

      </div>

    </div>
  );
};

export default Contact;