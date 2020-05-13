import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogData = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Марина" },
    { id: 3, name: "Vitaliy" },
    { id: 4, name: "Ignat" },
    { id: 5, name: "Artem" },
  ]
  let messageData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How is your React" },
    { id: 3, message: "Hi" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo-Yo" },
  ]
  let dialogsElements = dialogData.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messageData.map(m => <Message message={m.message} />)
  return (
    <div className={s.dialogs}>
      <div className={s.DialogItem}>

        {dialogsElements}

      </div>


      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
export default Dialogs;