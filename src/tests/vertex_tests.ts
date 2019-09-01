import { Vertex } from '../prims/models/vertex';

export class VertexTests {
    className = 'Vertex: ';
    runTests () {
        var expectedName = "nameTest";
        var expectedWeight = 10;

        var vertex = new Vertex(expectedName, expectedWeight);
        console.log(this.className + "running tests");
        this.exists(vertex);
        this.compare(vertex.name, expectedName);  
        this.compare(vertex.weight, expectedWeight);
    }
    exists (anObject: object){
        if (anObject){
            console.log(this.className + "successfully created");
        } else {
            console.log(this.className + "failed - couldn't create");
        }
    }
    compare (actualValue: any, expectedValue: any) {
        if (actualValue === expectedValue){
            console.log(this.className + "successful, actual="+actualValue+" equals expected="+expectedValue);
        } else {
            console.log(this.className + "failed, actual="+actualValue+" equals expected="+expectedValue);
        }  
    }
}
