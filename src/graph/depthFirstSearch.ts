import { Graph } from "./graph";

export class DepthFirstSearch {
    private _marked: any;
    private _count: number;
    constructor(g: Graph, startVertex: string){
        this._marked = [];
        this._count=0;
        this.dfs(g, startVertex);
    }
    private dfs(g: Graph, v: string) {
        this._marked[v] = true;
        this._count++;
        for (let vertex of g.adjacentVertices(v)){
            if (!this.marked(vertex)) {
                console.log("unmarked: " + vertex + ", call dfs this vertex");
                this.dfs(g, vertex);
            } else {
                console.log("marked: " + vertex);
            }
        }
    }
    public marked(w: string): boolean {
        return this._marked[w];
    }
    public count(): number {
        return this._count;
    }
}