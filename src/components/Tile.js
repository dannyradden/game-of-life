import React, { Component } from 'react';

import styled from 'styled-components';

const Button = styled.input`
  justify-content: space-between;
  width: 45px;
  height: 45px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
  font-size: 34px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
`;

class Tile extends Component {
  render() {
    return (
      <Button
        type="button"
        name={this.props.name}
        innerRef={this.props.inputRef}
        value={this.props.value}
        onClick={this.props.handleClick}
      />
    );
  }
}

export default Tile;
