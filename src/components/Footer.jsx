function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              We are dedicated to breaking down communication barriers with
              real-time sign language translation.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.073c0-5.522-4.478-10-10-10S2 6.551 2 12.073C2 17.712 5.836 22 10.5 22c2.243 0 4.289-1.43 5.077-3.443h1.536c.669 0 1.21-.528 1.21-1.171v-2.662c0-.643-.541-1.171-1.21-1.171h-1.657c-.207-.689-.56-1.377-.991-2.02.368-.013.753-.02 1.126-.02.172 0 .341.018.507.052v-2.46c0-.643-.541-1.171-1.21-1.171h-2.457c-.668 0-1.209.528-1.209 1.171v2.457c-.182-.037-.366-.057-.553-.057-.053 0-.106.006-.159.007v2.429c0 .643.541 1.171 1.21 1.171h1.433c-.215.742-.34 1.542-.34 2.329 0 .172.024.341.06.507-.46.32-.872.698-1.212 1.124-.558-.253-1.16-.459-1.757-.613-.315-.078-.635-.166-.95-.243-.369-.109-.755-.221-1.132-.346-.343-.091-.684-.19-1.021-.288-.281-.087-.569-.182-.853-.274-.56-.167-.823-.66-.613-1.163-.647-.544-1.045-.923-1.362-1.44-.029-.473.14-.892.397-1.167.401-.379.747-.808 1.118-1.217-.74-.06-1.448-.159-2.169-.291.646-.538.944-.944 1.237-1.597.133-.325.251-.655.365-.989-.5-.379-.997-.717-1.497-1.086-.63-.54-1.095-.934-1.443-1.55-.248-.432-.383-.91-.384-1.426.027-.236.144-.469.251-.703C13.739 2.609 11.268 2 8.5 2 3.978 2 0 6.518 0 12.073c0 5.522 4.478 10 10 10 2.175 0 4.184-.673 5.858-1.805-.512-.685-.868-1.424-.99-2.243-.682.295-1.435.433-2.209.433z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.643 4.937c-.882.391-1.83.653-2.829.773 1.017-.607 1.8-1.569 2.17-2.718-.951.562-2.006.967-3.127 1.18-.897-.957-2.176-1.552-3.595-1.552-3.084 0-5.599 2.615-5.599 5.853 0 .459.053.907.153 1.334-4.062-.177-7.653-2.144-10.058-5.12-.422.722-.664 1.56-.664 2.46 0 1.698.861 3.192 2.146 4.073-1.014-.033-1.98-.31-2.818-.773v.078c0 2.366 1.62 4.33 3.774 4.779-1.289.38-2.655.428-4.026.152 1.122 3.23 4.336 5.621 8.12 5.678-2.998 2.346-6.772 3.538-10.383 3.538-1.748 0-3.46-.135-5.131-.402 3.36 2.153 7.338 3.414 11.533 3.414 13.832 0 21.429-11.168 21.429-20.884 0-.318-.008-.635-.023-.951 1.473-1.054 2.76-2.35 3.707-3.89z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.05 20.45H3.73v-9.4h3.32v9.4zm-1.66-10.69h-.02c-2.12 0-3.51-1.42-3.51-3.2s1.39-3.2 3.51-3.2c2.1 0 3.5 1.42 3.5 3.2s-1.4 3.2-3.5 3.2zm14.63 10.69h-3.32v-5.4c0-1.29-.03-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.89v5.48h-3.32v-9.4h3.19v1.28h.05c.45-.85 1.53-1.74 3.15-1.74 3.37 0 3.99 2.22 3.99 5.1v6.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
