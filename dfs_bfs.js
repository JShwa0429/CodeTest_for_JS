"use strict";

const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().split("\n");

const [N, M, V] = input[0].split(" ").map((data) => Number(data));

const graph = new Array(N + 1).fill([]);
for (let i = 1; i <= M; i++) {
  graph[i] = input[i].split(" ").map((data) => Number(data));
}
console.log(N, M, V, graph);
const dfs_visited = new Array(N + 1).fill(false);
const bfs_visited = new Array(N + 1).fill(false);

//   const dfs = (v) => {
//     dfs_visited[v] = true;
//     dfs_graph.push(v);
//     for (let i = 0; i < graph.length; i++) {
//       if (graph[v][i] === 1 && dfs_visited[i] === false) {
//         dfs(i);
//       }
//     }
//   };

//   const bfs = (v) => {
//     let queue = [];
//     queue.push(v);
//     bfs_graph.push(v);

//     while (queue.length !== 0) {
//       let dequeue = queue.shift();
//       bfs_visited[dequeue] = true;
//       for (let i = 0; i < graph.length; i++) {
//         if (graph[dequeue][i] === 1 && bfs_visited) bfs_visited[i] = true;
//         queue.push(i);
//         bfs_graph.push(i);
//       }
//     }
//   };

//   dfs(V);
//   bfs(V);

//   console.log(dfs_graph.join(" "));
//   console.log(bfs_graph.join(" "));
