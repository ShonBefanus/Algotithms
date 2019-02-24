import solution from  "./skyline-problem";
import {TestExt as test} from "../../test";

let s=[
    {in:[[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]],expected:[ [2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0] ],show:true},
/*1*/    {in:[[[2,9,10]]],expected:[ [2, 10], [9, 0] ],show:true},
/*2*/    {in:[[[2,9,10],[3, 7, 15],]],expected:[ [2, 10], [3,15], [7,10], [9, 0] ],show:true},
/*3*/    {in:[[[2,9,10],[3, 7, 15],[5,12,12]]],expected:[ [2, 10], [3,15], [7,12], [12, 0] ],show:true},
/*4*/    {in:[[[15,20,10],[19,24,8]]],expected:[  [15, 10], [20, 8], [24, 0] ],show:true},
/*5*/    {in:[[[0,2147483647,2147483647]]],expected:[  [0, 2147483647], [2147483647,0] ],show:true},
/*6*/    {in:[[[0,2,3],[2,5,3]]],expected:[[0,3],[5,0]],show:true},
/*7*/    {in:[[[1,2,1],[2147483646,2147483647,2147483647]]],expected:[[1,1],[2,0],[2147483646,2147483647],[2147483647,0]],show:true},
/*8*/    {in:[[[1,2,1]]],expected:[[1,1],[2,0]],show:true},
/*9*/    {in:[[[1,5,21],[2,6,1],[3,4,3]]],expected:[[1,21],[5,1],[6,0]],show:true},
/*10*/    {in:[[[1,2,1],[4,5,2]]],expected:[[1,1],[2,0],[4,2],[5,0]],show:true},
/*11*/   {in:[[[3,7,8],[3,8,7],[3,9,6],[3,10,5],[3,11,4],[3,12,3],[3,13,2],[3,14,1]]],expected:[[3,8],[7,7],[8,6],[9,5],[10,4],[11,3],[12,2],[13,1],[14,0]],show:true},
/*12*/    {in:[[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]],expected:[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]],show:true}
]

test([s[12]],solution);
//test(s,solution);