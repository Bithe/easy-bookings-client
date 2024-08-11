import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';
import c6 from '../../assets/c6.jpg';
import c7 from '../../assets/c7.jpg';

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="pb-24 ">
            <img src={c1} className=" "></img>
            <h3 className="text-3xl text-white font-extrabold uppercase text-center -mt-24">Beach</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={c2} className=""></img>
            <h3 className="text-3xl text-white font-extrabold uppercase text-center -mt-24">Beach</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={c3} className=""></img>
            <h3 className="text-3xl text-white font-extrabold uppercase text-center -mt-24">Beach</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={c4} className=""></img>
            <h3 className="text-3xl text-white font-extrabold uppercase text-center -mt-24">Beach</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={c5} className=""></img>
            <h3 className="text-3xl text-white font-extrabold uppercase text-center -mt-24">Beach</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={c6} className=""></img>
            <h3 className="text-3xl text-white font-extrabold uppercase text-center -mt-24">Beach</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={c7} className=""></img>
            <h3 className="text-3xl text-white font-extrabold uppercase text-center -mt-24">Beach</h3>
        </SwiperSlide>
      
       
      </Swiper>{" "}
    </div>
  );
};

export default Category;
