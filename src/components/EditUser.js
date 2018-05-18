import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class EditUser extends Component {
  state = {
    value: 'hello'
  }



  render() {

    return (

      <Container className='fancy' style={{textAlign: 'center', color: 'blue'}}>
      edit pageeee !!!!

      </Container>
    );
  }
}

export default withRouter(EditUser);
