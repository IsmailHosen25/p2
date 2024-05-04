import React,{useEffect} from 'react'
import style from "./Gallery.module.css"
import Nav from '../Global/Nav/Nav'
import ResponsNav from '../Global/ResponsNav/ResponsNav'
import Footer from '../Global/Footer/Footer'
import Contact from '../Global/Contact/Contact'
import Galleryimg from '../Global/ImgGallery/Galleryimg'
import {imggallery_data} from "./GalleryData"
export default function Gallery() {
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
          <Galleryimg img_data={imggallery_data} title={"Imgage Gallery"}/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}