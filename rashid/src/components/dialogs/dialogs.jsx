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
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        <DialogItem name="Русик" id="1"/>
        <DialogItem name="Ислам" id="2"/>
        <DialogItem name="Рашид" id="3"/>
        <DialogItem name="Арсик" id="4"/>
      </div>
      <div className={d.messages}>
        <Messages messages="Привет" />
        <Messages messages="Пидараз" />
        <Messages messages="Как дела" />
      </div>
    </div>
  );
};
export default Dialogs;
