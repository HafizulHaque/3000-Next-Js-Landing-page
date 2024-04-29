'use client'

import React, { useRef, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel,  } from 'react-responsive-carousel';
import { ArrowDown, ArrowUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    clientName: 'Emma Wilson',
    clientImgUrl: 'person-01-67x67.jpg',
    testimonialText: 'James spends quite a bit of time to get to know his clients and their projects to be able to add tremendous value to them.'
  },
  {
    id: 2,
    clientName: 'John McMillan',
    clientImgUrl: 'person-02-67x67.jpg',
    testimonialText: 'James is exceptionally talented and well-versed in both design and web technology. I highly recommend him.'
  },
  {
    id: 3,
    clientName: 'Kate Peters',
    clientImgUrl: 'person-03-67x67.jpg',
    testimonialText: 'James is one of the most talented designers we\'ve had the opportunity to work with. His elegent design execution comes with great precision.'
  }
]

const MyClients = () => {

  const carouselRef = useRef<Carousel>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const gotoNextSlide = () => {
    carouselRef?.current?.onClickNext()
    setCurrentSlideIndex(currentSlideIndex => (currentSlideIndex+1) % testimonials.length)
  }

  const gotoPrevSlide = () => {
    carouselRef?.current?.onClickPrev()
    setCurrentSlideIndex(currentSlideIndex => (currentSlideIndex-1+testimonials.length) % testimonials.length)
  }

  return (
    <section className='px-4 py-16'>
      
      {/* testimonial slider  */}
      <div>
        <Carousel
          ref={carouselRef} 
          axis='vertical' 
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          selectedItem={0}
          dynamicHeight={true}
        >
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className='bg-offWhite p-4'>
              <div>
                <div className='py-2'>
                  <p className='text-left text-slate-700 text-xl font-light leading-7'>{testimonial.testimonialText}</p>
                </div>
                <div className='flex items-center py-4'>
                  <div>
                    <img 
                      src={`/images/${testimonial.clientImgUrl}`} 
                      alt='client image' 
                      className='w-[64px] h-[64px] rounded-full'/>
                  </div>
                  <div className='grow text-left pl-4'>
                    <h4 className='text-orange/75 text-xl font-medium'>{testimonial.clientName}</h4>
                    <p>Client</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className='py-8 flex gap-4 justify-center items-center'>
        <div 
          className={`p-3 rounded-full hover:bg-orange hover:text-white drop-shadow-xl`}
          onClick={gotoPrevSlide}>
          <ArrowUp/>
        </div>
        <p><span className='text-orange text-3xl'>0{currentSlideIndex+1}/</span>0{testimonials.length}</p>
        <div 
          className={`p-3 rounded-full hover:bg-orange hover:text-white drop-shadow-xl`}
          onClick={gotoNextSlide}>
          <ArrowDown/>
        </div>
      </div>

      <div>
        <h2 className='text-3xl font-black py-4 text-center'>My Clients</h2>
        <p className='py-2 leading-8 text-lg text-gray-500 text-center'>Read the testimonials submitted by my clients and partners. You can fully trust their opinions on my solutions.</p>
        <div className='pt-8 pb-2 flex flex-col gap-6 items-center'>
          <div className='w-full'>
          <img src={`/images/logo-01-86x36.png`} alt="clinet logo" className='h-[32px] w-auto mx-auto'/>
          </div>
          <div className="w-full">
            <img src={`/images/logo-02-187x30.png`} alt="clinet logo" className='h-[32px] w-auto mx-auto'/>
          </div>
          <div className="w-full">
            <img src={`/images/logo-03-130x27.png`} alt="clinet logo" className='h-[32px] w-auto mx-auto'/>
          </div>
          <div className="w-full">
            <img src={`/images/logo-04-123x28.png`} alt="clinet logo" className='h-[32px] w-auto mx-auto'/>
          </div>
          <div className="w-full">
            <img src={`/images/logo-05-84x17.png`} alt="clinet logo" className='h-[20px] w-auto mx-auto'/>
          </div>
          <div className="w-full">
            <img src={`/images/logo-06-104x23.png`} alt="clinet logo" className='h-[32px] w-auto mx-auto'/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default MyClients
