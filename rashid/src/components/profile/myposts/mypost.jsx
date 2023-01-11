import React from "react";
import Post from './post/post'
const Mypost=()=>{
  let messagesData = [
    {id: 1, message:'Привет пидар это пост', likesCount:'2'},
    {id: 2, message:'второй пост', likesCount:'7'}
   ]
   
   
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
        <Post message={messagesData[0].message} likesCount={messagesData[0].likesCount}/>
        <Post message={messagesData[1].message} likesCount={messagesData[1].likesCount}/>
        </div>
        )
}
export default Mypost;