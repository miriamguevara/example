import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Container} from 'semantic-ui-react'

import MainMenu from './MainMenu'
import Gallery from './Gallery'

class User extends Component {
  state = {
    value: 'hello'
  }

  render() {
    return (
      <Container>
      <br />
       <MainMenu/>
       <br/> <br/>
       <Gallery/>
      </Container>
    );
  }
}

export default withRouter(User);
