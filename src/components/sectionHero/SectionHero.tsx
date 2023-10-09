import './sectionHero.scss'
import 'swiper/css'
import sliderImg from '../../resources/img/dark-fibo-img.webp'

import { Swiper , SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

function SectionHero() {

  return (
    <section className="hero">
      <div className="container">
        <Swiper
            className="hero__slider"
            speed = {700}
            initialSlide = {2}
            slidesPerView = {2}
            spaceBetween = {30}
            allowTouchMove = {false}
            modules = {[Navigation]}
            navigation = {{
              nextEl: '.hero__slider-next',
              prevEl: '.hero__slider-prev',
            }}
            >
              <button className="hero__slider-prev"/>
              <button className="hero__slider-next"/>
              <SwiperSlide className="hero__slider-item">
                <img src={sliderImg} alt="Fibo Pasta Img" className="hero__slider-img" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-item">
                <img src={sliderImg} alt="Fibo Pasta Img" className="hero__slider-img" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-item">
                <img src={sliderImg} alt="Fibo Pasta Img" className="hero__slider-img" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-item">
                <img src={sliderImg} alt="Fibo Pasta Img" className="hero__slider-img" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-item">
                <img src={sliderImg} alt="Fibo Pasta Img" className="hero__slider-img" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-item">
                <img src={sliderImg} alt="Fibo Pasta Img" className="hero__slider-img" />
              </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default SectionHero;