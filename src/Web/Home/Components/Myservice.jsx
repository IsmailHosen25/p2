import style from "./Myservice.module.css"
import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { IoMegaphone } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { PiStrategyFill } from "react-icons/pi";
const service=[{
    icon:<IoMegaphone/>,
    title:"Digital Service",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},{
    icon:<HiOutlineLightBulb />,
    title:"Careative Idea",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},{
    icon:<TbWorld/>,
    title:"Online Service",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},{
    icon:<FaUserFriends/>,
    title:"Unlimited Support",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},{
    icon:<FaCameraRetro/>,
    title:"Photography",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
},{
    icon:<PiStrategyFill/>,
    title:"Strategy",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
}]
export default function AboutH() {
  return (
    <div className={style.myser}>
        <div>
            <p className={style.p}>My Services</p>
            <h1 className={style.heading}>World Best Service I provide</h1>
        </div>
        <div className={style.container}>
            {service.map((item,i)=>
                    <div className={style.ser_item}>
                      <div className={style.icon}>{item.icon}</div>
                      <h3 className={style.title}>{item.title}</h3>
                      <p className={style.desc}>{item.desc}</p>
                    </div>
            )}

        </div>
    </div>
  )
}
