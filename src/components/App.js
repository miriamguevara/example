import React, { Component } from 'react';
import logo from './sunset.png';
import './App.css';
import {withRouter} from 'react-router-dom'
import {Switch,Router} from 'react-router'
import {Container, Button} from 'sematnic-ui-react'

import ToDoList from './components/ToDoList'
import Home from './components/Home'
import SignIn from './components/SignIn'
import UserProfile from './components/UserProfile'

class App extends Component {

  render() {
    return (
      <Container>

        <Switch>
          <Router exact path = '/' component = {SignIn}/>
          <Router path = '/home' component = {Home}/>
          <Router path = '/todolist' component = {ToDoList}/>
          <Router path = '/userprofile/:id' component = {UserProfile}/>
          <Router path = '/' component = {PageNotFound}/>
          </Switch>

          <div className ="App">
          <ToDoList/>
          <Home/>
          <PageNotFound/>
          <SignUp>
          </div>

      </Container>
    );
  }
}

export default withRouter(App);
