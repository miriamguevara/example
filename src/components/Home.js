import React, {Component} from 'react';
import fire from './../utils/firebase';
import {Link, withRouter} from 'react-router-dom'
import { Header, Icon, Image, Container, Button } from 'semantic-ui-react'
import img from '../images/list.png'
import HeaderExampleUsersIcon from './HeaderExampleUsersIcon'
import SignIn from './SignIn'


class Home extends Component {
  render() {
    return (
      <Container>
      <HeaderExampleUsersIcon/>
      <SignIn/>
      </Container>
    );
  }
}

export default withRouter(Home);
