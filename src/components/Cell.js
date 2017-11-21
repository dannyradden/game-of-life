import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.value === 1 ? 'black ' : 'white')};
  width: 30px;
  height: 30px;
  margin: 1px;
  border-radius: 5px;
  outline: 0;
`;

class Cell extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() {
    return (
      <Button
        type="button"
        name={this.props.name}
        innerRef={this.props.inputRef}
        value={this.props.value}
        onClick={this.props.handleClickCell}
        data-id={this.props.dataId}
      />
    );
  }
}

export default Cell;
