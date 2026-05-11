import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
  return (
    <section className="section">

      <div className="container">

        <h2>Client Stories</h2>

        <Swiper slidesPerView={1}>

          <SwiperSlide>
            <div className="testimonial-card">
              “Outpro delivered excellence beyond expectations.”
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-card">
              “Their professionalism and creativity are unmatched.”
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

    </section>
  );
}