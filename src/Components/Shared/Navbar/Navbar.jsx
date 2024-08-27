import { NavLink } from "react-router-dom";
import logoVideo from "../../../../public/logoVideo.mp4";

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
          <video
            style={{ height: "6rem" }}
            className="videoTag hidden lg:block"
            autoPlay
            loop
            muted
          >
            <source src={logoVideo} type="video/mp4" />
          </video>

          {/*  */}
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
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
            </li>
          </ul>
        </div> */}
        <div className="navbar-end gap-4">

          <div className="gap-4 flex">
              <NavLink
                to="/login"
                className="btn bg-[#3b56d0] text-white font-semibold text-lg hover:text-black"
                style={{
                  background:
                    "linear-gradient(90deg, bg-teal-500 0%, bg-blue-500 35%, bg-blue-500 100%)",
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn bg-[#3b56d0] text-white font-semibold text-lg hover:text-black"
                style={{
                  background:
                    "linear-gradient(90deg, bg-teal-500 0%, bg-blue-500 35%, bg-blue-500 100%)",
                }}
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
