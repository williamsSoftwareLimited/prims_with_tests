export declare class Tester {
    className: string;
    constructor(className: string);
    exists(anObject: object): void;
    compareNumber(actualValue: number, expectedValue: number, message?: string): void;
    compareArray(actualValue: any, expectedValue: any, message?: string): void;
}
