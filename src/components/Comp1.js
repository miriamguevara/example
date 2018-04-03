import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'
import fire from './../utils/firebase'

class Comp1 extends Component {
  state = {
    value: '',
    newValue: ''
  }

  componentDidMount(){
    // let t = this
    // fire.database().ref('/').on('value', function(snapshot) {
    //   t.setState({value: snapshot.val().comp1})
    // });
    fire.database().ref('/').on('value', (snapshot) => {
      this.setState({value: snapshot.val().comp1})
      console.log("data updated")
    });
  }

  render() {
    return (
      <Container className='fancy' style={{textAlign: 'center', color: 'red'}}>
        <div>This is Page 1!</div>
        <div>Database says: {this.state.value}</div>


      </Container>
    );
  }
}

export default Comp1;
