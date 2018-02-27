import React, { Component }  from 'react';
import {Container, Button} from 'sematnic-ui-react'
import {withRouter} from 'react-router-dom'
import fire from './utils/firebase'

class ToDoList extends Component{
  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }
changeUserInput(input){
  this.setState({
    userInput: input
  }, ()=> console.log(input))
}
state = {
  value: 'test'
}
componentDidMount(){
  var task = fire.database().ref('/');
  task.on('value', function(snapshot) {
    //save to state
    //this.setState({value:})
    console.log(snapshot)
});
}
  render(){
    return(
      <div className="list-main">
        <input
          onChange ={ (e)=>this.changeUserInput(e.target.value)}
          value = {this.state.userInput}
          type = "text"
        />
        <button>  onClick={ } </button>
      </div>
    );
  }
}
export default withRouter(Home);
