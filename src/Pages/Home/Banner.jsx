import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.avif";

const Banner = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      <div >
        <img src={b1} className="" />
      </div>

      <div >
        <img src={b2} />
      </div>
      <div className=" ">
        <img src={b3}/>
      </div>
    
    </Carousel>
  );
};

export default Banner;
