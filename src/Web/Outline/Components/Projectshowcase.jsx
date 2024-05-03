import React from "react";
import style from "./Projectshowcase.module.css";
import prj1 from "../../../assets/prj1.jpeg";
import prj2 from "../../../assets/prj2.jpg";
const pdata = [
  {
    img: prj1,
    title: "Tree Planting",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "2021",
    class: "1",
  },
  {
    img: prj2,
    title: "Food donating",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "2022",
    class: "2",
  },
  {
    img: prj1,
    title: "Tree Planting",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "2021",
    class: "1",
  },
  {
    img: prj2,
    title: "Food donating",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    date: "2022",
    class: "2",
  },
];
export default function Projectshowcase() {
  return (
    <div className={style.prjsh}>
      {pdata.map((item, i) =>
        item.class === "1" ? (
          <div key={i} className={style.prj_item}>
            <div className={style.prj_info}>
              <h3 className={style.prj_title}>{item.title}</h3>
              <p className={style.prj_desc}>{item.desc}</p>
              <p className={style.prj_date}>{item.date}</p>
            </div>
            <img src={item.img} className={style.img} />
          </div>
        ) : (
          <div key={i} className={style.prj_item}>
            <img src={item.img} className={style.img} />
            <div className={style.prj_info2}>
              <h3 className={style.prj_title}>{item.title}</h3>
              <p className={style.prj_desc2}>{item.desc}</p>
              <p className={style.prj_date}>{item.date}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
