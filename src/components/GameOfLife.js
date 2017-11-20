import React, { Component } from 'react';
import Tile from './Tile';

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.state = { genArray: Array(props.length ** 2).fill(0) };

    this.buttonElements = {};
    this.length = this.props.length;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    let genCopy = this.state.genArray;
    if (target.value === '0') {
      target.value = 1;
      genCopy[target.dataset.id] = 1;
    } else {
      target.value = 0;
      genCopy[target.dataset.id] = 0;
    }
    this.setState({ genArray: genCopy });
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
          value={this.state.genArray[i - 1]}
          handleClick={this.handleClick}
          dataId={i - 1}
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
