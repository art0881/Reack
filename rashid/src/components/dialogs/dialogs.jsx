import React from "react";
import d from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) =>{
  let path = "/dialogs/" + props.id;
  return <div className={d.dialog + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
            </div>
}

const Messages = (props) =>{
  return <div className={d.dialog}>{props.messages}</div>
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name:'Русик'},
    {id: 2, name:'Ислам'},
   ]
   
   let messagesData = [
    {id: 1, message:'привет'},
    {id: 2, message:'как дела'}
   ]

   
   let dialogsElements = dialogsData
   .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>); 
  
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
       </div>
      <div className={d.messages}>
        <Messages messages={messagesData[0].message} />
        <Messages messages={messagesData[1].message} />
      </div>
    </div>
  );
};
export default Dialogs;
