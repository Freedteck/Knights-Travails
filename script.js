function knightMoves(start, end) {
    const dx = [1, 1, 2, 2, -1, -1, -2, -2];
    const dy = [2, -2, 1, -1, 2, -2, 1, -1];

    function isValidMove(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    const queue = [[...start]];
    const visited = Array.from({ length: 8 }, () => Array(8).fill(false));

    while (queue.length > 0) {
        const current = queue.shift();
        const [x, y] = current;

        if (x === end[0] && y === end[1]) {
            const path = [];
            let temp = [...end];
            while (temp[0] !== start[0] || temp[1] !== start[1]) {
                path.unshift([...temp]);
                const [px, py] = temp;
                temp = visited[px][py];
            }
            path.unshift([...start]);

            // Return the result in the desired format
            const moves = path.length - 1;
            const resultString = `You made it in ${moves} moves! Here's your path:\n${path.map(coord => `    [${coord.join()}]`).join('\n')}`;
            return resultString;
        }

        for (let i = 0; i < 8; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];

            if (isValidMove(newX, newY) && !visited[newX][newY]) {
                visited[newX][newY] = [...current];
                queue.push([newX, newY]);
            }
        }
    }

    return null;
}

// Example
const result = knightMoves([0, 0], [4, 5]);
console.log(result);
console.log(knightMoves([3,3],[0,0]));