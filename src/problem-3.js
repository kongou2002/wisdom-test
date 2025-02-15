"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runGraphDemo = void 0;
var createGraph = function () { return new Map(); };
var addEdge = function (graph, from, to, weight) {
    var updatedGraph = new Map(graph);
    updatedGraph.set(from, __spreadArray(__spreadArray([], (updatedGraph.get(from) || []), true), [[to, weight]], false));
    return updatedGraph;
};
var displayGraph = function (graph) {
    graph.forEach(function (edges, vertex) {
        console.log("Vertex ".concat(vertex, " ->"), edges.map(function (_a) {
            var to = _a[0], weight = _a[1];
            return "[".concat(to, ", ").concat(weight, "]");
        }).join(" "));
    });
};
var runGraphDemo = function () {
    var graph = createGraph();
    // Adding edges from the provided image
    var edges = [
        [4, 5, 0.35], [5, 4, 0.35], [4, 7, 0.37], [5, 7, 0.28],
        [7, 5, 0.28], [5, 1, 0.32], [0, 4, 0.38], [0, 2, 0.26],
        [7, 3, 0.39], [1, 3, 0.29], [2, 7, 0.34], [6, 2, 0.40],
        [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]
    ];
    graph = edges.reduce(function (g, _a) {
        var from = _a[0], to = _a[1], weight = _a[2];
        return addEdge(g, from, to, weight);
    }, graph);
    // Displaying the adjacency list representation
    displayGraph(graph);
};
exports.runGraphDemo = runGraphDemo;
