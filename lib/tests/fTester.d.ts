export declare class FTester {
    static className: string;
    static message: string;
    private static tester;
    private static actual;
    static is(actual: any): typeof FTester;
    static msg(msg: string): typeof FTester;
    static equalTo(expected: any): void;
}
