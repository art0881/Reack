import React from "react";
import d from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";


const Message = (props) =>{
  return <div className={d.dialog}>{props.message}</div>
}

export default Message;
