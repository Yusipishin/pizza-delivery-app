import './slider/slider.scss'
import 'swiper/css'
import sliderImg from '../assets/img/dark-fibo-img.webp'

import { Swiper , SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

function SectionHero() {
  const pictures = [sliderImg, sliderImg, sliderImg, sliderImg, sliderImg, sliderImg]

  return (
    <section className="hero mb-[71px]">
      <div className="container">
        <Swiper
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
              {pictures.map((img, i) => (
                <SwiperSlide className="hero__slider-item">
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
  )
}

export default SectionHero;