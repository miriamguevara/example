import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom';

class MainMenu extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (
    e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} />
        <Menu.Item name='list'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick} />
        <Menu.Item name='extra'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    );
  }
}
export default withRouter(MainMenu);
