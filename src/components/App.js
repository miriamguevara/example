import React, { Component } from 'react';
import logo from './sunset.png';
import './App.css';
import {withRouter} from 'react-router-dom'
import {Switch,Router} from 'react-router'
import {Container, Button} from 'sematnic-ui-react'

import TodoList from './ToDoList'
import Home from './Home'
import LoginPage from './LoginPage'
import UserProfile from './UserProfile'

class App extends Component {

  render() {
    return (
      <Container>

        <Switch>
          <Router exact path = '/' component = {LoginPage}/>
          <Router path = '/home' component = {Home}/>
          <Router path = '/todolist' component = {ToDoList}/>
          <Router path = '/userprofile/:id' component = {UserProfile}/>
          <Router path = '/' component = {PageNOtFound}/>
          </Switch>

          <div className ="App">
          
          </div>

      </Container>
    );
  }
}

export default withRouter(App);
