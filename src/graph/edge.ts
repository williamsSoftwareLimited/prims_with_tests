export class Edge {
    private v: string;
    private w: string;
    private weight: number;
    constructor(v: string, w: string, weight: number){
        this.v=v;
        this.w=w;
        this.weight=weight;
    }
    public getWeight(){
        return this.weight;
    }
    public either(){
        return this.w;
    }
    public other(vertex: string){
        if (vertex===this.v) return this.w;
        else if (vertex===this.w) return this.v;
        else throw new Error("No other vertex");
    }
    compareTo(that: Edge) {
        if (this.weight<that.getWeight()) return -1;
        if (this.weight>that.getWeight()) return 1;
        else return 0;
    }
    toString() {
        return `${this.v}-${this.w} ${this.weight}`;
    }
}