import React from 'react'
import style from "./Home.module.css"
import Nav from '../Global/Nav/Nav'
import ResponsNav from '../Global/ResponsNav/ResponsNav'
import Footer from '../Global/Footer/Footer'
import HomeHeader from './Components/HomeHeader'
import Contact from '../Global/Contact/Contact'
export default function Home() {
  return (
    <div className={style.layout}>
        <div className={style.nav}>
             <Nav/>
        </div>
        <ResponsNav/>
        <div className={style.main}>
          <HomeHeader/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}
