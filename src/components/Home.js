import React, {Component} from 'react';
import {Link, withRouter} from 'react-router'
import fire from './utils/firebase'
import {Container, Button } from 'semantic-ui-react'

class Home extends Component {
  state = {
    value: 'henlo'
  }
  //to actually use
  componentDidMount(){
    let t = this
    fire.database().ref('/').on('value', function(snapshot) {
      //save to state
      //t.setState({value: snapshot.val().comp1})
      console.log(snapshot.val)
  });
  }

  link  = () => {
    this.props.history.push('/comp2')
  }
  render() {
    return (
      <Container>

      </Container>
    );
  }
}

export default withRouter(Home);
