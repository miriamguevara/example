import React, {Component} from 'react';
import {Link, withRouter} from 'react-router'
import fire from './utils/firebase'
import {Container, Button } from 'semantic-ui-react'


class SignIn extends Component {
  stater = {
    value: 'gelo'
  }

  link  = () => {
    this.props.history.push('/comp2')
  }
  render (){

  }

 return (

 )

 export default withRouter(SignIn);
