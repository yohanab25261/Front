import React from "react";
import Navbar from "../components/Navabar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <div className="bg-gray-800 text-white">
          <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
            <p className="mt-4 text-lg md:text-xl">
              We are dedicated to creating a transformative solution for
              accessible sign language translation.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8 md:text-4xl">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl md:px-16">
            Our mission is to bridge communication gaps between the hearing and
            non-hearing communities by leveraging innovative technology. Through
            accessible and reliable sign language translation, we strive to
            empower individuals and foster inclusivity in society.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 md:text-4xl">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-24 h-24 rounded-full mb-4"
                  src="https://via.placeholder.com/150"
                  alt="Team Member 1"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>

              {/* Team Member 2 */}
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-24 h-24 rounded-full mb-4"
                  src="https://via.placeholder.com/150"
                  alt="Team Member 2"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>

              {/* Team Member 3 */}
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-24 h-24 rounded-full mb-4"
                  src="https://via.placeholder.com/150"
                  alt="Team Member 3"
                />
                <h3 className="text-xl font-semibold">Alex Johnson</h3>
                <p className="text-gray-600">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Join Us in Our Journey
            </h2>
            <p className="mt-4 text-lg md:text-xl">
              Be part of the change. Explore how you can contribute to creating
              an inclusive world.
            </p>
            <button className="mt-6 px-6 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100">
              Get Involved
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
