import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import {withRouter} from 'react-router-dom'
import { Container,  Segment ,Header, Input} from 'semantic-ui-react'

import MainMenu from './MainMenu'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Map extends Component {
  static defaultProps = {
    center: { lat: 31.7618778, lng:-106.4850217 },
    zoom: 11
  }
  link = ()=> {
    this.props.history.push('/user')
  }

render() {
    return (

      <Container>
      <MainMenu/>
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
      </Container>
    )
  }
}
export default withRouter(Map);
