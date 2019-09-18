export class FTester {
    static className: string = "";
    private static message: string = "";
    private static actual: any;
    static msg(message: string){
        this.message=", "+message;
        return this;
    }
    static is(actual: any){
        this.actual = actual;
        return this;
    }
    static equalTo(expected: any): void {
        var operator="equal to";
        if (this.actual!==expected)
            operator="not " + operator;
        console.log(`${this.className}: actual(${this.actual}) ${operator} expected(${expected})${this.message}`)
    }
    static existing() : void {
        var operator="exist";
        if (this.actual){
            console.log(`${this.className} ${operator}s`);
        } else {
            console.log(`${this.className} doesn't ${operator}${this.message}`);
        }
    }
    static throwing(func: any): void {
        var operator = "thrown an error";
        try{
            func();
            operator = "not " + operator;
        } catch (e){ 
            operator = `${operator}, ${e}`;
        }
        console.log(`${this.className} has ${operator}`);
    }
}