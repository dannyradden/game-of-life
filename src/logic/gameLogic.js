export function nextGen(columns, cellArray) {
  let cellArrayCopy = [...cellArray];

  cellArray.forEach((e, i) => {
    let neighbors = countNeighbors(i, columns, cellArray);
    if (e === 0) {
      if (neighbors === 3) {
        cellArrayCopy[i] = 1;
      }
    } else {
      if (neighbors === 0 || neighbors === 1 || neighbors > 3) {
        cellArrayCopy[i] = 0;
      }
    }
  });

  return cellArrayCopy;
}

export function countNeighbors(index, columns, array) {
  let count = 0;

  const notOnLeftEdge = index % columns !== 0;
  const notOnRightEdge = (index + 1) % columns !== 0;
  const notOnTopEdge = array[index - columns] !== undefined;
  const notOnBottomEdge = array[index + columns] !== undefined;

  const top = array[index - columns] === 1;
  const bot = array[index + columns] === 1;
  const left = array[index - 1] === 1;
  const right = array[index + 1] === 1;
  const topLeft = array[index - 1 - columns] === 1;
  const topRight = array[index + 1 - columns] === 1;
  const botLeft = array[index - 1 + columns] === 1;
  const botRight = array[index + 1 + columns] === 1;

  if (notOnTopEdge) {
    if (top) {
      count += 1;
    }
    if (notOnLeftEdge && topLeft) {
      count += 1;
    }
    if (notOnRightEdge && topRight) {
      count += 1;
    }
  }
  if (notOnBottomEdge) {
    if (bot) {
      count += 1;
    }
    if (notOnLeftEdge && botLeft) {
      count += 1;
    }
    if (notOnRightEdge && botRight) {
      count += 1;
    }
  }
  if (notOnLeftEdge && left) {
    count += 1;
  }
  if (notOnRightEdge && right) {
    count += 1;
  }
  return count;
}
