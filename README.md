# game-of-life

### How To Use

```js
yarn
yarn start
```

Click squares to set initial arrangement of cells

Click 'Next Generation!' to watch cells grow and die

You can change the GameOfLife props column and width in App.js to change the grid size

### Rules of life:

1. Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
