import React, { Component } from 'react';

import { Button, Input, Container, Icon } from 'semantic-ui-react'

class ShoppingList extends Component {
  this.state = {
    buyItems: ['milk','bread','fruit']
  }

  render() {
    return (
      <div>
        <header>
          <img src = {image}/>
          <h1> Shopping List </h1>
        </header>
        <div className = "content">
            {
              buyItems.map(item =>{
                return <p key ={item}>{item}</p>
              })
            }
            </div>
              <label className = "sr-only" htmlFor = "newItemInput">Add New Item </label>

      </div>
    );
  }
}

export default withRouter(ShoppingList);
