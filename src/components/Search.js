import React, {Component} from 'react';
import fire from './../utils/firebase';
import {Link, withRouter} from 'react-router-dom'
import { Input, Container} from 'semantic-ui-react'


class Search extends Component {
  render() {
    return (
      <Container>
        <Input icon='search' placeholder='Search...' />
      </Container>
    );
  }
}

export default withRouter(Search);
