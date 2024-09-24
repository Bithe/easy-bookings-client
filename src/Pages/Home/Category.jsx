import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";
import c5 from "../../assets/c5.jpg";
import c6 from "../../assets/c6.jpg";
import c7 from "../../assets/c7.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Once you find the perfect flight, simply select it"}
        headiing={"Select Your Place"}
      ></SectionTitle>

      <section>
        <Swiper
          speed={3000}
          autoplay={{
            delay: 3000, // Time delay between transitions in milliseconds
            disableOnInteraction: false, // Autoplay won't be disabled after user interaction
          }}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper  "
        >
          <SwiperSlide className="pb-24 ">
            <img src={c1} className=" "></img>
            <h3 className="lg:text-3xl text-base text-white font-bold lg:font-extrabold uppercase text-center lg:-mt-24 -mt-10">
              Beach
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={c2} className=""></img>
            <h3 className="lg:text-3xl text-base text-white font-bold lg:font-extrabold uppercase text-center lg:-mt-24 -mt-10">
            Windmills
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={c3} className=""></img>
            <h3 className="lg:text-3xl text-base text-white font-bold lg:font-extrabold uppercase text-center lg:-mt-24 -mt-10">
            Modern

            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={c4} className=""></img>
            <h3 className="lg:text-3xl text-base text-white font-bold lg:font-extrabold uppercase text-center lg:-mt-24 -mt-10">
            Countryside

            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={c5} className=""></img>
            <h3 className="lg:text-3xl text-base text-white font-bold lg:font-extrabold uppercase text-center lg:-mt-24 -mt-10">
            Pools
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={c6} className=""></img>
            <h3 className="lg:text-3xl text-base text-white font-bold lg:font-extrabold uppercase text-center lg:-mt-24 -mt-10">
            Islands

            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={c7} className=""></img>
            <h3 className="lg:text-3xl text-base text-white font-bold lg:font-extrabold uppercase text-center lg:-mt-24 -mt-10">
              Beach
            </h3>
          </SwiperSlide>
        </Swiper>{" "}
      </section>
    </div>
  );
};

export default Category;
