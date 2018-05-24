import React, { Component } from 'react'
import {Button, Icon, Container, Header } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom';

class MainMenu extends Component {
  link = ()=> {
      this.props.history.push('/')
    }
  link2 = ()=> {
      this.props.history.push('/edituser')
    }

  render(){
    let button = (
      <Button  animated>
          <Button.Content visible>
            Log Out
          </Button.Content>
          <Button.Content hidden
            onClick={this.link}
          ><Icon name='right arrow' />
          </Button.Content>
      </Button>
    )
    let button2 = (
      <Button icon
        onClick={this.link2}
        circular icon = 'user circle outline' />

    )
    return (
      <Container>
        <br/>
          <Header as= 'h3' floated= 'right'>
            {button2}
          </Header>
          <Header as= 'h3' floated= 'right'>
            {button}
          </Header>
          <Header as='h3' floated='left'>
            Do ToDo
          </Header>
          <br/>
      </Container>
    )
  }
}
export default withRouter(MainMenu);
