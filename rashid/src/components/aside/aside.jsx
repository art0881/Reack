import React from "react";
import { NavLink } from "react-router-dom";
import aside from './aside.module.css';


const Aside=()=>{
    return(
        <aside>
       
        <nav>
        <div><NavLink to="/profile" className = { navData => navData.isActive ? aside.active : aside.item }>Profile</NavLink></div>
        <div><NavLink to="/dialogs" className = { navData => navData.isActive ? aside.active : aside.item }>Messages</NavLink></div>
        <div><NavLink to="/news" className = { navData => navData.isActive ? aside.active : aside.item }>News</NavLink></div>
        <div><NavLink to="/music" className = { navData => navData.isActive ? aside.active : aside.item }>Music</NavLink></div><br/>
        <div><NavLink to="/setting" className = { navData => navData.isActive ? aside.active : aside.item }>Setting</NavLink></div>
        </nav>
      </aside>
    )
}
export default Aside;