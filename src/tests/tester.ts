export class Tester {
    className: string;
    constructor(className: string){
        this.className=className;
    }
    exists (anObject: object, message: string = ""){
        if (anObject){
            console.log(this.fullMessage(message) + "successfully created");
        } else {
            console.log(this.fullMessage(message) + "failed - couldn't create");
        }
    }
    compareString(actualString: string, expectedString: string, message: string = "") {
        this.comparisons(() => actualString === expectedString, message, "actual="+actualString+" equals expected="+expectedString);
    }
    compareArray (actualValue: any, expectedValue: any, message: string = "") {
        if (actualValue.length !== expectedValue.length){
            console.log(this.fullMessage(message) + `failed, the arrays are not the same length, actual length=${actualValue.length} and the expected length=${expectedValue.length}`);
            return;
        }
        for(var i=0; i<actualValue.length; i++){
            if (actualValue[i] === expectedValue[i]){
                console.log(this.fullMessage(message) + "successful, actual="+actualValue[i]+" equals expected="+expectedValue[i]);
            } else {
                console.log(this.fullMessage(message) + "failed, actual="+actualValue[i]+" equals expected="+expectedValue[i]);
                return;
            }  
        }        
    }
    isTrue(expected2BTrue: boolean, message: string) {
        this.comparisons(() => expected2BTrue===true, message, "is true");
    }
    isFalse(expected2BFalse: boolean, message: string) {
        this.comparisons(() => expected2BFalse===false, message, "is false");
    }
    equalTo (actualValue: number, expectedValue: number, message: string = "") { 
        this.comparisons(() => actualValue === expectedValue, message, "actual="+actualValue+" equals expected="+expectedValue)
    }
    moreThan(actualValue: number, expectedValue: number, message: string="") {  
        this.comparisons(() => actualValue > expectedValue, message, "actual="+actualValue+" is more than expected="+expectedValue);
    }
    lessThan(actualValue: number, expectedValue: number, message: string="") {
        this.comparisons(() => actualValue > expectedValue, message, "actual="+actualValue+" is less than expected="+expectedValue);

    }
    private comparisons(func: any, message: string, actualExpected: string="") {
        if (func){
            console.log(this.fullMessage(message) + `successful, ${actualExpected}`);
        } else {
            console.log(this.fullMessage(message) + `failed, ${actualExpected}`);
        }   
    }
    private fullMessage(message: string): string {
        return `${this.className}: ${message} `;
    }
}
