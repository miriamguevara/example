import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Container} from 'semantic-ui-react'


class Converter extends Component {

  render() {
    return (
      <Container>
        <iframe
          height="360"
          width="217"
          src="https://ssltools.forexprostools.com/currency-converter/index.php?from=12&to=14&force_lang=1">
          </iframe>

      </Container>
    );
  }
}

export default withRouter(Converter);
