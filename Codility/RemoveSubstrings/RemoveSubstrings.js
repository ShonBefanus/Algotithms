//https://app.codility.com/programmers/task/remove_substrings/
// ?  score
/**
 *

 You are given a string S consisting of N lowercase letters. In one move you can remove any substring (consistent fragment) from S, which starts and ends with the same letter and is at least two letters long. What is the minimum number of letters that may remain in S after any number of such moves?

 Write a function:

 function solution(S);

 that, given a string S, returns the length of the shortest string that can be obtained from S by applying any number of moves as described above.

 Examples:

 1. Given S = "abccac", the function should return 1. After removing the substring "abcca", there will be a single letter "c" remaining.

 2. Given S = "abcdabcdabcd" ("abcd" stated three times), the function should return 2. To achieve that, you can, for example, remove the first five letters from S ("abcda") in the first move, and the last five letters ("dabcd") in the second move. The remaining fragment would be "bc".

 3. Given S = "axaabyab", the function should return 0. It is possible to remove all letters by removing the substring "axaa" in the first move, and then "byab" in the second.

 Write an efficient algorithm for the following assumptions:

 N is an integer within the range [1..100,000];
 string S consists only of lowercase letters (a−z).

 */

import {TestExt} from '../../test';
import test from './tests';

function solution (r){
    if (r.length === 1) {
        return 1;
    }
    if (r.length === 0) {
        return 0;
    }
    let len = r.length;
    const loop = Math.min(26, len - 1);
    let result = 26;
    let iteration = 0;
    for (let i = 0; i < loop; i++) {
        result = Math.min(result, recursive(i, i, i + 1));
        if (i >= result) {
            i = loop;
        }
    }

    console.log(iteration);
    return result;

    function recursive (left, start, from){

        if (left >= result) {
            return result;
        }
        if (start >= len - 1) {
            result = (start === len - 1) ? left + 1 : left;
            return result;
        }
        iteration++;
        const char = r[start];
        const pos = r.indexOf(char, from);
        if (pos === -1) {
            return recursive(left + 1, start + 1, start + 2);
        } else {
            return Math.min(recursive(left, pos + 1, pos + 2), recursive(left, start, pos + 1));
        }
    }

}

function solution5 (r){
    if (r.length === 1) {
        return 1;
    }
    if (r.length === 0) {
        return 0;
    }
    let len = r.length;
    const loop = Math.min(26, len - 1);
    let result = 26;
    let iteration = 0;
    for (let i = 0; i < loop; i++) {
        result = Math.min(result, recursiveSimplify(i, i, i + 1));
        if (i >= result) {
            i = loop;
        }
    }

    console.log(iteration);
    return result;

    function recursiveSimplify (left, start, from){
        while (left < result && start < len - 1) {
            iteration++;
            const char = r[start];
            const pos = r.indexOf(char, from);
            if (pos === -1) {
                left++; start++; from = start + 2;
            } else {
                result = Math.min(result,recursiveSimplify(left, pos + 1, pos + 2));
                from = pos + 1;
            }
        }
        if (start >= len - 1) {
            result = (start === len - 1) ? left + 1 : left;
        }
        return result;
    }

    function recursive (left, start, from){

        if (left >= result) {
            return result;
        }
        if (start >= len - 1) {
            result = (start === len - 1) ? left + 1 : left;
            return result;
        }
        iteration++;
        const char = r[start];
        const pos = r.indexOf(char, from);
        if (pos === -1) {
            return recursive(left + 1, start + 1, start + 2);
        } else {
            return Math.min(recursive(left, pos + 1, pos + 2), recursive(left, start, pos + 1));
        }
    }

}

function solution4 (r){
    if (r.length === 1) {
        return 1;
    }
    if (r.length === 0) {
        return 0;
    }
    let len = r.length;
    const loop = Math.min(26, len - 1);
    let result = 26;
    let iteration = 0;
    for (let i = 0; i < loop; i++) {
        // result = Math.min(result, recursive(i, i, i + 1));
        // if (i >= result) {
        //     i=loop;
        // }
        result = Math.min(result, recursiveBack(i, len - i - 1, len - i - 2));
        if (i >= result) {
            i = loop;
        }
    }

    //console.log(iteration);
    return result;

    function recursive (left, start, from){

        if (left === result) {
            return result;
        }
        if (start >= len - 1) {
            return (start === len - 1) ? left + 1 : left;
        }
        iteration++;
        const char = r[start];
        const pos = r.indexOf(char, from);
        if (pos === -1) {
            return recursive(left + 1, start + 1, start + 2);
        } else {
            return Math.min(recursive(left, pos + 1, pos + 2), recursive(left, start, pos + 1));
        }
    }

    function recursiveBack (left, start, from){

        if (left === result) {
            return result;
        }
        if (start <= 0) {
            result = start === 0 ? left + 1 : left;
            return result;
        }
        iteration++;
        const char = r[start];
        const pos = r.lastIndexOf(char, from);
        if (pos === -1) {
            return recursiveBack(left + 1, start - 1, start - 2);
        } else {
            return Math.min(result, recursiveBack(left, pos - 1, pos - 2), recursiveBack(left, start, pos - 1));
        }
    }

}

