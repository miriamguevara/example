import React, { Component }  from 'react';
import {Container, Button} from 'sematnic-ui-react'
import {withRouter} from 'react-router-dom'
import fire from './utils/firebase'

class ToDoList extends Component{
  constructor(props){
    super(props);

    this.state = {
      userInput: 'aaa',
      list: []
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
      <div className="list-main">
        <input
          onChange ={ (e)=>this.changeUserInput(e.target.value) }
          value = {this.state.userInput}
          type = "text"
        />
        <button>  onClick={ ()=> this.addToList(this.state.userInput) }> press me </button>

        <ul>
          {this.state.list.map( (val)=> <li>{val}</li>)}
        </ul>

      </div>
    );
  }
}
export default withRouter(ToDoList);
