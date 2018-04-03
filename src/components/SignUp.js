import React, {Component} from 'react';
import { Container, Button } from 'semantic-ui-react'
import fire from '../utils/firebase'
import {withRouter} from 'react-router-dom'

class SignUp extends Component {
  state ={
    email: '',
    password: ''
  }
  signUp = () => {
    this.props.history.push('/user')
  }
  render (){
    return (
      <div className = "form-inline" style = {{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className = "form-group">
          <input
            className = "form-control"
            type = "text"
            style ={{marginRight:'5px'}}
            placeholder ="email@example.com"
            onChange = {event => this.setState({email: event.target.value})}
          />
          <input
            className = "form-control"
            type = "password"
            style ={{marginRight:'5px' }}
            placeholder = "password"
            onChange = {event => this.setState({password: event.target.value})}
          />
        <Button
          className = "bn bn-primary"
          type = "button"
          onClick = {() => this.signUp()}
        > Sign Me Up
        </Button>
      </div>
    </div>
    )
  }
}

export default withRouter(SignUp);
