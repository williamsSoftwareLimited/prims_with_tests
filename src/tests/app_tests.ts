import { GraphTests } from "./graph_tests";
import { DfsTests } from "./dfs_tests";
import { MaxPQTests } from "./maxPQ_tests";
import { EdgeTests } from "./edge_tests";

export class AppTests {
    runTests () {
        // GraphTests.runTests();
        // DfsTests.runTests();
        // MaxPQTests.runTests();
        EdgeTests.runTests();
    }
}       