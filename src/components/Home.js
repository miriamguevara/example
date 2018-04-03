import React, {Component} from 'react';
import fire from './../utils/firebase';
import {Link, withRouter} from 'react-router-dom'
import { Header, Icon, Image, Container, Button } from 'semantic-ui-react'
import img from '../images/list.png'


class Home extends Component {
  link = () => {
    this.props.history.push('/signIn')
  }
  link2 = () => {
    this.props.history.push('/signUp')
  }

  render() {

    let button = (
      <Button
        onClick={this.link}
      >Sign In </Button>
    )
    let button2 = (
      <Button
        onClick={this.link2}
      >Sign Up?</Button>
    )
    return (
      <Container>
      <br/>
      <Header as='h2' icon textAlign='center'>
        <Header.Content>
          Welcome!
        </Header.Content>
      </Header>
        <Container className='fancy' style={{textAlign: 'center', color: 'green'}}>
          <br/><img src={img} className="logo" alt="logo"/><br/>
          <div>{button}<br/> <br/> {button2}</div>



          </Container>
      </Container>
    );
  }
}

export default withRouter(Home);
