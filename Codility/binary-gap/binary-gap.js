//https://app.codility.com/demo/results/trainingKQ97QC-QWM/
/**
 *

 A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

 For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

 Write a function:

 function solution(N);

 that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

 For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

 Write an efficient algorithm for the following assumptions:

 N is an integer within the range [1..2,147,483,647].


 */

import {TestExt} from '../../test';

function solution(N){
    let n = N, i = 0, gap = 0;
    while (n % 2 === 0) {
        n = n >> 1;
    }
    while(n  > 0) {
        if (n % 2 > 0) {
            gap = Math.max(gap, i - 1);
            i = 0;
        }
        i++;
        n = n >> 1;
    }
    return gap;
}
let test = [
    {in:[3],expected:0, show : true},
    {in:[9],expected:2, show : true},
    {in:[529],expected:4, show : true},
    {in:[20],expected:1, show : true},
    {in:[15],expected:0, show : true},
    {in:[32],expected:0, show : true},
    {in:[1041],expected:5, show : true},
    {in:[33],expected:4, show : true},
    {in:[65],expected:5, show : true},
    {in:[128+64+2],expected:4, show : true},
]
TestExt(test , solution);
//TestExt([test[2]] , solution);
