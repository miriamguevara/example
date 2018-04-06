import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import MainMenu from './MainMenu'

class User extends Component {
  state = {
    value: 'hello'
  }

  render() {
    return (
      <Container>
        <Container className='fancy' style={{textAlign: 'center', color: 'red'}}>
        User Page {this.props.match.params.id}
        </Container>
      <MainMenu/>
      </Container>
    );
  }
}

export default withRouter(User);
