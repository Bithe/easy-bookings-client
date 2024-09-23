import { NavLink } from "react-router-dom";
// import logoVideo from "../../../../public/logoVideo.mp4";

const Navbar = () => {
  return (
    <div className="container mx-auto  lg:px-20 lg:py-2 fixed bg-opacity-50 z-10 bg-white">
      <div className="navbar ">
        <div className="navbar-start">
          
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          {/* LOGO VIDEO */}
          {/* <video
            style={{ height: "6rem" }}
            className="videoTag hidden lg:block"
            autoPlay
            loop
            muted
          >
            <source src={logoVideo} type="video/mp4" />
          </video> */}

          {/*  */}
          <h1 className="font-extrabold text-4xl ">GoWheel</h1>
        </div>

        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1 flex justify-between">
            <li>
              <a href="/" className="lg:text-2xl mr-4 font-bold  hover:bg-[#161616] hover:text-white">Home</a>
            </li>
            <li>
              <a href="/" className="lg:text-2xl font-bold hover:bg-[#161616] hover:text-white">About</a>
            </li>
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end gap-4">

          <div className="gap-4 flex">
              <NavLink
                to="/login"
                // className="btn font-semibold text-lg hover:text-black
                
                // tracking-wide bg-green-400 text-white-500 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                className="uppercase py-2 px-4 rounded-lg bg-[#ff4c30] border-2 border-transparent text-white text-md mr-4 hover:bg-[#161616] font-bold"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                // className="btn font-semibold text-lg hover:text-black
                // tracking-wide bg-green-400 text-white-500 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-non"
                 className="uppercase py-2 px-4 rounded-lg bg-[#ff4c30] border-2 border-transparent text-white text-md mr-4 hover:bg-[#161616] font-bold"
              >
                Register
              </NavLink>{" "}
            </div>


          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
