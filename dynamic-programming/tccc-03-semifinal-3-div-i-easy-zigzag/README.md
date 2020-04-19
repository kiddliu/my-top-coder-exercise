# ZigZag

## Problem Statement

A sequence of numbers is called a zig-zag sequence if the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a zig-zag sequence.

For example, 1,7,4,9,2,5 is a zig-zag sequence because the differences (6,-3,5,-7,3) are alternately positive and negative. In contrast, 1,4,7,2,5 and 1,7,4,5,5 are not zig-zag sequences, the first because its first two differences are positive and the second because its last difference is zero.

Given a sequence of integers, sequence, return the length of the longest subsequence of sequence that is a zig-zag sequence. A subsequence is obtained by deleting some number of elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

## Definition

Class: ZigZag
Method: longestZigZag
Parameters: int[]
Returns: int
Method signature: int longestZigZag(int[] sequence)
(be sure your method is public)

## Constraints

- sequence contains between 1 and 50 elements, inclusive.
- Each element of sequence is between 1 and 1000, inclusive.

## Examples

1. { 1, 7, 4, 9, 2, 5 } returns: 6. The entire sequence is a zig-zag sequence.

2. { 1, 17, 5, 10, 13, 15, 10, 5, 16, 8 } returns: 7. There are several subsequences that achieve this length. One is 1,17,10,13,10,16,8.

3. { 44 } returns: 1.

4. { 1, 2, 3, 4, 5, 6, 7, 8, 9 } returns: 2.

5. { 70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32 } returns: 8.

6. { 374, 40, 854, 203, 203, 156, 362, 279, 812, 955, 600, 947, 978, 46, 100, 953, 670, 862, 568, 188, 67, 669, 810, 704, 52, 861, 49, 640, 370, 908, 477, 245, 413, 109, 659, 401, 483, 308, 609, 120, 249, 22, 176, 279, 23, 22, 617, 462, 459, 244 } returns: 36

## My Notes

这一题我走进的误区前后各有一个：

1. 最一开始关注的state不正确，认为state就是题目要求的数组长度本身，而不是数组本身。解决这个问题花了大概1个小时。
2. 与第一个误区有关，state应当关注数组本身，而最后一个case一直没有跑过的原因在于从前一个state切换到后一个state，没有关注数列的峰值问题。如果过早地借由zigzag定义选定下一个状态的元素，会遇到最后一个case中

    46, 100, 953, 670, 862, 568, 188, 67

    的情况，既输出46后直接输出100，而忽略了后续5个数字直到67。解决这个问题花了大概1个小时。

3. 发现自己完全会受外界的干扰，随时在刷手机
