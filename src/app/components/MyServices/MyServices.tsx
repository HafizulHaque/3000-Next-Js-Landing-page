import React from 'react'
import { Package, Droplet, Rocket } from 'lucide-react'

const MyServices = () => {
  return (
  <section className='flex flex-col divide-y-[1px] divide-slate-600'>
    <div className='flex flex-col justify-center items-center p-12 gap-2 bg-lightDark hover:bg-lightDark/95 group'>
      <Package strokeWidth={1.5} className='text-slate-700 group-hover:text-cream'/>
      <h3 className='text-xl font-semibold text-white group-hover:text-orange'>Branding</h3>
    </div>
    <div className='flex flex-col justify-center items-center p-12 gap-2 bg-lightDark hover:bg-lightDark/95 group'>
      <Droplet strokeWidth={1.5} className='text-slate-700 group-hover:text-cream'/>
      <h3 className='text-xl font-semibold text-white group-hover:text-orange'>UI/UX Design</h3>
    </div>
    <div className='flex flex-col justify-center items-center p-12 gap-2 bg-lightDark hover:bg-lightDark/95 group'>
      <Rocket strokeWidth={1.5} className='text-slate-700 group-hover:text-cream'/>
      <h3 className='text-xl font-semibold text-white group-hover:text-orange'>Development</h3>
    </div>
  </section>
  )
}

export default MyServices
