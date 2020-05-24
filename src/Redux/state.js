import { renderEntireTree } from "../render";

let state = { 
 profilePage :  {
     postData: [
    {id: 1, message:"Hello gays", like: 26},
    {id: 2, message:"It's my first post", like: 15},
    {id: 3, message:"Hello gays", like: 134},
    {id: 4, message:"It's my first post", like: 679},
   ]
 },
 dialogsPage : {
  dialogData : [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Марина" },
    { id: 3, name: "Vitaliy" },
    { id: 4, name: "Ignat" },
    { id: 5, name: "Artem" },
  ],
 messageData : [
    { id: 1, message: "Hello" },
    { id: 2, message: "How is your React" },
    { id: 3, message: "Hi" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo-Yo" },
  ] 
},
newsData: [
  { id: 1, news: "Learn React" },
  { id: 2, news: "Learn Rdux" },
  { id: 3, news: "I'am happy"},

],
friendsData: [
  { id: 1, news: "Vasya" },
  { id: 2, news: "IGNAt" },
  { id: 3, news: "Maryna"},
  { id: 4, news: "Kolya"},

]
}
export let addPost = (postMessage)=>{
  debugger
  let newPosts = {
    id:5,
    message:postMessage,
    like:0
  }
  state.profilePage.postData.push(newPosts);
  renderEntireTree(state);
}
export default state;