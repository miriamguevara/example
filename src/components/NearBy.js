import Map from './Map'

import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {  Container } from 'semantic-ui-react'


class NearBy extends Component {
  state = {
    value: 'hello'
  }

  render() {
    return (
      <Container>
      <br/>
       <Map/>
      </Container>
    );
  }
}

export default withRouter(NearBy);
