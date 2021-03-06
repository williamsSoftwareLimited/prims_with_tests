import { Graph } from "../graph/graph";
import { Tester } from "./tester";

export class GraphTests {
    static runTests () {
        var graph = new Graph();
        var tester = new Tester("Graph");
        graph.addEdge("a", "c");
        graph.addEdge("d", "a");

        tester.equalTo(graph.numberOfEdges, 2, "Edge number test");

        graph.addEdge("a", "b");
        graph.addEdge("a", "d");
        graph.addEdge("a", "a");

        tester.compareArray(graph.adjacentVertices("a"), ["c", "d", "b"], "Vertices test");

        console.log(graph.toString());

        tester.isTrue(graph.vertexExists("a"), "The vertex exists");
        tester.isFalse(graph.vertexExists("zzzz"), "The vertex exists");

        var actual=graph.adjacentVertices("b").slice(0,1).toString();
        tester.compareString("a", actual, "if 'a' points to 'b' then 'b' should point to 'a'");
    
        //should be no duplication
        let actualVertices = graph.adjacentVertices("a");
        actualVertices.forEach((elem, i, arr) => {
            if (arr.indexOf(elem)!==arr.lastIndexOf(elem))
                console.log("found a dirty duplicate: " + elem + " in array "+arr);
        });

        //should be no self loops
        var actualSameVertex = actualVertices.filter(p=>p==="a");
        tester.equalTo(actualSameVertex.length, 0, "the vertex 'a' self-loop test");

        // next construct JSON to convert to a graph
        var graphJson = {
            "edges": [
                {"fromVertex" : "a", "toVertex" : "b"},
                {"fromVertex" : "a", "toVertex" : "c"},
                {"fromVertex" : "b", "toVertex" : "c"}
            ]
        }
        graph = new Graph();
        graph.constructGraph(graphJson);
        
        tester.equalTo(3, graph.numberOfEdges, "after construct graph with JSON edges match");
        
        console.log(graph.toString());
    }
}

