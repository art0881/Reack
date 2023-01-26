import React from "react";
import Post from './post/post'
import post from './mypost.module.css';

const Mypost=(props)=>{
  
   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
   let newPostElement = React.createRef();
   let addPost = ()=>{
    props.addPost();
   }

   let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
   }

    return( 
       <div>
        My posts
        <div>
          <textarea onChange={onPostChange} className={post.text} ref={newPostElement} value={props.newPostText}/><br/>
          <button className={post.button} onClick={addPost}>Add post</button>
        </div>
        <div>
       new posts
        </div>
        {postsElements}
        </div>
        )
}
export default Mypost;