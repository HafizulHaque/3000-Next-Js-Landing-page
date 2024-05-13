import React from 'react'
import { Menu, EllipsisVertical, MessageCircleMore } from 'lucide-react'

const MobileHeader = () => {

  return (
    <header className='p-4'>
      <Menu/>
      <div>
        <a href="/"><img src="/images/logo.svg" alt="company logo"/></a>
      </div>
      <div>
        <EllipsisVertical/>
        <MessageCircleMore/>
      </div>
    </header>
  )
}

export default MobileHeader
