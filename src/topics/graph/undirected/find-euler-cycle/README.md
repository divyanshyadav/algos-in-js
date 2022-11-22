# Euler cycle

Euler cycle. An Euler cycle in a graph is a cycle (not necessarily simple) that uses every edge in the graph exactly one.

-   Show that a connected graph has an Euler cycle if and only if every vertex has even degree.

    -   Let G be a graph that has an Eulerian circuit. Every time we arrive at a vertex during our traversal of G, we enter via one edge and exit via another. Thus there must be an even number of edges at each time. Therefore every vertex of G has an even degree.

-   Design a linear-time algorithm to determine whether a graph has an Euler cycle, and if so, find one.

## Reference

-   https://www.coursera.org/learn/algorithms-part2/quiz/1TYQd/interview-questions-undirected-graphs-ungraded/attempt
