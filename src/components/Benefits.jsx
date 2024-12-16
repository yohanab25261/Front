import React from "react";

function Benefits() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-12">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Easy to Use
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our platform is designed to be intuitive, allowing for effortless
              use and smooth experience.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18l-6-6m6 6l6-6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Fast Translation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Experience real-time translation that’s both fast and reliable,
              ensuring smooth communication.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Accurate Recognition
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our advanced recognition system ensures the most accurate
              interpretation of sign language gestures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
