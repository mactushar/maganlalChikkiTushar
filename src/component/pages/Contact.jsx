import React from "react";

const Contact = () => {
  return (
    <div className="dark:bg-[#0f172a] text-gray-800 dark:text-gray-100 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-500 dark:text-gray-400">
            We'd love to hear from you. Send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* CONTACT FORM */}
          <div className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* MAP + CONTACT INFO */}
          <div className="space-y-6">

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe
                className="w-full h-[300px] dark:invert dark:hue-rotate-180"
                src="https://www.google.com/maps?q=Pune&output=embed"
                loading="lazy"
              />
            </div>

            {/* CONTACT INFO */}
            <div className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 space-y-4">

              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Pune, Maharashtra, India
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  support@example.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  +91 98765 43210
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;