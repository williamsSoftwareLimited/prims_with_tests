import { MaxPQ } from "../data_structures/maxPQ";
import { FTester } from "./fTester";

export class MaxPQTests {
    static runTests (){
        var pq = new MaxPQ();
        FTester.className="PriorityQueue";
        FTester.msg("PriorityQueue exists").is(pq).existing();

        FTester.msg("Empty priority queue").is(pq.isEmpty()).equalTo(true);

        pq.insert("p");
        FTester.msg("Non-empty priority queue").is(pq.isEmpty()).equalTo(false);

        pq.insert("q");
        pq.insert("e");
        FTester.msg("Check the size").is(pq.size()).equalTo(3);

        FTester.msg("The heap should have moved p below q").is(pq.delMax()).equalTo("q");
        FTester.msg("Check the size").is(pq.size()).equalTo(2);

        pq.insert("q");
        pq.insert("z");
        pq.insert("t");

        FTester.msg("The heap should have moved p below q").is(pq.delMax()).equalTo("z");
        FTester.msg("Check the size").is(pq.size()).equalTo(4);
    }
}