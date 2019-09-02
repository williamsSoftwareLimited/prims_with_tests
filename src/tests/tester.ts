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
    compareNumber (actualValue: number, expectedValue: number, message: string = "") {
        let fullMessage: string = `${this.className}: ${message} `;
        if (actualValue === expectedValue){
            console.log(fullMessage + "successful, actual="+actualValue+" equals expected="+expectedValue);
        } else {
            console.log(fullMessage + "failed, actual="+actualValue+" equals expected="+expectedValue);
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
}