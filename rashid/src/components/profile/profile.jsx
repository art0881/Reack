import React from "react";
import Mypost from "./myposts/mypost";
import ProfileInfo from "./profileinfo/profileinfo";
import prof from './profile.module.css';
const Profile=(props)=>{
  
 
    return(
        <div >
          <ProfileInfo />
            <Mypost  posts={props.state.posts} addPost={props.addPost}/>
       </div>
        )
}
export default Profile;