export class MaxPQ {
    private pq: string[] = [];
    constructor(){
        this.pq.push(""); //index zero isn't used
    }
    public isEmpty(): boolean {
        return this.pq.length==1;
    }
    public size(): number {
        return this.pq.length-1;
    }
    public insert(v: string) {
        this.pq.push(v);        
        this.swim();
    }
    public delMax(): string {
        console.log(`delMax() max is ${this.pq[1]}`);
        var max = this.pq[1];
        console.log(`exchanging 1 and ${this.size()}`);
        this.exch(1, this.size());
        this.pq.pop();
        this.sink(1);
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
    private swim() {
        var k = this.size();
        console.log(`swim: pq length is ${this.pq.length}`);
        while(k>1 && this.less(Math.floor(k/2), k)){
            this.exch(Math.floor(k/2), k);
            k=Math.floor(k/2);
        }
    }
    private sink(k: number){
        while(2*k <= this.size()){
            var j = 2*k;
            if (j < this.size() && this.less(j, j+1)) j++;
            if (!this.less(k, j)) break;
            k = j;
        }
    }
}