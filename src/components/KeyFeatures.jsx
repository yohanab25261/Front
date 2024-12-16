import React from "react";

function KeyFeatures() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl px-6 mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
          Key Features
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c1.104 0 2-.672 2-1.5S13.104 5 12 5s-2 .672-2 1.5S10.896 8 12 8zm0 0c2.28 0 4.046-1.03 4.798-2.5M12 8c-2.28 0-4.046-1.03-4.798-2.5M12 8v8.5m-1.795 3.005l.92-.41a4.992 4.992 0 011.752 0l.92.41M20.25 8.5c1.519 3.978-1.26 7.5-6.75 7.5s-8.269-3.522-6.75-7.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Real-Time Translation
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Instantly translate sign language into text or speech using your
              webcam.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87m9 0a4 4 0 00-3 0m-6 0a4 4 0 00-3 0m6 0v2m0-6v-3m0 3v2m0 4H4m0 0v-2a4 4 0 013-3.87m12 0a4 4 0 00-3-3.87M4 7V3m0 4a4 4 0 013-3.87m9 0A4 4 0 0016 7m0-4a4 4 0 013 3.87M4 7v6m16-6v6m-8 3h2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Multiple Language Support
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Supports various sign languages including ASL, BSL, and more.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 01-.88-7.906M9 13v-3m6 3v-3m-3 6v2m6-12V5a2 2 0 00-2-2H5a2 2 0 00-2 2v1"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Camera Integration
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Use your device's camera to seamlessly translate sign language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
