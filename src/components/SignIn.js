import React, {Component} from 'react';
import { Input, Container, Button, Header, Icon } from 'semantic-ui-react'
import fire from '../utils/firebase'
import {withRouter} from 'react-router-dom'


class SignIn extends Component {
  state ={
    email: '',
    password: ''
  }
link = ()=> {
  this.props.history.push('/user')
}
  render (){
    let button = (
      <Button  animated>
        <Button.Content visible>
          Sign In
        </Button.Content>
        <Button.Content hidden
         onClick={this.link}
        ><Icon name='right arrow' />
        </Button.Content>
      </Button>
    )
    return (
      <div>
      <br /><br /><br /><br /><br /><br /><br />
        <Header as='h2' textAlign='center' >
          Welcome
          <br/>
        </Header>
        <Container alignItems = 'center'>
        <Input
          iconPosition='left'
          placeholder='Email'
          onChange = {event => this.setState({email: event.target.value})}>
          <Icon name='at' />
          <input />
       </Input>
          <br />
          <br />
       <Input
          iconPosition='left'
          placeholder='Password'
          onChange = {event => this.setState({password: event.target.value})}>
          <Icon name='key' />
          <input />
         </Input>
        </Container> <br />
        {button}
    </div>
    )
  }
}

export default withRouter(SignIn);
