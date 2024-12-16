import React, { useState } from "react";

function DemoSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-8">
          See It in Action
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Watch how our platform works and how it can make a difference for you.
          Get started by watching the demo!
        </p>

        {/* Video thumbnail or image */}
        <div className="relative inline-block">
          <img
            className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            src="https://via.placeholder.com/1200x600.png?text=Demo+Video"
            alt="Demo Video"
          />
          <button
            onClick={handleModalToggle}
            className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl"
          >
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.243 12l-4.95 4.95a1.5 1.5 0 01-2.121-2.12L10.38 13H5a1 1 0 110-2h5.38l-3.208-3.83a1.5 1.5 0 012.12-2.12L14.243 12z"
              />
            </svg>
          </button>
        </div>

        {/* Modal for video */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-3xl">
              <button
                onClick={handleModalToggle}
                className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 text-3xl font-bold"
              >
                ×
              </button>
              <iframe
                className="w-full h-80 rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default DemoSection;
