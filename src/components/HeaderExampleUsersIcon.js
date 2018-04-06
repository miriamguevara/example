import React, {Component} from 'react'
import {Container, Button, Header, Icon, Image } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom';

import SignUp from './SignUp'

class HeaderExampleUsersIcon extends Component{
  state={
    value: 'hello'
  }
  link2 = ()=> {
    this.props.history.push('/signUp')
  }
  render(){
    let button2 = (
      <Button  animated>
          <Button.Content visible>
            Sign Up
          </Button.Content>
          <Button.Content hidden
            onClick={this.link2}
          ><Icon name='right arrow' />
          </Button.Content>
      </Button>
    )
    return (
      <Container>
        <br/>
          <Header as= 'h3' floated= 'right'>
            {button2}
          </Header>
          <Header as='h2' floated='left'>
            Do ToDo
          </Header>
      </Container>
    )
  }
}
export default withRouter(HeaderExampleUsersIcon)
