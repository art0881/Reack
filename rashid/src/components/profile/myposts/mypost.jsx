import React from "react";
import Post from './post/post'
const Mypost=(props)=>{
  
   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
   
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
        {postsElements}
        </div>
        )
}
export default Mypost;