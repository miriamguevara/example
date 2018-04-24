import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom';

class MainMenu extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (
    e, { name }) => this.setState({ activeItem: name })

  link = ()=> {
      this.props.history.push('/user')
    }
  link2 = ()=> {
      this.props.history.push('/toDoList')
    }
  link3 = ()=> {
      this.props.history.push('/')
    }
  link4 = ()=> {
      this.props.history.push('/nearby')
    }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          onClick={this.link}/>
        <Menu.Item name='list'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
          onClick={this.link2}/>
        <Menu.Item name='Near By'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
          onClick={this.link4}/>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
          onClick={this.link3}/>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default withRouter(MainMenu);
