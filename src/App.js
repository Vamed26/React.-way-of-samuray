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
// import Profile from './components/Profile';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile' render={ ()=> <Profile postData={props.postData}/>} />
          <Route path='/dialogs' render={ ()=> <Dialogs messageData={props.messageData} dialogData={props.dialogData}/>} />
          
          
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />

        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
