'use client'

import React, { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'

const slides = [
  {
    id: 1, 
    title: 'Donut Country', 
    imgSrc: 'image-02-432x228.jpg', 
    contribution: ['Design', 'Branding']
  },
  {
    id: 2, 
    title: 'Furni', 
    imgSrc: 'image-03-432x238.jpg', 
    contribution: ['Design']
  },
  {
    id: 3, 
    title: 'uDesign', 
    imgSrc: 'image-04-432x228.jpg', 
    contribution: ['Design', 'Branding', 'Logo']
  },
  {
    id: 4, 
    title: 'ProKnife', 
    imgSrc: 'image-05-432x238.jpg', 
    contribution: ['Design', 'Branding']
  },
  {
    id: 5, 
    title: 'Floral Paradise', 
    imgSrc: 'image-06-432x228.jpg', 
    contribution: ['Design', 'Branding']
  },
  {
    id: 6, 
    title: 'Poultrix', 
    imgSrc: 'image-07-432x238.jpg', 
    contribution: ['Design']
  }
]

const LatestWorks = () => {

  const swiper = useSwiper()
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  // Function to handle slide change from external buttons
  const handleSlideChange = (direction: string) => {

    if (!swiper) {
      return;
    }

    const newIndex = direction === "next" ? 
      swiper.activeIndex + 1 : swiper.activeIndex - 1;

    // Check for boundaries and set new active index
    if (newIndex >= 0 && newIndex < 6) {
      setActiveSlideIndex(newIndex);
      swiper.slideTo(newIndex, 300);
    }
  };

  return (
    <section className='p-4 bg-offWhite'>
      <h2 className='text-2xl font-bold py-4 text-center'>Latest Works</h2>
      <p className='py-2 leading-8 text-gray-600 text-center'>Check out my recent and popular design & branding projects I have worked on.</p>
      <div>
        {/* arrow icons */}
        <div className='p-4 flex gap-4'>
          <div 
            className={`prev-btn p-3 rounded-full hover:bg-white text-lightDark hover:text-orange drop-shadow-xl`}
            onClick={() => handleSlideChange("prev")}>
            <ArrowLeft/>
          </div>
          <div 
            className={`next-btn p-3 rounded-full hover:bg-white text-lightDark hover:text-orange drop-shadow-xl`}
            onClick={() => handleSlideChange("next")}>
            <ArrowRight/>
          </div>
        </div>
        <Swiper 
          modules={[Navigation]} 
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          spaceBetween={50}
          
          slidesPerView={1}>
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
                <div>
                  <div>
                    <img src={`/images/${slide.imgSrc}`} alt={`slide-${slide.id}`} className='w-full aspect-video object-cover object-center'/>
                  </div>
                  <div className='p-4'>
                    <p className='text-lg font-semibold'>{slide.title}</p>
                    <a href='#' className='text-orange hover:text-orange/75'>Explore</a>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default LatestWorks
