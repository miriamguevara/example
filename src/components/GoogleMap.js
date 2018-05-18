import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Container, Header} from 'semantic-ui-react'


class GoogleMap extends Component {

  render() {
    return (
      <Container>
      <Header as='h5' attached = 'top' floated='left'>
        Stores Near By
      </Header>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=16at4G3zw8v6OGPMS_9Uenk5ibUyCZmFE"
          height="245"
          width="215">

         </iframe>

      </Container>
    );
  }
}

export default withRouter(GoogleMap);
