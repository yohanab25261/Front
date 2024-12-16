import React from "react";
import Navbar from "../components/Navabar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 text-white min-h-screen">
        {/* Hero Section */}
        <div className="text-center py-16 px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            We'd love to hear from you! Reach out to us for any inquiries or
            support.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-screen-lg mx-auto px-4 py-12">
          <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            {/* Subject */}
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-700 py-12">
          <div className="max-w-screen-lg mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
            <p className="text-gray-300 mb-6">
              You can also reach out to us via the following:
            </p>
            <ul className="space-y-4 text-lg">
              <li>
                📞 <span className="font-semibold">Phone:</span> +123 456 7890
              </li>
              <li>
                📧 <span className="font-semibold">Email:</span>{" "}
                contact@yourcompany.com
              </li>
              <li>
                📍 <span className="font-semibold">Address:</span> 1234 Main
                Street, Anytown, USA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
