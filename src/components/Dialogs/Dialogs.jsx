import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';



const DialogItem =(props) => {
  let path ="/dialogs/" + props.id
  return <div className={s.dialog} >
<NavLink to={path}>{props.name}</NavLink>
          </div>
}
const Message =(props) => {
  return <div className={s.dialog}>{props.message}
          </div>
}

const Dialogs =(props) => {
    return  (
      <div className={s.dialogs}>
        <div className={s.DialogItem}>

          <DialogItem name="Vasya" id="1"/>
          <DialogItem name="Марина" id="2"/>
          <DialogItem name="Vitaliy" id="3"/>
          <DialogItem name="Ignat" id="4"/>
          <DialogItem name="Artem" id="5"/>
          </div>
          

        <div className={s.messages}>
          <Message message="Hello"/>
          <Message message="How is your React"/>
          <Message message="Yo"/> 
      </div>
      </div>
    )
}
export default Dialogs;