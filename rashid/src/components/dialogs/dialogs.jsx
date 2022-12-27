import React from "react";
import d from './dialogs.module.css';

const Dialogs = (props) =>{
    return (
        <div className={d.dialogs}>
         <div className={d.dialogsItems}>
            <div className={d.dialog}>Русик</div>
            <div className={d.dialog}>Ислам</div>
            <div className={d.dialog}>Рашид</div>
            <div className={d.dialog}>Арсик</div>
         </div>
         <div className={d.messages}>
            <div className={d.message}>привет</div>
            <div className={d.message}>пидараз</div>
            <div className={d.message}>как дела ?</div>
         </div>
        </div>
    )
}
export default Dialogs;