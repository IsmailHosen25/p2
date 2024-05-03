import React from 'react'
import style from "./HomeHeader.module.css"
import { name } from '../../../Data'
import { Link } from 'react-router-dom'
import {profession} from "../../../Data"
export default function HomeHeader() {
  return (
    <div className={style.home_header}>
        <div className={style.hheader_con}>
            <div className={style.info}>
                <div>
                    <h3 className={style.info_h3}>Hello, I'm</h3>
                    <h2 className={style.info_h2}>{name}</h2>
                </div>
                <p className={style.profession}>
                  A <span className={style.span}>{profession}</span> From Dhaka
                </p>
                <p className={style.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore, aliquam aut praesentium ducimus ullam vero iusto quam corrupti harum iste voluptates. Dicta vero doloremque fugit at inventore neque impedit!
                </p>
                <Link to={""} className={style.hireme}>Hire me</Link>
            </div>
            <div className={style.img}>
            </div>
        </div>
    </div>
  )
}
