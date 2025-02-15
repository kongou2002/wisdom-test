#include <iostream>
#include <list>
#include <unordered_map>

class DirectedGraph {
private:
    // Hash table (adjacency list) where key = vertex, value = list of (neighbor, weight)
    std::unordered_map<int, std::list<std::pair<int, double>>> adjList;

public:
    // Function to add a directed edge (from -> to) with a given weight
    void addEdge(int from, int to, double weight) {
        adjList[from].push_back({to, weight});
    }

    // Function to display the adjacency list representation of the graph
    void displayGraph() {
        for (const auto &vertex : adjList) {
            std::cout << "Vertex " << vertex.first << " -> ";
            for (const auto &edge : vertex.second) {
                std::cout << "[" << edge.first << ", " << edge.second << "] ";
            }
            std::cout << "\n";
        }
    }
};

int main() {
    DirectedGraph graph;

    // Adding edges from the provided image
    graph.addEdge(4, 5, 0.35);
    graph.addEdge(5, 4, 0.35);
    graph.addEdge(4, 7, 0.37);
    graph.addEdge(5, 7, 0.28);
    graph.addEdge(7, 5, 0.28);
    graph.addEdge(5, 1, 0.32);
    graph.addEdge(0, 4, 0.38);
    graph.addEdge(0, 2, 0.26);
    graph.addEdge(7, 3, 0.39);
    graph.addEdge(1, 3, 0.29);
    graph.addEdge(2, 7, 0.34);
    graph.addEdge(6, 2, 0.40);
    graph.addEdge(3, 6, 0.52);
    graph.addEdge(6, 0, 0.58);
    graph.addEdge(6, 4, 0.93);

    // Displaying the adjacency list representation
    graph.displayGraph();

    return 0;
}
