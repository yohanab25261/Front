import React from "react";
import Navbar from "../components/Navabar";
import Footer from "../components/Footer";

function Faq() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 text-white min-h-screen">
        {/* Hero Section */}
        <div className="text-center py-16 px-4">
          <h1 className="text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Find answers to common questions below. If you have more queries,
            feel free to contact us.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-screen-lg mx-auto px-4 py-12">
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                What is this platform about?
              </h3>
              <p className="mt-2 text-gray-300">
                This platform is designed to provide users with an intuitive
                experience for learning and connecting through sign language
                translations.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                How does the translator work?
              </h3>
              <p className="mt-2 text-gray-300">
                The translator uses a webcam and AI technology to recognize hand
                gestures and convert them into text or voice in real-time.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Is this service free?</h3>
              <p className="mt-2 text-gray-300">
                Yes, the core features of the platform are free to use. Premium
                features may be available for advanced functionalities.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Which languages are supported?
              </h3>
              <p className="mt-2 text-gray-300">
                The platform currently supports American Sign Language (ASL)
                with plans to expand to other languages in the future.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Can I contribute to the project?
              </h3>
              <p className="mt-2 text-gray-300">
                Absolutely! We welcome contributions from developers, designers,
                and language experts. Reach out to us for collaboration
                opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-600 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-200 mb-6">
            Feel free to reach out to our support team for more information.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
