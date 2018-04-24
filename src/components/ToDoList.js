import React, { Component }  from 'react';
import {Container, Button, Input, Icon, List, Checkbox } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'
import fire from './../utils/firebase'
import MainMenu from './MainMenu'

class ToDoList extends Component{
  constructor(props){
    super(props);

    this.state = {
      userInput: ' ',
      list: [ ]
    }
  }
changeUserInput(input){
  this.setState({
    userInput: input
  });
}
//make arrary to add to list
addToList(input){
  let listArrary = this.state.list;

  listArrary.push(input);

  this.setState({
    list: listArrary,
    userInput: ''
  })
}

state = {
  value: 'test'
}

  render() {
    return (
      <Container >
      <br />
      <MainMenu/>
      <br /><br />
        <Input
          placeholder='Task'
          onChange = {event => this.changeUserInput(event.target.value) }
          value = {this.state.userInput}>
         </Input>

        <Button
          onClick={ ()=> this.addToList(this.state.userInput) }
          ><Icon name='add'/>
        </Button>

        <ul>
         {this.state.list.map(
           (val)=> <li> <Checkbox label={<label>{val}</label>}/></li>)
         }

       </ul>

      </Container>
    );
  }
}
export default withRouter(ToDoList);
