import { Tester } from "./tester";

export class FTester {
    static className: string = "";
    static message: string = "";
    private static tester: Tester = new Tester("");
    private static actual: any;
    static is(actual: any){
        this.tester.className=this.className;
        this.actual = actual;
        return this;
    }
    static msg(msg: string){
        this.message=msg;
        return this;
    }
    static equalTo(expected: any) : void {
        this.tester.equalTo(this.actual, expected, this.message);
    }
}