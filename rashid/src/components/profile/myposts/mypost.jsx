import React from "react";
import Post from './post/post'
const Mypost=()=>{
  let posts = [
    {id: 1, message:'Привет пидар это пост', likesCount:'2'},
    {id: 2, message:'второй пост', likesCount:'7'}
   ]
   let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
   
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