import { VertexTests } from "./vertex_tests";
/// <reference path="./vertex_tests.ts" />

    export class AppTests {

        runTests () {
            var vertexTests = new VertexTests();
            vertexTests.runTests();
        }
    }

