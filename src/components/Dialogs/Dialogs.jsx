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
  let dialogData= [
    {id:1, name:"Vasya"},
    {id:2, name:"Марина"},
    {id:3, name:"Vitaliy"},
    {id:4, name:"Ignat"},
    {id:5, name:"Artem"},
  ]
  let messageData= [
    {id:1, message:"Hello"},
    {id:2, message:"How is your React"},
    {id:3, message:"Hi"},
    {id:4, message:"Yo"},
    {id:5, message:"Yo-Yo"},
  ]
    return  (
      <div className={s.dialogs}>
        <div className={s.DialogItem}>

          <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
          <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
          <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
          <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
          <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
          
          </div>
          

        <div className={s.messages}>
          <Message message={messageData[0].message} id={messageData[0].id}/>
          <Message message={messageData[1].message} id={messageData[1].id}/>
          <Message message={messageData[2].message} id={messageData[2].id}/>
          <Message message={messageData[3].message} id={messageData[3].id}/>
          <Message message={messageData[4].message} id={messageData[4].id}/>
      </div>
      </div>
    )
}
export default Dialogs;