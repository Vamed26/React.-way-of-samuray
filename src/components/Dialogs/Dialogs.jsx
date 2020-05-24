import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogData.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.messageData.map(m => <Message message={m.message} />)
  let newMessageElement=React.createRef();
  let addSend=() => {
      let text = newMessageElement.current.value;
      alert(text);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.DialogItem}>

        {dialogsElements}

      </div>


      <div className={s.messages}>
        {messagesElements}
      <div>
  <h3>Send message</h3>     
  <textarea ref={newMessageElement}></textarea>
          
                    <button onClick={addSend}>Send</button>
</div>
      </div>
    </div>
  )
}
export default Dialogs;