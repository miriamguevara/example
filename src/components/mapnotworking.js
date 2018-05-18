import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import GoogleMap from 'google-map-react';
import { Container, Embed, Segment ,Header, Image, Input } from 'semantic-ui-react'

import User from './User'
import MainMenu from './MainMenu'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 31.7618778, lng:-106.4850217 },
    zoom: 11
  }
  link = ()=> {
    this.props.history.push('/user')
  }

render() {
  let button3 = (
      <Button  animated>
          <Button.Content visible>
            Back
          </Button.Content>
          <Button.Content hidden
           onClick={this.link}
          ><Icon name='left arrow' />
          </Button.Content>
      </Button>
    )
    return (
      <Container>
      <br />
      <MainMenu/>

      <Header as='h2' floated='left'>
        Stores Near Me
      </Header>
      <br/><br/>
      <div>
        <Embed
        icon='right circle arrow'
        placeholder=' '
        url='https://www.google.com/maps'
        />
      </div>
      </Container>
    )
  }
}
