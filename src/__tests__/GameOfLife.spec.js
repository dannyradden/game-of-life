import React from 'react';
import { shallow } from 'enzyme';
import GameOfLife from '../components/GameOfLife';

describe('rendering', () => {
  test('GameOfLife renders correctly', () => {
    const component = shallow(<GameOfLife rows={2} columns={2} seed={[0, 1, 0, 1]} />);
    expect(component).toMatchSnapshot();
  });

  test('cellArray uses seed if correct length', () => {
    const seed = [0, 1, 0, 1];
    const component = shallow(<GameOfLife rows={2} columns={2} seed={seed} />);
    expect(component.state().cellArray).toEqual(seed);
  });

  test('cellArray doesnt use seed if correct length', () => {
    const seed = [0, 1, 0];
    const component = shallow(<GameOfLife rows={2} columns={2} seed={seed} />);
    expect(component.state().cellArray).not.toEqual(seed);
  });
});

describe('State changes appropriately', () => {
  test('when Next Generation! is clicked', () => {
    const seed = [0, 0, 1, 0, 1, 1, 0, 1, 1];
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    component.find('.nextGenButton').simulate('click');
    expect(component.state().cellArray).toEqual([0, 1, 1, 0, 0, 0, 0, 1, 1]);
    component.find('.nextGenButton').simulate('click');
    expect(component.state().cellArray).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
