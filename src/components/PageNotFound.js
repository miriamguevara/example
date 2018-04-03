import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'

class PageNotFound extends Component {
  state = {
    value: 'hello'
  }



  render() {

    return (
      
      <Container className='fancy' style={{textAlign: 'center', color: 'blue'}}>
      Page Not Found !!!!

      </Container>
    );
  }
}

export default PageNotFound;
