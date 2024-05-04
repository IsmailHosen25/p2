import React from "react";
import style from "./Experience.module.css";
import { FaCheckCircle } from "react-icons/fa";
const hardexp = [
  {
    title: "Hard Working",
    level: "Entermediate",
  },
  {
    title: "Selling",
    level: "Experienced",
  },
  {
    title: "New Idea",
    level: "Experienced",
  },
  {
    title: "Smart Work",
    level: "Experienced",
  }
];
const softexp = [
  {
    title: "Word",
    level: "Basic",
  },
  {
    title: "Excel",
    level: "Entermediate",
  },
  {
    title: "Canva",
    level: "Entermediate",
  },
  {
    title: "Powr Point",
    level: "Basic",
  },
];
export default function Experience() {
  return (
    <div className={style.exp}>
      <div>
        <p className={style.p}>Explore My</p>
        <h1 className={style.heading}>Experience</h1>
      </div>
      <div className={style.container}>
        <div className={style.exp_items}>
          <h2 style={{fontSize:"2rem"}}>Hard Experience</h2>
          <div className={style.exp_item}>
            {hardexp.map((item, i) => (
              <div key={i} className={style.exp_data}>
                <FaCheckCircle style={{fontSize:"2rem",color:"#0A6847",marginTop:"0.3rem"}}/>
                <div>
                  <h2 className={style.exp_h}>{item.title}</h2>
                  <p className={style.exp_l}>{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.exp_items}>
          <h2 style={{fontSize:"2rem"}}>Soft Experience</h2>
          <div className={style.exp_item}>
          {softexp.map((item, i) => (
              <div key={i} className={style.exp_data}>
                <FaCheckCircle style={{fontSize:"2rem",color:"#0A6847",marginTop:"0.3rem"}}/>
                <div>
                  <h2 className={style.exp_h}>{item.title}</h2>
                  <p className={style.exp_l}>{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
