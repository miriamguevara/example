import map from './map'
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Segment, Container, Header, Image, Icon, Input } from 'semantic-ui-react'

class Nearby extends Component {
  state = {
    value: 'hello'
  }

  render() {
    return (
      <Container>
    

       <map/>
      </Container>
    );
  }
}

export default withRouter(map);
