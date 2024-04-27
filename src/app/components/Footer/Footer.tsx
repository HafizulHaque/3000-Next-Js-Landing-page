import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-lightDark text-white px-4 py-8'>
      <div className='w-1/3'>
        <a href="/">
          <img src="/images/logo.svg" alt="company logo"/>
        </a>
      </div>
      <div className='my-6 flex'>
        <input 
          type='email' 
          className='grow outline-none p-3 bg-offWhite text-lightDark border-0' 
          placeholder='E-mail'/>
        <button className='p-3 bg-cream hover:bg-orange text-lightDark hover:text-white font-semibold uppercase border-0'>Subscribe</button>
      </div>
      <div className='py-4 grid grid-cols-2 gap-x-4 gap-y-6'>
        <div>
          <h4 className='text-lg font-medium'>Email</h4>
          <p className='text-slate-400'>info@gmail.com</p>
        </div>
        <div>
          <h4 className='text-lg font-medium'>Phone</h4>
          <p className='text-slate-400'>+880-1833-184-155</p>
        </div>
        <div>
          <h4 className='text-lg font-medium'>Address</h4>
          <address>
            <p className='text-slate-400'>357, Modhubag</p>
            <p className='text-slate-400'>Dhaka, Bangladesh</p>
          </address>
        </div>
      </div>

      {/* social  */}
      <div className='mt-4 mb-6 grid grid-cols-3 gap-8'>
        <div className='opacity-40 hover:opacity-100'>
          <img src='/images/logo-07-81x20.png' alt='social icon' className=''/>
        </div>
        <div className='opacity-40 hover:opacity-100'>
          <img src='/images/logo-08-102x20.png' alt='social icon' className='w-full'/>
        </div>
        <div className='opacity-40 hover:opacity-100'>
          <img src='/images/logo-09-98x27.png' alt='social icon' className='w-full'/>
        </div>
      </div>

      {/* copyright  */}
      <p className='text-base text-slate-500'>&copy; 2024 | All rights reserved</p>
    </footer>
  )
}

export default Footer
