import { rerenderEntireTree } from "../render";

 let state = {
   profilePage:{
    posts: [
        {id: 1, message:'Привет пидар это пост', likesCount:'2'},
        {id: 2, message:'второй пост', likesCount:'7'}
       ]
    
   },
   dialogsPage: {
    dialogs: [
        {id: 1, name:'Русик'},
        {id: 2, name:'Ислам'}
    ],
    messages: [
        {id: 1, message:'привет'},
        {id: 2, message:'как дела'}
       ]
   }
   
 }
  export let addPost = (postMessage) => {
    let newPost = {
        id: 5, 
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
 }  
 export default state;