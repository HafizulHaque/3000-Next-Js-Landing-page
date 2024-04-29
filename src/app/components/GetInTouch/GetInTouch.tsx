import React from 'react'

const style = {
  background: 'linear-gradient(to bottom, #B9E1D7 49.5%, #EE6451 49.5%, #EE6451 50%, #FDF7F1 50%)'
}

const GetInTouch = () => {
  return (
    <section className='px-4 py-8' style={style}>
        <h2 className='text-3xl font-black py-4'>Get in Touch</h2>
        <p className='py-2 text-lg text-slate-600 leading-8'>Feel free to contact me to discuss your next design or branding project. I'm open to everything!</p>
        <div className="bg-white px-4 py-8 my-8 overflow-visible">
          <form>
            <div className='py-3'>
              <label htmlFor="name" className='block mb-2 text-slate-500'>Your Name</label>
              <input 
                type="text" 
                id='name' 
                className='w-full p-3 outline-none border border-amber-300/25 bg-offWhite focus:bg-white'
                placeholder='John Doe'/>
            </div>
            <div className='py-3'>
              <label htmlFor="email" className='block mb-2 text-slate-500'>Your Email</label>
              <input 
                type="email" 
                id='email'
                className='w-full p-3 outline-none border border-amber-300/25 bg-offWhite focus:bg-white'
                placeholder='example@email.com'/>
            </div>
            <div className='py-3'>
              <label htmlFor="phone" className='block mb-2 text-slate-500'>Your Phone</label>
              <input 
                type="phone" 
                id='phone'
                className='w-full p-3 outline-none border border-amber-300/25 bg-offWhite focus:bg-white'
                placeholder='+880 1833-184-155'/>
            </div>
            <div className='py-3'>
              <label htmlFor="message" className='block mb-2 text-slate-500'>Your Message</label>
              <textarea 
                id='message'
                className='w-full p-3 outline-none border border-amber-300/25 bg-offWhite focus:bg-white'
                placeholder='Enter your message'
                rows={7}>
              </textarea>
            </div>
            <div className="py-3">
              <button className='px-8 py-5 bg-lightDark hover:bg-orange text-white uppercase text-lg font-medium'>Send Message</button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default GetInTouch
