import React from 'react'
import style from "./ResponsNav.module.css"
import { Link } from 'react-router-dom'
import { logo_name } from '../../../Data'
export default function ResponsNav() {
  return (
    <div className={style.nav_com}>
    <div className={style.nav_container}>
            <Link to={"/"} className={style.logo}>{logo_name}</Link>
            <div className={style.link_in}>
                <Link className={style.link} to={"/about"}>About</Link>
                <Link className={style.link} to={"/outline"}>Outline</Link>
                <Link className={style.link} to={""} download>CV</Link>
            </div>
    </div>
    </div>
  )
}
