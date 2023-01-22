import React from "react";
import Post from './post/post'
const Mypost=(props)=>{
  
   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
   let newPostElement = React.createRef();
   let add = ()=>{
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ' ';
   }
    return( 
       <div>
        My posts
        <div>
          <textarea ref={newPostElement}></textarea><br/>
          <button onClick={add}>Add post</button>
        </div>
        <div>
       new posts
        </div>
        {postsElements}
        </div>
        )
}
export default Mypost;