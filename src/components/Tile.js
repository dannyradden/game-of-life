import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.value === 1 ? 'black ' : 'white')};
  color: ${props => (props.value === 1 ? 'white ' : 'black')};
  justify-content: space-between;
  width: 30px;
  height: 30px;
  margin: 1px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  outline: 0;
  }
`;

class Tile extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value ? true : false;
  }

  render() {
    return (
      <Button
        type="button"
        name={this.props.name}
        innerRef={this.props.inputRef}
        value={this.props.value}
        onClick={this.props.handleClick}
        data-id={this.props.dataId}
      />
    );
  }
}

export default Tile;
