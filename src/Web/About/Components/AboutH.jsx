import React from 'react'
import style from "./AboutH.module.css"
import hasan from "../../../assets/hasan.jpg"
import { FaUserFriends } from "react-icons/fa";
import { LuFileBadge2 } from "react-icons/lu";
export default function AboutH() {
  return (
    <div className={style.abouth}>
        <div>
            <p className={style.p}>Get To Know More</p>
            <h1 className={style.heading}>About Me</h1>
        </div>
        <div className={style.container}>
            <img className={style.img} src={hasan}/>
            <div className={style.aboutme}>
                 <div className={style.my_info}>
                    <div className={style.info_item}>
                        <LuFileBadge2 style={{fontSize:"2.5rem",color:"#0A6847"}}/>
                        <h3 className={style.h}>Experience</h3>
                        <p className={style.exp}>2+ years</p>
                        <p className={style.profe}>Markating</p>
                    </div>
                    <div className={style.info_item}>
                        <FaUserFriends style={{fontSize:"2.5rem",color:"#0A6847"}}/>
                        <h3 className={style.h}>Education</h3>
                        <p className={style.exp}>B.Sc. Bachelors Degree</p>
                        <p className={style.profe}>M.Sc. Mastors Degree</p>
                    </div>
                 </div>
                 <p className={style.self_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe harum ipsa exercitationem praesentium labore, aperiam ad. Molestias inventore nesciunt a quisquam distinctio autem, placeat, culpa odio voluptate dicta cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur modi iure repudiandae quaerat. Exercitationem aut inventore, fugit, facilis modi placeat quia necessitatibus mollitia fugiat, odio perferendis sed atque tempore!</p>
            </div>
        </div>
    </div>
  )
}
