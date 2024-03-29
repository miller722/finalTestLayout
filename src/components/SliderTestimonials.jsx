import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SliderTestimonials() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide>
          <div className="testimonials__slider">
            <img
              className="double-quote-bgc"
              src="images/double-quote-bgc.png"
              alt="image"
            />
            <h1 className="testimonials__slider-description">
              Porttitor mattis congue gravida consectetur duis euismod
              imperdiet. Nunc eu amet, adipiscing amet tincidunt mi lectus ut.
              Habitant nullam ut auctor.
            </h1>
            <div className="mt-5 d-flex align-items-center">
              <img
                className="testimonials__avatar"
                src="images/testimonials-avatar-1.png"
                alt="images"
              />
              <h4 className="testimonials__author">
                – Luna, Luna’s Asethetics
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonials__slider">
            <img
              className="double-quote-bgc"
              src="images/double-quote-bgc.png"
              alt="image"
            />
            <h1 className="testimonials__slider-description">
              At semper elementum sapien amet. Orci imperdiet habitant purus sit
              aliquet in. Tortor mauris morbi eget lobortis cras malesuada. Non
              fringilla vulputate sed.
            </h1>
            <div className="mt-5 d-flex align-items-center">
              <img
                className="testimonials__avatar"
                src="images/testimonials-avatar-2.png"
                alt="images"
              />
              <h4 className="testimonials__author">
                – Pan Roman, Chloé Asethetics
              </h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
