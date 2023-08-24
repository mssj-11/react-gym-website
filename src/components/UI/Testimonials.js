import React from "react";
import "../../styles/testimonials.css";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";

// Import Swiper React components
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
            <h2 className="section_title">Testimonials</h2>

            <Swiper data-aos='zoom-in' data-aos-duration='1500'
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                  <div className="slide_item">
                    <div className="slide_img-01">
                      <img src={avatar01} alt="avatar01" />
                    </div>
                    <h4>Jessica Fernandes</h4>
                    <p>
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slide_item">
                    <div className="slide_img-02">
                      <img src={avatar02} alt="avatar02" />
                    </div>
                    <h4>Jessica Fernandes</h4>
                    <p>
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slide_item">
                    <div className="slide_img-03">
                      <img src={avatar01} alt="avatar03" />
                    </div>
                    <h4>Jessica Fernandes</h4>
                    <p>
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                    </p>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
      </section>
    </>
  );
}