import React from "react";
import Myposts from "./myposts/mypost";
import ProfileInfo from "./profileinfo/profileinfo";
import prof from './profile.module.css';
const Profile=()=>{
    return(
        <div >
          <ProfileInfo />
            <Myposts />
       </div>
        )
}
export default Profile;