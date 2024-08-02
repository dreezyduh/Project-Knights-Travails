class board {
    constructor() {
        this.board = [];
        this.adjList = new Array(64).fill('');

    }

    createBoard() {
        for (let i = 0; i < 64; i++) {
            const vertex = new Vertex(i);
            this.board.push(vertex);
        }
    }
}

class Vertex {
    constructor(value) {
        this.value = value;
        this.predecessor = null;
        this.distance = null;
    }
}

function indexToVertex(index) {
    return (index[0]*8 + index[1]);
}

function parseAdjList(graph, source) {
    const bfsList = [];

    for (let i = 0; i < 64; i++) {
        bfsList[i] = {
            distance: null,
            predecessor: null
        }
    }
    bfsList[source].distance = 0;
    console.log(bfsList)
    const listQueue = [source];
    

    while(listQueue.length > 0) {
        const u = listQueue.shift();

        for(let j = 0; j < graph[u].length; j++) {
            let v = graph[u][j];
            if (bfsList[v].distance === null) {
                bfsList[v].distance = bfsList[u].distance + 1;
                bfsList[v].predecessor = u;
                listQueue.push(v);
            }
        }
    }
    return bfsList;
}

function vertexToIndex(vertexValue) {
    const row = Math.floor(vertexValue / 8);
    const col = vertexValue - row * 8
    return [row, col];
}

function getKnightPath(vertex) {
    const pathArr = [];
    while (vertex.predecessor !== null) {
        pathArr.unshift(vertexToIndex(vertex.value));
        vertex = vertex.predecessor;
    }
    pathArr.unshift(vertexToIndex(vertex.value));
    for (let element of pathArr) {
        console.log(element)
    }
}

function knightMoves(current, target) {
    const posMoves = [
        [2, 1], [2, -1],
        [1, 2], [1, -2],
        [-2, 1], [-2, -1],
        [-1, 2], [-1, -2]
    ];
    const queue = [current];
    newBoard.board[indexToVertex(current)].distance = 0;
    const tarX = target[0];
    const tarY = target[1];
    while (queue.length > 0) {
        const u = queue.shift();

        const curX = u[0];
        const curY = u[1];
        for (let move of posMoves) {
            if (curX + move[0] <= 7 &&
                curX + move[0] >= 0 && 
                curY + move[1] <= 7 && 
                curY + move[1] >= 0) 
            {
                const newPos = [curX + move[0], curY + move[1]];
                if (newBoard.board[indexToVertex(newPos)].distance === null) {
                    newBoard.board[indexToVertex(newPos)].predecessor = newBoard.board[indexToVertex(u)];
                    newBoard.board[indexToVertex(newPos)].distance = newBoard.board[indexToVertex(u)].distance + 1;
                    if (Array.isArray(newBoard.adjList[newBoard.board[indexToVertex(u)].value])) {
                        newBoard.adjList[newBoard.board[indexToVertex(u)].value].push(newBoard.board[indexToVertex(newPos)].value);
                    } else {
                        newBoard.adjList[newBoard.board[indexToVertex(u)].value] = [(newBoard.board[indexToVertex(newPos)].value)];
                    }
                }
                if (newPos[0] === tarX && newPos[1] === tarY)  {
                console.log(`Finally arrived at ` + newPos + ` in just ` + newBoard.board[indexToVertex(newPos)].distance + ` moves! Here is your path: `);
                getKnightPath(newBoard.board[indexToVertex(newPos)])
                return;
                }
            }
        }
    }
}

const newBoard = new board();
newBoard.createBoard();
knightMoves([5,4], [4,2])