import React from "react";
import Post from './post/post'
import post from './mypost.module.css';

const Mypost=(props)=>{
  
   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
   let newPostElement = React.createRef();
   let add = ()=>{
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ' ';
   }

   let onPostChange = () =>{

   }

    return( 
       <div>
        My posts
        <div>
          <textarea onChange={onPostChange} className={post.text} ref={newPostElement} value="Омаров Рашид"></textarea><br/>
          <button className={post.button} onClick={add}>Add post</button>
        </div>
        <div>
       new posts
        </div>
        {postsElements}
        </div>
        )
}
export default Mypost;