import React from "react";
import Mypost from "./myposts/mypost";
import prof from './profile.module.css';
const Profile=()=>{
    return(
        <div className={prof.pro}>
           {/* АВА */}
         <img class={prof.img} src="https://img-fotki.yandex.ru/get/229553/493212545.581/0_1df96f_8d6632fb_orig.jpg" alt=""></img>
       <p>AVA + descrip</p>
    <Mypost />
       </div>
        )
}
export default Profile;