import React from 'react'

const AboutMe = () => {
  return (
    <section className='px-4 py-8'>

      <div className='px-[1.5rem] pt-[1.5rem] pb-2 relative'>
        <img src='/images/image-01-424x491.jpg' alt='person' className='w-full'/>
        <span className='inline-block bg-offWhite w-1/2 h-1/2 aspect-square absolute top-0 left-0 z-[-10]'></span>
      </div>

      <div>
        <div className='text-center'>
          <h2 className='text-2xl font-bold py-4'>About Me</h2>
          <p className='py-2 leading-8 text-gray-600'>My name is James Adams. I’m a UI/UX & graphic designer. I believe that a well-designed product leads a business to success.</p>
          <p className='pt-2 pb-8 leading-8 text-gray-600'>I love learning how people think and behave, and I leverage research to design user-centered products and experiences which solve both user and business problems.</p>
          <button className='px-8 py-4 bg-lightDark text-white uppercase'>Send Message</button>
        </div>
      </div>

    </section>
  )
}

export default AboutMe
