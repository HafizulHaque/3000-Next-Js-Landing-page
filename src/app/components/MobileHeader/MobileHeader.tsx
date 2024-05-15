'use client'

import React from 'react'
import { Menu, EllipsisVertical, MessageCircleMore } from 'lucide-react'

const MobileHeader = () => {

  return (
    <header className='w-screen h-[60px] fixed top-0 left-0 right-0 z-50'>
      <div className='flex justify-between items-center p-4 m-0 bg-white text-lightDark shadow'>
        <div>
          <Menu size={40}/>
        </div>
        <div className='w-[140px] md:w-[180px]'>
          <a href="/"><img src="/images/logo.svg" alt="company logo" className=''/></a>
        </div>
        <div className='flex gap-x-4'>
          <EllipsisVertical size={20}/>
          <MessageCircleMore size={20}/>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
