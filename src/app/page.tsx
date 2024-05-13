'use client'

import { useMediaQuery } from 'react-responsive'

import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import MyServices from "./components/MyServices/MyServices";
import LatestWorks from "./components/LatestWorks/LatestWorks";
import MyClients from "./components/MyClients/MyClients";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import MyBlog from "./components/MyBlog/MyBlog";
import Footer from "./components/Footer/Footer";

export default function Home() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
      { isTabletOrMobile ? <MobileHeader/> : <Header/>}
      <main>
        <Hero/>
        <AboutMe/>
        <MyServices/>
        <LatestWorks/>
        <MyClients/>
        <GetInTouch/>
        <MyBlog/>
      </main>
      <Footer/>
    </>
  );
}
