import React from 'react'
import style from "./Home.module.css"
import Nav from '../Global/Nav/Nav'
import ResponsNav from '../Global/ResponsNav/ResponsNav'
import Footer from '../Global/Footer/Footer'
export default function Home() {
  return (
    <div className={style.home}>
        <div className={style.nav}>
             <Nav/>
        </div>
        <ResponsNav/>
        <div className={style.main}>
          <Footer/>
        </div>
    </div>
  )
}
