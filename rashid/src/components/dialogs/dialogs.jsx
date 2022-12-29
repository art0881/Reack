import React from "react";
import { NavLink } from "react-router-dom";
import d from "./dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to="/dialogs/1">Русик</NavLink>
            </div>
        <div className={d.dialog}><NavLink to="/dialogs/2">Ислам</NavLink></div>
        <div className={d.dialog}><NavLink to="/dialogs/3">Рашид</NavLink></div>
        <div className={d.dialog}><NavLink to="/dialogs/4">Арсик</NavLink></div>
      </div>
      <div className={d.messages}>
        <div className={d.dialog}>привет</div>
        <div className={d.dialog}>пидараз</div>
        <div className={d.dialog}>как дела ?</div>
      </div>
    </div>
  );
};
export default Dialogs;
