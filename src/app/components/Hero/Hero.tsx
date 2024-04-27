import React from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'

// Hero Section 
const Hero = () => {
  return (
    <section className='bg-offWhite p-4'>
      
      {/* div-1 */}
      <div className='text-center pt-4 pb-8'>
        <h2 className='py-2 text-3xl'>Hi! <span className='font-bold'>I'm<br/>a designer</span></h2>
				<p className='px-8 pt-2 pb-8 leading-7'>ready to work on the next big project for your business</p>
				<button className='bg-orange text-white px-8 py-4 cursor-pointer uppercase'>Get in touch</button>
      </div>

      {/* div-2 */}
      <div>
        <div>
          <div className='relative'>
            <img 
              src="/images/person-01-630x866.jpg" 
              alt="designer placeholder image"
              className='w-full'/>
            <span className='absolute top-0 right-0 inline-block w-[3ch] h-[3ch] bg-orange'></span>
            <span className='absolute bottom-0 left-0 w-[9ch] h-[9ch] bg-cream hover:bg-orange flex justify-center items-center'>
              <Play size={'2em'} fill='#fff' color='#fff'/>
            </span>
          </div>
          <div className='py-8'>
            <img 
              src='/images/image-12-270x285.jpg'
              alt='art'
              className='w-full'/>
              <div className='p-4 bg-orange text-white'>
                <h3 className='text-lg font-semibold'>iStep Co.</h3>
                <p className='text-sm leading-8'>A UX design project I have recently worked on.</p>
              </div>
          </div>
        </div>
			</div>

      {/* div-3 */}
      <div className='py-4 flex gap-4 justify-center'>
        <p className='text-lg'><Link className='text-gray-600 hover:text-orange' href="/">Instagram</Link></p>
        <p className='text-lg'><Link className='text-gray-600 hover:text-orange' href="/">Pinterest</Link></p>
      </div>


    </section>
  )
}

export default Hero
