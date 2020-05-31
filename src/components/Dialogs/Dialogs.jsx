import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogData.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.messageData.map(m => <Message message={m.message} />)
  let newMessageElement=React.createRef();
  
  let addSend=() => {
     props.addSend();
  };
  let sendText=() => {
    let text = newMessageElement.current.value;
    props.updateNewSendText(text);
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
  <textarea onChange={sendText} ref={newMessageElement} className={s.text} value={props.newSendText}/>
          
                    <button onClick={addSend}>Send</button>
</div>
      </div>
    </div>
  )
}
export default Dialogs;