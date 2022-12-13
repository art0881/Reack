import React from "react";
import post from './post.module.css';
const Post=(props)=>{
    return( 
        <div>
            <div>
              <img className={post.ava} src="https://fun-cats.ru/wp-content/uploads/c/a/d/cad5295c41fd8121dbb5233c0ca5534c.jpeg" alt=''/>{props.message}</div>
       <button>like</button>  </div>
        )
}
export default Post;