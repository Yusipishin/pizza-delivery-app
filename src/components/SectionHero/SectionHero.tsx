import "../../styles/slider.scss";
import "swiper/css";

import sliders from "../../static/sliders";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { memo } from "react";

const SectionHero = memo(() => {
  return (
    <section className="hero mb-[71px]">
      <div className="container">
        <Swiper
          speed={700}
          initialSlide={2}
          slidesPerView={2}
          spaceBetween={30}
          allowTouchMove={false}
          modules={[Navigation]}
          navigation={{
            nextEl: ".hero__slider-next",
            prevEl: ".hero__slider-prev",
          }}
        >
          <button
            className="hero__slider-prev"
            aria-label="Показать прошлый слайд"
          />
          <button
            className="hero__slider-next"
            aria-label="Показать следующий слайд"
          />
          {sliders.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                key={i}
                alt="Fibo Pasta Img"
                className="hero__slider-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

export default SectionHero;
