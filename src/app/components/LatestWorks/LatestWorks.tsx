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
  const [currentSlideHeight, setCurrentSlideHeight] = useState(0)
  const [currentSlide, setCurrentSlide] = useState({
    first: true,
    last: false
  })


  return (
    <section className='p-4 bg-offWhite'>
      <h2 className='text-3xl font-black py-4'>Latest Works</h2>
      <p className='py-2 leading-8 text-lg text-gray-500'>Check out my recent and popular design & branding projects I have worked on.</p>
      <div>
        {/* arrow icons */}
        <div className='px-4 py-8 flex gap-4'>
          <div 
            className={`prev-btn p-3 ${!currentSlide.first ? 'rounded-full hover:bg-white text-lightDark hover:text-orange drop-shadow-xl':''}`}>
            <ArrowLeft/>
          </div>
          <div 
            className={`next-btn p-3 ${!currentSlide.last ? 'rounded-full hover:bg-white text-lightDark hover:text-orange drop-shadow-xl':''}`}>
            <ArrowRight/>
          </div>
        </div>
        <Swiper 
          modules={[Navigation]} 
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          spaceBetween={50}
          slidesPerView={1}
          // className='border border-red-500'
          // style={{height: 100}}
          onSlideChange={sw => {
            const { realIndex } = sw;
            let first = false;
            let last = false;
            if(realIndex === 0) first = true;
            if(realIndex === slides.length -1) last = true;
            setCurrentSlide({ first, last })
            // setCurrentSlideHeight(sw.slides[realIndex].offsetHeight)
            // console.log(sw.slides[realIndex].offsetHeight)
          }}>
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
                <div>
                  <div className='relative'>
                    <img src={`/images/${slide.imgSrc}`} alt={`slide-${slide.id}`} className='w-full'/>
                    <div className='absolute top-4 left-4 flex gap-1'>
                      {slide.contribution.map((contb, index) => (
                        <div key={index} className='bg-white px-2 py-1 capitalize'>{contb}</div>
                      ))}
                    </div>
                  </div>
                  <div className='px-6 py-4'>
                    <p className='text-2xl'>{slide.title}</p>
                    <a href='#' className='text-lg text-orange hover:text-orange/75'>Explore</a>
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
