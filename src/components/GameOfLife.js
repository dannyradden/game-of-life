import React, { Component } from 'react';
import Cell from './Cell';
import { nextGen } from '../logic/gameLogic';

class GameOfLife extends Component {
  constructor(props) {
    super(props);
    this.rows = this.props.rows;
    this.columns = this.props.columns;
    this.area = this.rows * this.columns;

    this.state = { cellArray: this.initializeCellArray() };

    this.handleClickCell = this.handleClickCell.bind(this);
    this.handleNextGen = this.handleNextGen.bind(this);
    this.buttonElements = {};
  }

  initializeCellArray() {
    if (this.props.seed && this.props.seed.length === this.area) {
      return this.props.seed;
    } else {
      return Array(this.area).fill(0);
    }
  }

  handleClickCell({ target }) {
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

  handleNextGen() {
    let cellArrayCopy = nextGen(this.columns, this.state.cellArray);
    this.setState({ cellArray: cellArrayCopy });
  }

  renderGrid() {
    let items = [];
    let grid = [];
    for (var i = 1; i < this.area + 1; i++) {
      items.push(
        <Cell
          key={i}
          name={'tile' + i}
          buttonRef={el => {
            if (!el) return;
            this.buttonElements[el.name] = el;
          }}
          value={this.state.cellArray[i - 1]}
          handleClickCell={this.handleClickCell}
          dataId={i - 1}
        />
      );
    }

    for (var x = 0; x < this.rows; x++) {
      grid.push(<div key={x}>{items.splice(0, this.columns)}</div>);
    }

    return grid;
  }

  render() {
    return (
      <div className="container">
        <div className="grid">{this.renderGrid()}</div>
        <button className="nextGenButton" onClick={this.handleNextGen}>
          Next Generation!
        </button>
      </div>
    );
  }
}

export default GameOfLife;
