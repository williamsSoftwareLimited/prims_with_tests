import { Edge } from "../graph/edge";
import { FTester } from "./fTester";

export class EdgeTests {
    static runTests () {
        console.log("Running EdgeTests...");

        FTester.className = "edge";
        var edge = new Edge("a", "b", 10);
        FTester.is(edge).existing();
        FTester.is(edge.either()).equalTo("b");
        FTester.is(edge.other("a")).equalTo("b");
        FTester.is(edge.other("b")).equalTo("a");
        FTester.is(edge.getWeight()).equalTo(10);
        FTester.throwing(()=>edge.other("a"));
        FTester.throwing(()=>edge.other("z"));

        var edgeWithBiggerWeight = new Edge("z", "x", 15);
        var edgeWithSmallerWeight = new Edge("z", "x", 5);
        var edgeWithSameWeight = new Edge("z", "x", 10);
        FTester.is(edge.compareTo(edgeWithBiggerWeight)).equalTo(-1);
        FTester.is(edge.compareTo(edgeWithSmallerWeight)).equalTo(1);
        FTester.is(edge.compareTo(edgeWithSameWeight)).equalTo(0);

        FTester.is(edge.toString()).equalTo("a-b 10");

        console.log("Finished EdgeTests");
    }
}