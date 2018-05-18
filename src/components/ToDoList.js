import React, { Component }  from 'react';
import {Container, Button, Input, Icon, Checkbox } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'
import fire from './../utils/firebase'

class ToDoList extends Component{
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // set up react state
  }
  componentWillMount(){
    //rreate reference to items in database
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      //update state when item is added to database
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // prevent form submit from reloading the page
    // send  item to Firebase
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // clear the input
  }
  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          {
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
    );
  }
}
export default withRouter(ToDoList);
