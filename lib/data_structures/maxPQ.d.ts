export declare class MaxPQ {
    private pq;
    constructor();
    isEmpty(): boolean;
    size(): number;
    insert(v: string): void;
    delMax(): string;
    private less;
    private exch;
    private swim;
    private sink;
}
