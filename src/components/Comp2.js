import React, { Component } from 'react';

import { Container, Input, Button } from 'semantic-ui-react'

import fire from './../utils/firebase'

class Comp2 extends Component {
  state = {
    value: '',
    newValue: ''
  }

  componentDidMount(){
    let t = this
    fire.database().ref('/').on('value', function(snapshot) {
      t.setState({value: snapshot.val().comp1})
    });
  }

  writeData = () => {
    fire.database().ref('/').set({
      comp1: this.state.newValue
    });
  }



  render() {

    return (
      <Container className='fancy' style={{textAlign: 'center', color: 'blue'}}>
        <div>{this.state.value}</div>
        <div>
          <Input
            placeholder='New Data...'
            onChange={(event, data) => this.setState({newValue: data.value})}
          />
        </div>
        <div>
          <Button onClick={this.writeData}>
            Change
          </Button>

        </div>

      </Container>
    );
  }
}

export default Comp2;
