import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogData.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.messageData.map(m => <Message message={m.message} />)
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