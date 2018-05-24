import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Container, Input,Icon, Button, Header } from 'semantic-ui-react'
import MainMenu from './MainMenu'
import fire from './../utils/firebase'

class EditUser extends Component {
  state = {
    value: '',
    newValue: ''
  }
  link = ()=> {
      this.props.history.push('/user')
    }

  componentDidMount(){
    let t = this
    fire.database().ref('/').on('value', function(snapshot) {
      t.setState({value: snapshot.val().user})
    });
  }

  writeData = (e) => {
      e.preventDefault();
    fire.database().ref('/').set({
      user: this.state.newValue
    });
  }



  render() {

    return (
      <Container className='fancy' style={{textAlign: 'left', color: 'black'}}>
      <br/>
       <MainMenu/>
       <br/>
       <Header as='h3'>Edit Profile</Header>

       <Header as='h3'>{this.state.value}</Header>
          <Input
            placeholder='Update First & Last Names'
            onChange={(event, data) => this.setState({newValue: data.value})}
          />

          <Button onClick={this.writeData}>
            Update
          </Button>
          <br/> <br/>
          <Button  animated>
              <Button.Content visible>
            Back to Home
              </Button.Content>
              <Button.Content hidden
                onClick={this.link}
              ><Icon name='left arrow' />
              </Button.Content>
          </Button>


      </Container>
    );
  }
}

export default withRouter(EditUser);
