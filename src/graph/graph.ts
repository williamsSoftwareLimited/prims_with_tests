export class Graph {
    numberOfVertices: number=0;
    numberOfEdges: number=0;
    adjacencyLists: any=[];    
    constructGraph(graphJson: any){
        //todo:
    }
    addEdge(v: number, w: number){

        if (!this.adjacencyLists[v]) {
            this.adjacencyLists.push(v);
            this.adjacencyLists[v]=[];
        }
        this.adjacencyLists[v].push(w);
        this.numberOfEdges++;
    }
    adjacentVertices(v: number){
        return this.adjacencyLists[v];
    }
}