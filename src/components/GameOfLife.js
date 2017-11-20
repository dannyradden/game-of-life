import React, { Component } from 'react';
import Tile from './Tile';

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.rows = this.props.rows;
    this.columns = this.props.columns;
    this.area = this.rows * this.columns;

    this.state = { cellArray: this.initializeGenArray() };

    this.handleClick = this.handleClick.bind(this);
    this.nextGen = this.nextGen.bind(this);
    this.countNeighbors = this.countNeighbors.bind(this);
    this.buttonElements = {};
  }

  initializeGenArray() {
    if (this.props.seed && this.props.seed.length === this.area) {
      return this.props.seed;
    } else {
      return Array(this.area).fill(0);
    }
  }

  handleClick({ target }) {
    let genCopy = this.state.cellArray;
    if (target.value === '0') {
      target.value = 1;
      genCopy[target.dataset.id] = 1;
    } else {
      target.value = 0;
      genCopy[target.dataset.id] = 0;
    }
    this.setState({ cellArray: genCopy });
  }

  renderGrid() {
    let items = [];
    let grid = [];
    for (var i = 1; i < this.area + 1; i++) {
      items.push(
        <Tile
          key={i}
          name={'tile' + i}
          buttonRef={el => {
            if (!el) return;
            this.buttonElements[el.name] = el;
          }}
          value={this.state.cellArray[i - 1]}
          handleClick={this.handleClick}
          dataId={i - 1}
        />
      );
    }

    for (var x = 0; x < this.rows; x++) {
      grid.push(<div key={x}>{items.splice(0, this.columns)}</div>);
    }

    return grid;
  }

  nextGen() {
    const cellArray = this.state.cellArray;
    let cellArrayCopy = [...cellArray];

    cellArray.forEach((e, i) => {
      let neighbors = this.countNeighbors(i);
      if (e === 0) {
        if (neighbors === 3) {
          cellArrayCopy[i] = 1;
        }
      } else {
        if (neighbors === 0 || neighbors === 1 || neighbors > 3) {
          cellArrayCopy[i] = 0;
        }
      }
    });

    this.setState({ cellArray: cellArrayCopy });
  }

  countNeighbors(index) {
    let count = 0;
    const array = this.state.cellArray;

    const notOnLeftEdge = index % this.columns !== 0;
    const notOnRightEdge = (index + 1) % this.columns !== 0;
    const notOnTopEdge = array[index - this.columns] !== undefined;
    const notOnBottomEdge = array[index + this.columns] !== undefined;

    const top = array[index - this.columns] === 1;
    const bot = array[index + this.columns] === 1;
    const left = array[index - 1] === 1;
    const right = array[index + 1] === 1;
    const topLeft = array[index - 1 - this.columns] === 1;
    const topRight = array[index + 1 - this.columns] === 1;
    const botLeft = array[index - 1 + this.columns] === 1;
    const botRight = array[index + 1 + this.columns] === 1;

    if (notOnTopEdge) {
      if (top) {
        count += 1;
      }
      if (notOnLeftEdge && topLeft) {
        count += 1;
      }
      if (notOnRightEdge && topRight) {
        count += 1;
      }
    }
    if (notOnBottomEdge) {
      if (bot) {
        count += 1;
      }
      if (notOnLeftEdge && botLeft) {
        count += 1;
      }
      if (notOnRightEdge && botRight) {
        count += 1;
      }
    }
    if (notOnLeftEdge && left) {
      count += 1;
    }
    if (notOnRightEdge && right) {
      count += 1;
    }
    return count;
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
