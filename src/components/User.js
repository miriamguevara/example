import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Container, Header, Image, Icon } from 'semantic-ui-react'

import MainMenu from './MainMenu'

class User extends Component {
  state = {
    value: 'hello'
  }

  render() {
    return (
      <Container>
      <br />
       <MainMenu/>

        <Header as='h2' icon textAlign='left'>
          <Header.Content>
            Your Profile
          </Header.Content>

       </Header>


      </Container>
    );
  }
}

export default withRouter(User);
