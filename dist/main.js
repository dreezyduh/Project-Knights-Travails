/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class board {\r\n    constructor() {\r\n        this.board = [];\r\n        this.adjList = new Array(64).fill('');\r\n\r\n    }\r\n\r\n    createBoard() {\r\n        for (let i = 0; i < 64; i++) {\r\n            const vertex = new Vertex(i);\r\n            this.board.push(vertex);\r\n        }\r\n    }\r\n}\r\n\r\nclass Vertex {\r\n    constructor(value) {\r\n        this.value = value;\r\n        this.predecessor = null;\r\n        this.distance = null;\r\n    }\r\n}\r\n\r\nfunction indexToVertex(index) {\r\n    return (index[0]*8 + index[1]);\r\n}\r\n\r\nfunction parseAdjList(graph, source) {\r\n    const bfsList = [];\r\n\r\n    for (let i = 0; i < 64; i++) {\r\n        bfsList[i] = {\r\n            distance: null,\r\n            predecessor: null\r\n        }\r\n    }\r\n    bfsList[source].distance = 0;\r\n    console.log(bfsList)\r\n    const listQueue = [source];\r\n    \r\n\r\n    while(listQueue.length > 0) {\r\n        const u = listQueue.shift();\r\n\r\n        for(let j = 0; j < graph[u].length; j++) {\r\n            let v = graph[u][j];\r\n            if (bfsList[v].distance === null) {\r\n                bfsList[v].distance = bfsList[u].distance + 1;\r\n                bfsList[v].predecessor = u;\r\n                listQueue.push(v);\r\n            }\r\n        }\r\n    }\r\n    return bfsList;\r\n}\r\n\r\nfunction vertexToIndex(vertexValue) {\r\n    const row = Math.floor(vertexValue / 8);\r\n    const col = vertexValue - row * 8\r\n    return [row, col];\r\n}\r\n\r\nfunction getKnightPath(vertex) {\r\n    const pathArr = [];\r\n    while (vertex.predecessor !== null) {\r\n        pathArr.unshift(vertexToIndex(vertex.value));\r\n        vertex = vertex.predecessor;\r\n    }\r\n    pathArr.unshift(vertexToIndex(vertex.value));\r\n    for (let element of pathArr) {\r\n        console.log(element)\r\n    }\r\n}\r\n\r\nfunction knightMoves(current, target) {\r\n    const posMoves = [\r\n        [2, 1], [2, -1],\r\n        [1, 2], [1, -2],\r\n        [-2, 1], [-2, -1],\r\n        [-1, 2], [-1, -2]\r\n    ];\r\n    const queue = [current];\r\n    newBoard.board[indexToVertex(current)].distance = 0;\r\n    const tarX = target[0];\r\n    const tarY = target[1];\r\n    while (queue.length > 0) {\r\n        const u = queue.shift();\r\n\r\n        const curX = u[0];\r\n        const curY = u[1];\r\n        for (let move of posMoves) {\r\n            if (curX + move[0] <= 7 &&\r\n                curX + move[0] >= 0 && \r\n                curY + move[1] <= 7 && \r\n                curY + move[1] >= 0) \r\n            {\r\n                const newPos = [curX + move[0], curY + move[1]];\r\n                if (newBoard.board[indexToVertex(newPos)].distance === null) {\r\n                    newBoard.board[indexToVertex(newPos)].predecessor = newBoard.board[indexToVertex(u)];\r\n                    newBoard.board[indexToVertex(newPos)].distance = newBoard.board[indexToVertex(u)].distance + 1;\r\n                    if (Array.isArray(newBoard.adjList[newBoard.board[indexToVertex(u)].value])) {\r\n                        newBoard.adjList[newBoard.board[indexToVertex(u)].value].push(newBoard.board[indexToVertex(newPos)].value);\r\n                    } else {\r\n                        newBoard.adjList[newBoard.board[indexToVertex(u)].value] = [(newBoard.board[indexToVertex(newPos)].value)];\r\n                    }\r\n                }\r\n                if (newPos[0] === tarX && newPos[1] === tarY)  {\r\n                console.log(`Finally arrived at ` + newPos + ` in just ` + newBoard.board[indexToVertex(newPos)].distance + ` moves! Here is your path: `);\r\n                getKnightPath(newBoard.board[indexToVertex(newPos)])\r\n                return;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nconst newBoard = new board();\r\nnewBoard.createBoard();\r\nknightMoves([5,4], [4,2])\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;