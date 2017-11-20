import React from 'react';
import { shallow } from 'enzyme';
import GameOfLife from '../components/GameOfLife';

test('GameOfLife renders correctly', () => {
  const component = shallow(<GameOfLife rows={2} columns={2} seed={[0, 1, 0, 1]} />);
  expect(component).toMatchSnapshot();
});

test('genArray uses seed if correct length', () => {
  const seed = [0, 1, 0, 1];
  const component = shallow(<GameOfLife rows={2} columns={2} seed={seed} />);
  expect(component.state().genArray).toEqual(seed);
});

test('genArray doesnt use seed if correct length', () => {
  const seed = [0, 1, 0];
  const component = shallow(<GameOfLife rows={2} columns={2} seed={seed} />);
  expect(component.state().genArray).not.toEqual(seed);
});
