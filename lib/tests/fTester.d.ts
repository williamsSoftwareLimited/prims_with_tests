export declare class FTester {
    static className: string;
    private static message;
    private static actual;
    static msg(message: string): typeof FTester;
    static is(actual: any): typeof FTester;
    static equalTo(expected: any): void;
    static existing(): void;
    static throwing(func: any): void;
}
