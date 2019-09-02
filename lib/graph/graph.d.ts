export declare class Graph {
    numberOfVertices: number;
    numberOfEdges: number;
    adjacencyLists: any;
    constructGraph(graphJson: any): void;
    addEdge(v: string, w: string): void;
    addOneWayEdge(v: string, w: string): void;
    vertexExists(v: string): boolean;
    adjacentVertices(v: string): [];
    toString(): string;
}
