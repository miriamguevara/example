import React, { Component } from 'react';
import './App.css';
import { Container} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'

import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Home from './components/Home'
import User from './components/User'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ToDoList from './components/ToDoList'
import PageNotFound from './components/PageNotFound'
import HeaderExampleUsersIcon from './components/HeaderExampleUsersIcon'


class App extends Component {
  state = {
    comp: true
  }

switchState = () => this.setState({comp: !this.state.comp})

  render() {

    return (
      <Container>
        <HeaderExampleUsersIcon />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/comp1' component={Comp1}/>
          <Route path='/signIn' component={SignIn}/>
          <Route path='/signUp' component={SignUp}/>
          <Route path='/comp2' component={Comp2}/>
          <Route path='/toDoList' component={ToDoList}/>
          <Route path='/user' component={User}/>
          <Route path='/' component={PageNotFound}/>
        </Switch>

      </Container>
    );
  }
}



export default withRouter(App);
