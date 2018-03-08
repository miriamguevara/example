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
    fire.database().ref('/').on('value', (snapshot) => {
    //save to state
    this.setState({value: snapshot.val().comp1})
    //console.log(snapshot.val().comp1)
  });
  }
  //to write data (us. with onbutton click)
  writeData = () => {
    fire.database().ref('/').set({
      //erases all at root 
      comp1: this.state.newValue
    })
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
