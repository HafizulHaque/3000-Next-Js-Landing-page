import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import MyServices from "./components/MyServices/MyServices";
import LatestWorks from "./components/LatestWorks/LatestWorks";
import MyClients from "./components/MyClients/MyClients";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import MyBlog from "./components/MyBlog/MyBlog";
import Footer from "./components/Footer/Footer";

export default function Home() {

  

  return (
    <>
      <Header/>
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
