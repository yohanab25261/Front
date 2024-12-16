function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-600 py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
          Ready to take your communication to the next level?
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Join us today and start breaking the barriers with real-time sign
          language translation.
        </p>
        <div className="flex justify-center gap-4">
          {/* CTA Button 1 */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-center text-teal-600 bg-white rounded-lg shadow-lg hover:bg-teal-100 focus:ring-4 focus:ring-teal-300"
          >
            Get Started
          </a>

          {/* CTA Button 2 */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-center text-white bg-transparent border-2 border-white rounded-lg shadow-lg hover:bg-white hover:text-teal-600 focus:ring-4 focus:ring-teal-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
