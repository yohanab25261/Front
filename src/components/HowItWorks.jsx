import React from "react";

function HowItWorks() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 mb-12">
          How It Works
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-24">
          {/* Step 1 */}
          <div className="flex flex-col items-center mb-16 lg:mb-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-pink-600 p-4 mb-6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v10m0 0l4-4m-4 4l-4-4M4 13l4 4m0 0l-4 4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Step 1: Activate Camera
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Grant camera permissions and position yourself for accurate
              gesture recognition.
            </p>
          </div>

          {/* Connecting Line */}
          <div className="hidden lg:block w-1/4 h-0.5 bg-gray-300 opacity-40" />

          {/* Step 2 */}
          <div className="flex flex-col items-center mb-16 lg:mb-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-600 p-4 mb-6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 7v4m0 0l3-3m-3 3l-3-3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Step 2: Start Signing
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Use hand gestures to perform sign language, and the system will
              recognize them.
            </p>
          </div>

          {/* Connecting Line */}
          <div className="hidden lg:block w-1/4 h-0.5 bg-gray-300 opacity-40" />

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-red-600 p-4 mb-6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 0l3-3m-3 3l-3-3"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Step 3: Get Translation
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Receive real-time translation as text or audio, helping you
              understand the sign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
