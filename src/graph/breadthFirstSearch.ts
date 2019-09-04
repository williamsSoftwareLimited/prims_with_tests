import { Graph } from "./graph";

export class BreadthFirstSearch {
    marked: any;
    constructor(g: Graph, startVertex: string){
        this.marked = [];
    }
    private dfs(g: Graph, v: string) {
        this.marked[v] = true;
    }
}