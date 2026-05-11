import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const portfolio = [
  {
    img: "https://plus.unsplash.com/premium_photo-1683141540201-e7604f2eeceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwc3VtbWl0fGVufDB8fDB8fHww",
    title: "Corporate Summit"
  },

  {
    img: "https://images.unsplash.com/photo-1758227231013-8cff978f1dae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwb3J0cyUyMGFyZW5hJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    title: "Sports Arena Event"
  },

  {
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    title: "Luxury Networking"
  },

  {
    img: "https://images.unsplash.com/photo-1774557937425-2572f7a5a587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhbmQlMjBhY3RpdmF0aW9ufGVufDB8fDB8fHww",
    title: "Brand Activation"
  }
];

export default function Portfolio() {
  return (
    <section className="section">

      <div className="container">

        <h2>Featured Events</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1.3}
          centeredSlides={true}
          loop={true}
        >

          {portfolio.map((item, i) => (
            <SwiperSlide key={i}>

              <div className="portfolio-card">

                <img
                  src={item.img}
                  className="portfolio-img"
                />

                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}