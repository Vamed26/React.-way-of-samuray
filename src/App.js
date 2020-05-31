import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
// import Profile from './components/Profile';



const App = (props) => {

  return (
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile' render={ ()=> <Profile 
          postData={props.state.profilePage.postData} 
          newPostText={props.state.profilePage.newPostText} 
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}/>} 
            />
          <Route path='/dialogs' render={ ()=> <Dialogs messageData={props.state.dialogsPage.messageData}
           dialogData={props.state.dialogsPage.dialogData}
           newSendText={props.state.dialogsPage.newSendText} 
           addSend={props.addSend}
           updateNewSendText={props.updateNewSendText}/>} />
        
          <Route path='/news' render={ ()=> <News newsData={props.state.newsData}/>} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' render={ ()=> <Friends friendsData={props.state.friendsData}/>} />
        </div>
      </div >
  );
}

export default App;
