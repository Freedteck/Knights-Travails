# Knight Moves

This JavaScript function, `knightMoves`, finds the shortest path for a knight on a chessboard from a starting square to an ending square.

## Usage

```javascript
const result = knightMoves([0, 0], [4, 5]);
console.log(result);
```

```javascript
const result2 = knightMoves([3, 3], [0, 0]);
console.log(result2);
```

## Description

The function uses a Breadth-First Search (BFS) algorithm to explore possible moves of a knight on an 8x8 chessboard. It returns a string indicating the number of moves and the path from the starting square to the ending square.

## Function Signature

```javascript
/**
 * Finds the shortest path for a knight on a chessboard.
 *
 * @param {Array} start - The starting square [x, y].
 * @param {Array} end - The ending square [x, y].
 * @returns {string} - A string indicating the number of moves and the path.
 */
function knightMoves(start, end) {
    // ... (function implementation)
}
```

## Example

```javascript
const result = knightMoves([0, 0], [4, 5]);
console.log(result);
```

Output:

```bash
You made it in 3 moves! Here's your path:
    [0,0]
    [1,2]
    [3,3]
```