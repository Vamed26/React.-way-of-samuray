import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postData= [
  {id: 1, message:"Hello gays", like: 26},
  {id: 2, message:"It's my first post", like: 15},
  {id: 3, message:"Hello gays", like: 134},
  {id: 4, message:"It's my first post", like: 679},

]
let dialogData = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Марина" },
  { id: 3, name: "Vitaliy" },
  { id: 4, name: "Ignat" },
  { id: 5, name: "Artem" },
]
let messageData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How is your React" },
  { id: 3, message: "Hi" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo-Yo" },
]
ReactDOM.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
