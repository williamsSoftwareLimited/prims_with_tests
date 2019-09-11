import { Graph } from "../graph/graph";
import { FTester } from "./fTester";
import { DepthFirstSearch } from "../graph/depthFirstSearch";

export class DfsTests {
    private static graphJson = {
        "edges": [
            {"fromVertex" : "a", "toVertex" : "b"},
            {"fromVertex" : "a", "toVertex" : "c"},
            {"fromVertex" : "a", "toVertex" : "f"},
            {"fromVertex" : "b", "toVertex" : "c"},
            {"fromVertex" : "c", "toVertex" : "d"},
            {"fromVertex" : "c", "toVertex" : "e"},
            {"fromVertex" : "d", "toVertex" : "e"},
            {"fromVertex" : "d", "toVertex" : "f"}
        ]
    };
    static runTests (){
        var graph = new Graph();
        graph.constructGraph(this.graphJson);
        console.log(graph.toString());
        FTester.className=("BfsTests");
        FTester.msg("Edge Test").is(graph.numberOfEdges).equalTo(8);

        var dfs = new DepthFirstSearch(graph, "a");
    }
}