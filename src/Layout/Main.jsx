import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="pb-[8rem] bg-opacity-45">
        <Navbar></Navbar>
      </div>{" "}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
