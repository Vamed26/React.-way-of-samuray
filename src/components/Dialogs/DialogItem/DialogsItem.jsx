import React from 'react';
import s from "./../Dialogs.module.css";
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return <div className={s.dialog}>
    <div className={s.item}>
      <img src="https://вайбер-ок.рф/wp-content/uploads/2018/06/2-min.jpg" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  </div>
}
export default DialogItem;