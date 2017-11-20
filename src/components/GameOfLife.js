import React, { Component } from 'react';
import Tile from './Tile';

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.buttonElements = {};
    this.length = this.props.length;
  }

  renderGrid() {
    let items = [];
    let grid = [];
    for (var i = 1; i < this.length ** 2 + 1; i++) {
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

    for (var i = 0; i < this.length; i++) {
      grid.push(<div>{items.splice(0, this.length)}</div>);
    }

    return grid;
  }

  render() {
    return <div className="container">{this.renderGrid()}</div>;
  }
}

export default GameOfLife;
