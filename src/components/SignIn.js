import React, {Component} from 'react';

import fire from '../utils/firebase'
import {withRouter} from 'react-router-dom'

class SignIn extends Component {
  state ={
    email: '',
    password: ''
  }
signIn = ()=> {
  this.props.history.push('/user')
}
  render (){
    return (
      <div className = "form-inline" style = {{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className = "form-group">
          <input
            className = "form-control"
            type = "text"
            style ={{marginRight:'5px'}}
            placeholder ="user@example.com"
            onChange = {event => this.setState({email: event.target.value})}
          />
          <input
            className = "form-control"
            type = "password"
            style ={{marginRight:'5px' }}
            placeholder = "password"
            onChange = {event => this.setState({password: event.target.value})}
          />
        <button
          className = "bn bn-primary"
          type = "button"
          onClick = {() => this.signIn()}
        > SignIn
        </button>
      </div>
    </div>
    )
  }
}

export default withRouter(SignIn);
