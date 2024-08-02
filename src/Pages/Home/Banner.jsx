import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.avif";

const Banner = () => {
  return (
    <Carousel>
      <div className="border-4 border-red-400">
        <img src={b1} className="" />
      </div>

      <div className=" border-8 border-red-400">
        <img src={b2} />
      </div>
      <div className=" border-8 border-red-400">
        <img src={b3}/>
      </div>
    
    </Carousel>
  );
};

export default Banner;
