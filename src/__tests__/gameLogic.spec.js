import React from 'react';
import { countNeighbors } from '../logic/gameLogic';

describe('can count neighbors', () => {
  test('none', () => {
    const cellArray = [0, 0, 0, 0, 1, 0, 0, 0, 0];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(0);
  });
  test('on top', () => {
    const cellArray = [0, 1, 0, 0, 1, 0, 0, 0, 0];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(1);
  });
  test('on top-left', () => {
    const cellArray = [1, 0, 0, 0, 1, 0, 0, 0, 0];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(1);
  });
  test('on top-right', () => {
    const cellArray = [0, 0, 1, 0, 1, 0, 0, 0, 0];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(1);
  });
  test('on bottom', () => {
    const cellArray = [0, 0, 0, 0, 1, 0, 0, 1, 0];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(1);
  });
  test('on bottom-left', () => {
    const cellArray = [0, 0, 0, 0, 1, 0, 1, 0, 0];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(1);
  });
  test('on bottom-right', () => {
    const cellArray = [0, 0, 0, 0, 1, 0, 0, 0, 1];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(1);
  });
  test('on left', () => {
    const cellArray = [0, 0, 0, 1, 1, 0, 0, 0, 0];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(1);
  });
  test('on right', () => {
    const cellArray = [0, 0, 0, 0, 1, 1, 0, 0, 0];
    const columns = 3;
    const indexNumber = 4;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(1);
  });
  test('if on top edge', () => {
    const cellArray = [1, 1, 1, 0, 1, 0, 0, 0, 0];
    const columns = 3;
    const indexNumber = 1;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(3);
  });
  test('if on left edge', () => {
    const cellArray = [1, 0, 0, 1, 1, 0, 1, 0, 0];
    const columns = 3;
    const indexNumber = 3;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(3);
  });
  test('if on right edge', () => {
    const cellArray = [0, 0, 1, 0, 1, 1, 0, 0, 1];
    const columns = 3;
    const indexNumber = 5;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(3);
  });
  test('if on bottom edge', () => {
    const cellArray = [0, 0, 0, 0, 1, 0, 1, 1, 1];
    const columns = 3;
    const indexNumber = 7;

    expect(countNeighbors(indexNumber, columns, cellArray)).toEqual(3);
  });
  test('of mixed assortment', () => {
    const cellArray = [1, 0, 1, 0, 1, 0];
    const columns = 3;

    expect(countNeighbors(0, columns, cellArray)).toEqual(1);
    expect(countNeighbors(1, columns, cellArray)).toEqual(3);
    expect(countNeighbors(2, columns, cellArray)).toEqual(1);
    expect(countNeighbors(3, columns, cellArray)).toEqual(2);
    expect(countNeighbors(4, columns, cellArray)).toEqual(2);
    expect(countNeighbors(5, columns, cellArray)).toEqual(2);
  });
});
