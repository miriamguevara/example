import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
import {  Container} from 'semantic-ui-react'
import HeaderExampleUsersIcon from './HeaderExampleUsersIcon'
import SignIn from './SignIn'


class Home extends Component {
  render() {
    return (
      <div className = "list">
      <br/>
      <Container>
      <HeaderExampleUsersIcon/>
      <SignIn/>
      </Container>
      </div>
    );
  }
}

export default withRouter(Home);
