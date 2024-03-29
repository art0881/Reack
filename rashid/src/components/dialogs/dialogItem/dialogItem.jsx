import React from "react";
import d from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) =>{
  let path = "/dialogs/" + props.id;
  
  return <div className={d.dialog + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
            </div>
}


export default DialogItem;
