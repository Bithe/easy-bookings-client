const Footer = () => {
  return (
    <div className="">
      <footer>
        <div className="bg-green-200  py-4 text-black-400">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-8 my-4 w-full xl:w-1/5">
                <a href="/" className="block w-20 mb-10">
                <img src="https://i.ibb.co/Qmtnqxd/02-pins-animated.gif"></img>
                </a>
                <p className="text-justify">
                  Tailwindow is a collection of UI Components created using
                  Tailwind CSS Framework. The UI Components gives you all of the
                  building blocks you need to build any designs without any
                  annoying opinionated styles you have to fight to override.
                </p>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-600">
                    Company
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-600">
                    Blog
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Getting Started With HTML and CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      What Is Flex And When to Use It?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      How TailwindCSS Can Help Your Productivity?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      5 Tips to Make Responsive Website
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      See More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-green-600">
                    Connect With Us
                  </h2>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8s-26.8-12-26.8-26.8 12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.7-9.9-67.4-36.2-92.8-26.5-26.5-57.1-34.5-92.8-36.2-36.5-2.1-145.9-2.1-182.4 0-35.7 1.7-67.4 9.9-92.8 36.2-26.5 26.5-34.5 57.1-36.2 92.8-2.1 36.5-2.1 145.9 0 182.4 1.7 35.7 9.9 67.4 36.2 92.8 26.5 26.5 57.1 34.5 92.8 36.2 36.5 2.1 145.9 2.1 182.4 0 35.7-1.7 67.4-9.9 92.8-36.2 26.5-26.5 34.5-57.1 36.2-92.8 2.1-36.5 2.1-145.8 0-182.4zm-48.5 220.7c-7.8 19.7-22.9 34.8-42.6 42.6-29.5 11.7-99.5 9-132.4 9s-102.9 2.6-132.4-9c-19.7-7.8-34.8-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.4s-2.6-102.9 9-132.4c7.8-19.7 22.9-34.8 42.6-42.6 29.5-11.7 99.5-9 132.4-9s102.9-2.6 132.4 9c19.7 7.8 34.8 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.4s2.7 102.9-9 132.4z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 90.2 225.9 208 240v-168h-62v-72h62v-56c0-61.1 36.6-94.6 92.7-94.6 26.9 0 55.3 4.8 55.3 4.8v60h-31.2c-30.8 0-40.4 19.1-40.4 38.7v47.1h68.7l-11 72h-57.7v168c117.8-14.1 208-116.5 208-240z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-300 py-4 text-black-400">
          <div className="container mx-auto text-center">
            &copy;2024 EasyBooking. All rights reserved. Crafted with ♥ by
            Farzana
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
