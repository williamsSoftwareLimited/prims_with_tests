export class MaxPQ {
    private pq: string[] = [];
    private n: number = 1;
    constructor(){
        this.pq.push(""); //index zero isn't used
    }
    public isEmpty(): boolean {
        return this.n===1;
    }
    public size(): number {
        return this.n-1;
    }
    public insert(v: string) {
        this.pq.push(v);        
        this.swim(this.n);
        this.n++;
    }
    public delMax(): string {
        var max = this.pq[1];
        return max;
    }
    private less(i: number, j: number){
        console.log("less is "+(this.pq[i]<this.pq[j])+" for "+this.pq[i]+" and "+this.pq[j]);
        return this.pq[i]<this.pq[j];
    }
    private exch(i: number, j: number){
        var t = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = t;
    }
    private swim(k) {
        while(k>1 && this.less(Math.floor(k/2), k)){
            this.exch(Math.floor(k/2), k);
            k=Math.floor(k/2);
        }
    }
}