import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import GoogleMap from 'google-map-react';
import { Container, Segment ,Header, Image, Icon, Input } from 'semantic-ui-react'


const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 31.7618778, lng:-106.4850217 },
    zoom: 11
  }

render() {
    return (
      <div>
      <Segment clearing>
      <Header as='h2' floated='left'>
        Stores Near Me
      </Header>
      <Header as='h6' floated='right'>
        <Input icon='search' placeholder='Search...' />
      </Header>
      </Segment>

      <div className='google-map' style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 31.7618778}
            lng={-106.4850217}
            text={ 'Wheres Waldo?'}
          />
        </GoogleMapReact>
      </div>
      </div>
    )
  }
}
