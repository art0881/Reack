import React from "react";
import d from "./dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/message";



const Dialogs = (props) => {

  let newMessageElement = React.createRef();
  let add = ()=>{
   let text = newMessageElement.current.value;
   alert(text);
  }

   let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>); 
   let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
       </div>
      <div className={d.messages}>
       {messagesElements}
        <div>
          <textarea ref={newMessageElement}></textarea><br/>
          <button onClick={add}>Add post</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
