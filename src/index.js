import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import {firebaseApp} from './firebase';
import {Container, Button} from 'sematnic-ui-react'

import App from './components/App';
import TodoList from './components/ToDoList'
import Home from './components/Home'
import SignIn from './components/LoginPage'
import SignUp from './components/SignUp'

import './index.css';

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user);
  }else {
    console.log('user has signed out or still needs to sign in.')
  }
})

ReactDOM.render(
//<Router path = '/' history = {browserHistory}/>
//  <Router path = '/app' component = {App}/>
  //<Router path = '/signIn' component = {SignIn}/>
  //<Router path = '/signUp' component = {SignUp}/>
  //<Router path = '/home' component = {Home}/>
//  <Router path = '/todolist' component = {ToDoList}/>
//  <Router path = '/userprofile/:id' component = {UserProfile}/>
//  <Router path = '/' component = {PageNOtFound}/>
//</Router>, document.getElementById('root')
)
