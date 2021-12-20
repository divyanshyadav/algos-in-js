Question: https://leetcode.com/problems/binary-tree-right-side-view/

## Intuition

If we see the binary tree from the right side then we can notice that we can only able to see the last nodes of each level from top to bottom. So if we find some way to

- iterate each level one by one.
- store the last node of each level in a result array.
- return the result.

## Approach 1

Do level-order traversal on the binary tree. Store the last node of each level and move on the the next level.

## Approach 2

Do pre-order traversal is such a way so that you hit the last node of a each level first, store it and then move on to the other nodes.
