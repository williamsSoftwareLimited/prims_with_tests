export declare class Tester {
    className: string;
    constructor(className: string);
    exists(anObject: object, message?: string): void;
    compareString(actualString: string, expectedString: string, message?: string): void;
    compareArray(actualValue: any, expectedValue: any, message?: string): void;
    isTrue(expected2BTrue: boolean, message: string): void;
    isFalse(expected2BFalse: boolean, message: string): void;
    equalTo(actualValue: number, expectedValue: number, message?: string): void;
    moreThan(actualValue: number, expectedValue: number, message?: string): void;
    lessThan(actualValue: number, expectedValue: number, message?: string): void;
    private comparisons;
    private fullMessage;
}
