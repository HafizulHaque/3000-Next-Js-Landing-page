'use client'

import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileHeader from '../MobileHeader/MobileHeader'


const Header = () => {

  const [ mounted, setMounted ] = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted){
    return <></>
  }

  if(mounted && isTabletOrMobile){
    return <MobileHeader/>
  }

  return (
    <header>
      Desktop/Laptop header
    </header>
  )
}

export default Header
