import React from "react";
import post from './post.module.css';
const Post=(props)=>{
    return( 
        <div>
            <div className={post.flex_block}>
              <img className={post.ava} src="https://fun-cats.ru/wp-content/uploads/c/a/d/cad5295c41fd8121dbb5233c0ca5534c.jpeg" alt=''/>
              <div><p className={post.text}>{props.message}</p><button className='button'>like {props.likesCount}</button> </div></div>
        </div>
        )
}
export default Post;