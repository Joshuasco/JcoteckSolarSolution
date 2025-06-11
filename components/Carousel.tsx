'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function Carousel() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
        }
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="bg-gray-100 p-8 rounded-xl h-96 flex flex-col justify-center items-center">
          {/* Your slide content */}
        </div>
      </SwiperSlide>
      {/* Additional slides */}
    </Swiper>
  )
}