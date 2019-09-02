export class Graph {
    numberOfVertices: number=0;
    numberOfEdges: number=0;
    adjacencyLists: any=[];    
    constructGraph(graphJson: any){
        //todo:
    }
    addEdge(v: string, w: string){
        if (v===w) return;
        this.addOneWayEdge(v, w);
        this.addOneWayEdge(w, v);
        this.numberOfEdges++;
    }
    addOneWayEdge(v:string, w: string){
        if (!this.vertexExists(v)) {
            this.adjacencyLists.push(v);
            this.adjacencyLists[v]=[];
        }
        if (!this.adjacentVertices(v).find(p=>p===w))
            this.adjacencyLists[v].push(w);
    }
    vertexExists(v: string):boolean{
        return this.adjacencyLists[v]!==undefined;
    }
    adjacentVertices(v: string): []{
        return this.adjacencyLists[v];
    }
    toString(): string{
        let s: string ="";
        this.adjacencyLists.forEach(vertex => {
            s+=vertex+": ";
            this.adjacentVertices(vertex).forEach(adjVertex => {
                s+=adjVertex+" ";
            });
            s+="; ";
        });
        return s;
    }
}