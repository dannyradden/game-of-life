import React, { Component } from 'react';
import Tile from './Tile';

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.buttonElements = {};
    this.length = this.props.length;
  }

  handleClick(e) {
    if (e.target.value === '0') {
      e.target.value = 1;
    } else {
      e.target.value = 0;
    }
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
          handleClick={this.handleClick}
        />
      );
    }

    for (var i = 0; i < this.length; i++) {
      grid.push(<div key={i}>{items.splice(0, this.length)}</div>);
    }

    return grid;
  }
  nextGen() {
    console.log('Next Gen');
  }

  render() {
    return (
      <div className="container">
        <div className="grid">{this.renderGrid()}</div>
        <button onClick={this.nextGen}>Next Generation!</button>
      </div>
    );
  }
}

export default GameOfLife;
