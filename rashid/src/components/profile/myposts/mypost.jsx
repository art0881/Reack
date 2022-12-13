import React from "react";
import Post from './post/post'
const Mypost=()=>{
    return( 
       <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>
       new posts
        </div>
        <Post message="Привет пидар это пост"/>
        </div>
        )
}
export default Mypost;