import React, {Componenet} from 'react';
import {firebaseApp} from '../firebase'
import {withRouter} from 'react-router-dom'

class SignUp extends Component{
  state ={
    email: '',
    password: ''
  }
signUp(){
  console.log('this.state', this.state);
  const { email, password } = this.state;
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  //catch error
    .catch(error => {
      //console.log('error', error);
      this.setState({error})
    })
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
            placeholder ="email"
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
          onClick = {() => this.signUp()}
        > Sign Up
        </button>
      </div>
      <div> {this.state.error.message}</div>
    </div>
    )
  }
}

export default withRouter(SignUp);
