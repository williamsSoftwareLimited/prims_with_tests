export declare class Graph {
    numberOfVertices: number;
    numberOfEdges: number;
    adjacencyLists: any;
    constructGraph(graphJson: any): void;
    addEdge(v: number, w: number): void;
    adjacentVertices(v: number): any;
}
