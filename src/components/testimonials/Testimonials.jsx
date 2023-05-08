import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
  <section>
   
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>


      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt="AvatarOne" />
          </div>
          <h5 className='client__image'>Vic Santos</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsa culpa sunt harum id aliquid et laborum modi, enim omnis, dicta expedita, pariatur odio accusantium. Magni unde ratione maiores laborum.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt="AvatarTwo" />
          </div>
          <h5 className='client__image'>Vic Santos</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsa culpa sunt harum id aliquid et laborum modi, enim omnis, dicta expedita, pariatur odio accusantium. Magni unde ratione maiores laborum.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt="AvatarThree" />
          </div>
          <h5 className='client__image'>Vic Santos</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsa culpa sunt harum id aliquid et laborum modi, enim omnis, dicta expedita, pariatur odio accusantium. Magni unde ratione maiores laborum.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt="AvatarFour" />
          </div>
          <h5 className='client__image'>Vic Santos</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsa culpa sunt harum id aliquid et laborum modi, enim omnis, dicta expedita, pariatur odio accusantium. Magni unde ratione maiores laborum.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials