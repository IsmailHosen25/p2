import React,{useEffect} from 'react'
import style from "./About.module.css"
import Nav from '../Global/Nav/Nav'
import ResponsNav from '../Global/ResponsNav/ResponsNav'
import Footer from '../Global/Footer/Footer'
import Contact from '../Global/Contact/Contact'
import AboutH from './Components/AboutH'
import Galleryimg from "../Global/ImgGallery/Galleryimg"
import { c_data,imggallery_data } from './ImgData'
export default function About() {
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  },[])
  return (
    <div className={style.layout}>
        <div className={style.nav}>
             <Nav/>
        </div>
        <ResponsNav/>
        <div className={style.main}>
          <AboutH/>
          <Galleryimg img_data={c_data} title={"Certificate Gallery"} btnshow={true} btnlink={"/certificate"}/>
          <Galleryimg img_data={imggallery_data} title={"Imgage Gallery"} btnshow={true} btnlink={"/gallery"}/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}