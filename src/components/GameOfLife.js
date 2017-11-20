import React, { Component } from 'react';
import Tile from './Tile';

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.state = { genArray: Array(props.rows ** props.columns).fill(0) };

    this.buttonElements = {};
    this.rows = this.props.rows;
    this.columns = this.props.columns;
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
    for (var i = 1; i < this.columns * this.rows + 1; i++) {
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

    for (var i = 0; i < this.rows; i++) {
      grid.push(<div key={i}>{items.splice(0, this.columns)}</div>);
    }

    return grid;
  }
  nextGen() {
    console.log('hi');
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
