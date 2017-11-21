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

describe('Approriate state change', () => {
  test('cell dies with 0 neighbors', () => {
    const seed = [0, 0, 0, 0, 1, 0, 0, 0, 0];
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);
    component.find('button').simulate('click');

    expect(component.state().cellArray[4]).toEqual(0);
  });

  test('cell survives with 2 neighbors', () => {
    const seed = [0, 1, 0, 0, 1, 0, 0, 1, 0];
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);
    component.find('button').simulate('click');

    expect(component.state().cellArray[4]).toEqual(1);
  });

  test('cell survives with 3 neighbors', () => {
    const seed = [0, 1, 0, 0, 1, 1, 0, 1, 0];
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);
    component.find('button').simulate('click');

    expect(component.state().cellArray[4]).toEqual(1);
  });

  test('cell dies with 4 neighbors', () => {
    const seed = [0, 1, 0, 1, 1, 1, 0, 1, 0];
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);
    component.find('button').simulate('click');

    expect(component.state().cellArray[4]).toEqual(0);
  });

  test('dead cell reproduces with 3 neighbors', () => {
    const seed = [0, 1, 0, 0, 0, 1, 0, 1, 0];
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);
    component.find('button').simulate('click');

    expect(component.state().cellArray[4]).toEqual(1);
  });
});
