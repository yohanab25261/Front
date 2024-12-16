import React from "react";

function Testimonials() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center mb-6">
              <img
                className="w-16 h-16 rounded-full border-4 border-teal-500"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="User 1"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Emily Johnson
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  Software Engineer
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              "This platform has truly transformed the way we communicate. The
              real-time recognition and translation are amazing. I would highly
              recommend it!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center mb-6">
              <img
                className="w-16 h-16 rounded-full border-4 border-teal-500"
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt="User 2"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  John Smith
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  Product Designer
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              "I’ve used many tools before, but this one is by far the most
              intuitive and easy to use. I can communicate effectively in no
              time!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center mb-6">
              <img
                className="w-16 h-16 rounded-full border-4 border-teal-500"
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="User 3"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Sarah Lee
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  UX Researcher
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              "The accuracy of the translation is impressive. It's helped me to
              bridge communication gaps and work more efficiently with my team."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