function solution3 (r){
    if (r.length === 1) {
        return 1;
    }
    if (r.length === 0) {
        return 0;
    }
    let len = r.length;
    const loop = Math.min(26, len - 1);
    let result = 26;
    let iteration = 0;
    for (let i = 0; i < loop; i++) {
        result = Math.min(result, recursiveBack(i, i, len - 1));
        if (i >= result) {
            i = loop;

        }
    }

    //console.log(iteration);
    return result;

    function recursiveBack (left, start, from){

        if (left === result) {
            return result;
        }
        if (start >= len - 1) {
            return (start === len - 1) ? left + 1 : left;
        }
        iteration++;
        const char = r[start];
        const pos = r.lastIndexOf(char, from);
        if (pos === -1 || start >= pos) {
            return recursiveBack(left + 1, start + 1, from);
        } else {
            return Math.min(recursiveBack(left, pos + 1, len - 1), recursiveBack(left, start, pos - 1));
        }
    }

}

function solution2 (r){
    if (r.length === 1) {
        return 1;
    }
    if (r.length === 0) {
        return 0;
    }
    let len = r.length;
    const loop = Math.min(26, len - 1);
    let result = 26;
    let iteration = 0;
    const feature = [
        {
            i: 0,
            j: 0,
            left: 0,
            k: 1
        }
    ];
    while (feature.length > 0) {
        let feat = feature.pop();
        for (let i = feat.i; i < loop && i < result; i++) {
            let left = feat ? feat.left : i;
            let j = feat ? feat.j : i;
            let k = feat ? feat.k : i + 1;
            feat = null;
            while (left < result) {
                if (j >= r.length - 1) {
                    left = (j === len - 1) ? left + 1 : left;
                    break;
                }
                iteration++;
                const char = r[j];
                const pos = r.indexOf(char, k);
                if (pos === -1 || j >= k) {
                    left++;
                    j++;
                    k += 1;
                } else {

                    /* second fork */
                    //k=pos-1;
                    feature.push({
                        i,
                        j,
                        left,
                        k: pos + 1
                    });

                    /* first fork */
                    j = pos + 1;
                    k = pos + 2;


                }
            }
            result = Math.min(result, left);
            if (result === 0) {
                //console.log(iteration);
                return 0;
            }
            ;
        }
    }
    //console.log(iteration);
    return result;
}

const nbLetters = 26;
const longString = (max) => {
    let s = '';
    let i = 0;
    while (i++ < max) {
        s += String.fromCharCode(Math.floor(Math.random() * nbLetters) + 97);
    }
    return s;
};
const longWholeLetters = (max) => {
    let s = '';
    let i = 0;
    let arr = new Array(nbLetters);
    const top = Math.floor(max / nbLetters) + Math.max(0, Math.min(1, max % nbLetters));
    arr.fill(top);
    while (i < max) {
        const index = Math.floor(Math.random() * nbLetters);
        if (arr[index] === 0) {
            continue;
        }
        arr[index]--;
        s += String.fromCharCode(index + 97);
        i++;
    }
    return s;
};


function compareTest (test1, test2){
    const limit = 100000;
    const maxLetters = 11;
    let arrTest;
    for (let i = 0; i < limit; i++) {
        const max = Math.round(Math.random() * maxLetters);
        const s = longString(max);
        arrTest = [
            {
                in: [s],
                show: true
            }
        ];
        if (test1(s) !== test2(s)) {
            TestExt(arrTest, test1);
            TestExt(arrTest, test2);
            return;
        }
    }
    console.log('Everything all right');
}

function performanceTest (){
    const limit = 100000;
    const max = 10000;
    let arrTest;
    let maxTime = 0;
    for (let i = 0; i < limit; i++) {

        const s = longWholeLetters(max);
        arrTest = [
            {
                in: [s],
                show: true
            }
        ];
        let timeStart = new Date().getTime();
        solution(s);
        let timeEnd = new Date().getTime();
        maxTime = Math.max(maxTime, timeEnd - timeEnd);
        console.log('time ', timeEnd - timeEnd);
    }
    console.log('Max time ', maxTime);
}

//TestExt(test, solution);
//TestExt([test[0]], solution5);

const max = 100;
let arrTest;
arrTest = [{in: [longWholeLetters(max)]}];
//TestExt(arrTest,solution);
TestExt([{in: ['groaoyhsdd'],show:true}], solution5);
//compareTest(solution, solution5);
//performanceTest();



