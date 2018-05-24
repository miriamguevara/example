import React, { Component } from 'react';

import { Container,Header } from 'semantic-ui-react'

class PageNotFound extends Component {
  state = {
    value: 'hello'
  }



  render() {

    return (

      <Container >
      <Header as='h2' floated='center'>
          Page Not Found!
        </Header>
      </Container>
    );
  }
}

export default PageNotFound;
