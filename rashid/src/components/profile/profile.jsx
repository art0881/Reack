import React from "react";
import Mypost from "./myposts/mypost";
import ProfileInfo from "./profileinfo/profileinfo";
import prof from './profile.module.css';
const Profile=()=>{
    return(
        <div >
          <ProfileInfo />
            <Mypost />
       </div>
        )
}
export default Profile;