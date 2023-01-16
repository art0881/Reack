import React from "react";
import d from "./dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/message";



const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name:'Русик'},
    {id: 2, name:'Ислам'},
    {id: 3, name:'Рашид'}
   ]
   
   let messages = [
    {id: 1, message:'привет'},
    {id: 2, message:'как дела'}
   ]

   let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>); 
   let messagesElements = messages.map(m => <Message message={m.message} />);
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
       </div>
      <div className={d.messages}>
       {messagesElements}
      </div>
    </div>
  );
};
export default Dialogs;
