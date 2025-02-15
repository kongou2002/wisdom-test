const createGraph = (): Map<number, [number, number][]> => new Map();

const addEdge = (graph: Map<number, [number, number][]>, from: number, to: number, weight: number): Map<number, [number, number][]> => {
  const updatedGraph = new Map(graph);
  updatedGraph.set(from, [...(updatedGraph.get(from) || []), [to, weight]]);
  return updatedGraph;
};

const displayGraph = (graph: Map<number, [number, number][]>): void => {
  graph.forEach((edges, vertex) => {
    console.log(`Vertex ${vertex} ->`, edges.map(([to, weight]) => `[${to}, ${weight}]`).join(" "));
  });
};

export const runGraphDemo = () => {
  let graph = createGraph();

  // Adding edges from the provided image
  const edges: [number, number, number][] = [
    [4, 5, 0.35], [5, 4, 0.35], [4, 7, 0.37], [5, 7, 0.28],
    [7, 5, 0.28], [5, 1, 0.32], [0, 4, 0.38], [0, 2, 0.26],
    [7, 3, 0.39], [1, 3, 0.29], [2, 7, 0.34], [6, 2, 0.40],
    [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]
  ];

  graph = edges.reduce((g, [from, to, weight]) => addEdge(g, from, to, weight), graph);

  // Displaying the adjacency list representation
  displayGraph(graph);
};
