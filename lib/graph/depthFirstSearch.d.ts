import { Graph } from "./graph";
export declare class DepthFirstSearch {
    private _marked;
    private _count;
    constructor(g: Graph, startVertex: string);
    private dfs;
    marked(w: string): boolean;
    count(): number;
}
