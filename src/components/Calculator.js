import React, {Component} from 'react';
import fire from './../utils/firebase';
import {Link, withRouter} from 'react-router-dom'
import { Container} from 'semantic-ui-react'


class Calculator extends Component {
  render() {
    return (
      <Container>
      <iframe
        width="215"
        height="302"
        src="http://www.calculator-1.com/outdoor/?f=666666&r=666666"
        scrolling="no"
        frameborder="0">
      </iframe>
      </Container>
    );
  }
}

export default withRouter(Calculator);
