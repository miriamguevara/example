import React, {Component} from 'react'
import { Container, Header, Icon, Image} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom';

class HeaderExampleUsersIcon extends Component {
  state = {
    value: 'hello'
  }
  render() {
    return (
      <Container>
        <br/>
        <Header as='h3' block><Icon name='checkmark box' />
          Do ToDo
        </Header>
      </Container>
    );
  }
}


export default withRouter(HeaderExampleUsersIcon);
