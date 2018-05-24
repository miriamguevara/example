import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Container} from 'semantic-ui-react'


class Pintterest extends Component {

  render() {
    return (
      <Container>
        <a
        data-pin-do="embedPin"
        data-pin-width="medium"
         href="https://www.pinterest.com/pin/99360735500167749/">
         </a>
         <script type = "text/javascript" async defer src="//assets.pinterest.com/js/pinit.js"></script>
      </Container>
    );
  }
}

export default withRouter(Pintterest);
