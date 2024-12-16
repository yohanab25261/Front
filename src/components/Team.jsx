import React from "react";

function Team() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-8">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          We’re a passionate group of innovators working together to build
          amazing products and provide you with the best experience.
        </p>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {/* Team Member 1 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              John Doe
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              CEO & Founder
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              John is the visionary behind our company, leading with a passion
              for innovation and customer satisfaction.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              CTO & Co-Founder
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Jane is the technical mastermind, ensuring everything we build is
              cutting-edge and scalable.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Alice Williams
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Lead Designer
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Alice’s creativity brings our product to life, ensuring a visually
              stunning and user-friendly experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
