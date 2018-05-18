import React, {Component} from 'react';
import { Header, Icon, Input, Container, Button } from 'semantic-ui-react'
import fire from '../utils/firebase'
import {withRouter} from 'react-router-dom'

class SignUp extends Component {
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
          Submit
        </Button.Content>
        <Button.Content hidden
         onClick={this.link}
        ><Icon name='right arrow' />
        </Button.Content>
      </Button>
    )
    return (
      <div className = "list">
      <br/>
      <Container >
      <br/>
      <Header as='h2' floated='left'>
          Do ToDo
        </Header>
      <br /><br /><br /><br /><br /><br /><br />
        <Header as='h2' textAlign='center' >
          Sign Up
          <br/>
        </Header>
        <div >
        <Input
          iconPosition='left'
          placeholder='Email'
          onChange = {event => this.setState({email: event.target.value})}>
          <Icon name='at' /><input />
        </Input>
          <br />
          <br />
        <Input
          iconPosition='left'
          placeholder='Password'
          onChange = {event => this.setState({password: event.target.value})}>
          <Icon name='key' /><input />
         </Input>
        </div> <br />
        {button}
    </Container>
    </div>
    )
  }
}
export default withRouter(SignUp);
