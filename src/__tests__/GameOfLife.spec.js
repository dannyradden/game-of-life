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

describe('can count neighbors', () => {
  test('none', () => {
    const seed = [0, 0, 0, 0, 1, 0, 0, 0, 0];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);
    // component. = jest.fn();
    // component.update();
    expect(component.instance().countNeighbors(indexNumber)).toEqual(0);
  });
  test('on top', () => {
    const seed = [0, 1, 0, 0, 1, 0, 0, 0, 0];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(1);
  });
  test('on top-left', () => {
    const seed = [1, 0, 0, 0, 1, 0, 0, 0, 0];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(1);
  });
  test('on top-right', () => {
    const seed = [0, 0, 1, 0, 1, 0, 0, 0, 0];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(1);
  });
  test('on bottom', () => {
    const seed = [0, 0, 0, 0, 1, 0, 0, 1, 0];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(1);
  });
  test('on bottom-left', () => {
    const seed = [0, 0, 0, 0, 1, 0, 1, 0, 0];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(1);
  });
  test('on bottom-right', () => {
    const seed = [0, 0, 0, 0, 1, 0, 0, 0, 1];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(1);
  });
  test('on left', () => {
    const seed = [0, 0, 0, 1, 1, 0, 0, 0, 0];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(1);
  });
  test('on right', () => {
    const seed = [0, 0, 0, 0, 1, 1, 0, 0, 0];
    const indexNumber = 4;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(1);
  });
  test('if on top edge', () => {
    const seed = [1, 1, 1, 0, 1, 0, 0, 0, 0];
    const indexNumber = 1;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(3);
  });
  test('if on left edge', () => {
    const seed = [1, 0, 0, 1, 1, 0, 1, 0, 0];
    const indexNumber = 3;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(3);
  });
  test('if on right edge', () => {
    const seed = [0, 0, 1, 0, 1, 1, 0, 0, 1];
    const indexNumber = 5;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(3);
  });
  test('if on bottom edge', () => {
    const seed = [0, 0, 0, 0, 1, 0, 1, 1, 1];
    const indexNumber = 7;
    const component = shallow(<GameOfLife rows={3} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(indexNumber)).toEqual(3);
  });
  test('of mixed assortment', () => {
    const seed = [1, 0, 1, 0, 1, 0];
    const component = shallow(<GameOfLife rows={2} columns={3} seed={seed} />);

    expect(component.instance().countNeighbors(0)).toEqual(1);
    expect(component.instance().countNeighbors(1)).toEqual(3);
    expect(component.instance().countNeighbors(2)).toEqual(1);
    expect(component.instance().countNeighbors(3)).toEqual(2);
    expect(component.instance().countNeighbors(4)).toEqual(2);
    expect(component.instance().countNeighbors(5)).toEqual(2);
  });
});

describe('logic', () => {
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
