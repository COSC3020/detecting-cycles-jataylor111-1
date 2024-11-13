# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

-----------------------------------------------------------------------------------------

My complexity is $\Theta(V + E)$

First I have two node based loops, both run in $V$ time

then in the helper function I have a similar situation to that of my Augmenting Path algorithm, where I have a while loop that would at worst go through every single node followed by a for loop that at worst would go across every single edge, so $V + E$

So $\Theta((V + E) + V + V)$ = $\Theta(3V + E)$

ignoring constant values we get; $\Theta(V + E)$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
