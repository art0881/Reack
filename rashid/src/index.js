import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message:'Привет пидар это пост', likesCount:'2'},
  {id: 2, message:'второй пост', likesCount:'7'}
 ]
 let dialogs = [
  {id: 1, name:'Русик'},
  {id: 2, name:'Ислам'}
 ]
 
 let messages = [
  {id: 1, message:'привет'},
  {id: 2, message:'как дела'}
 ]
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
