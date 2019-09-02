import { VertexTests } from "./vertex_tests";
import { Graph } from "../graph/graph";
import { Tester } from "./tester";

    export class AppTests {

        runTests () {
            var graph = new Graph();
            var tester = new Tester("Graph");
            graph.addEdge(1, 3);
            graph.addEdge(5, 1);

            tester.compareNumber(graph.numberOfEdges, 2, "Edge number test");

            graph.addEdge(1, 2);
            graph.addEdge(1, 4);

            tester.compareArray(graph.adjacentVertices(1), [3, 2, 4], "Vertices test");
        }
    }

