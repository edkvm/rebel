import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MainNavigation extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return(
      <div>
        <Menu>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='documentation' active={activeItem === 'documentation'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    )
  }
}