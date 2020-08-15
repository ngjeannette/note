import React, { useState, useEffect } from 'react';
import './App.scss';
import Navigation from './component/navigation';
import Login from './component/login';
import Signup from './component/signup';
import Notes from './component/notes';
import Forgot from './component/forgotpassword';
import NotLoggedIn from './component/notloggedin';
import Home from './component/home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [avatar, setAvatar] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const updateAvatar = value => {
    setAvatar(value)
  }
  const updateUserInfo = value => {
    setUserInfo(value)
  }
  useEffect(()=>{},[avatar])
  return (
    <Router>
      <div className="Main">
        <Navigation avatar={avatar} updateAvatar={updateAvatar} updateUserInfo={updateUserInfo}  /> 
        <div className="content">
          <Route exact path="/" render={(props) => (<Home {...props} isAuthed={true} />)} />
          <Route path="/login" render={(props) => (<Login {...props} updateAvatar={updateAvatar} updateUserInfo={updateUserInfo} isAuthed={true} />)} />
          <Route path="/signup" render={(props) => (<Signup {...props} isAuthed={true} />)} />
          <Route path="/forgotpassword" render={(props) => (<Forgot {...props} isAuthed={true} />)} />
          <Route path="/notes" render={(props) => (<Notes {...props} userInfo={userInfo} isAuthed={true} />)} />
          <Route path="/notloggedin" render={(props) => (<NotLoggedIn {...props} isAuthed={true} />)} />
          <Route path="/home" render={(props) => (<Home {...props} isAuthed={true} />)} />
        </div>
      </div>
    </Router>
  )
};

export default App;
