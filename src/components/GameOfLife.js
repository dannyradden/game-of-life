import React, { Component } from 'react';
import Tile from './Tile';

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.buttonElements = {};
  }

  renderRow() {
    let items = [];
    for (var i = 1; i < this.props.length + 1; i++) {
      items.push(
        <Tile
          key={i}
          name={'tile' + i}
          buttonRef={el => {
            if (!el) return;
            this.buttonElements[el.name] = el;
          }}
          value="0"
        />
      );
    }

    return items;
  }

  render() {
    return <div className="container">{this.renderRow()}</div>;
  }
}

export default GameOfLife;
