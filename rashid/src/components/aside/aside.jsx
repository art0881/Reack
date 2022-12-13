import React from "react";
import classes from './aside.module.css';


const Aside=()=>{
    return(
        <aside>
        <nav>
        <a><div>Profile</div></a>
        <a className={classes.item}><div>Messages</div></a>
        <a ><div>News</div></a>
        <a ><div>Music</div></a><br/>
        <a ><div>Setting</div></a>
        </nav>
      </aside>
    )
}
export default Aside;