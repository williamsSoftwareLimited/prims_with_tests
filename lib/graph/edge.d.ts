export declare class Edge {
    private v;
    private w;
    private weight;
    constructor(v: string, w: string, weight: number);
    getWeight(): number;
    either(): string;
    other(vertex: string): string;
    compareTo(that: Edge): 1 | 0 | -1;
    toString(): string;
}
