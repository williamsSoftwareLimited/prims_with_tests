export class Tester {
    className: string;
    constructor(className: string){
        this.className=className;
    }
    exists (anObject: object){
        if (anObject){
            console.log(this.className + "successfully created");
        } else {
            console.log(this.className + "failed - couldn't create");
        }
    }
    compareString(actualString: string, expectedString: string, message: string = "") {
        let fullMessage: string = `${this.className}: ${message} `;
        if (actualString === expectedString){
            console.log(fullMessage + "successful, actual="+actualString+" equals expected="+expectedString);
        } else {
            console.log(fullMessage + "failed, actual="+actualString+" equals expected="+expectedString);
        }  
    }
    compareArray (actualValue: any, expectedValue: any, message: string = "") {
        let fullMessage: string = `${this.className}: ${message} `;
        if (actualValue.length !== expectedValue.length){
            console.log(`${fullMessage} failed, the arrays are not the same length, actual length=${actualValue.length} and the expected length=${expectedValue.length}`);
            return;
        }
        for(var i=0; i<actualValue.length; i++){
            if (actualValue[i] === expectedValue[i]){
                console.log(fullMessage + "successful, actual="+actualValue[i]+" equals expected="+expectedValue[i]);
            } else {
                console.log(fullMessage + "failed, actual="+actualValue[i]+" equals expected="+expectedValue[i]);
                return;
            }  
        }
        
    }
    isTrue(expected2BTrue: boolean, message: string) {
        let fullMessage: string = `${this.className}: ${message} `;
        if (expected2BTrue===true){
            console.log(fullMessage + "success, is true");
        } else {
            console.log(fullMessage + "failed, is false");
        }  
    }
    isFalse(expected2BFalse: boolean, message: string) {
        let fullMessage: string = `${this.className}: ${message} `;
        if (expected2BFalse===false){
            console.log(fullMessage + "success, is false");
        } else {
            console.log(fullMessage + "failed, is true");
        }  
    }
    equalTo (actualValue: number, expectedValue: number, message: string = "") {
        let fullMessage: string = `${this.className}: ${message} `;
        if (actualValue === expectedValue){
            console.log(fullMessage + "successful, actual="+actualValue+" equals expected="+expectedValue);
        } else {
            console.log(fullMessage + "failed, actual="+actualValue+" equals expected="+expectedValue);
        }  
    }
    moreThan(actualValue: number, expectedValue: number, message: string="") {
        let fullMessage: string = `${this.className}: ${message} `;
        if (actualValue > expectedValue){
            console.log(fullMessage + "successful, actual="+actualValue+" is more than expected="+expectedValue);
        } else {
            console.log(fullMessage + "failed, actual="+actualValue+" is less than expected="+expectedValue);
        }   
    }
    lessThan(actualValue: number, expectedValue: number, message: string="") {
        let fullMessage: string = `${this.className}: ${message} `;
        if (actualValue < expectedValue){
            console.log(fullMessage + "successful, actual="+actualValue+" is less than expected="+expectedValue);
        } else {
            console.log(fullMessage + "failed, actual="+actualValue+" is more than expected="+expectedValue);
        }   
    }
}
