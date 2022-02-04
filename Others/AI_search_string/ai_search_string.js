//https://storage.googleapis.com/deepmind-media/AlphaCode/competition_level_code_generation_with_alphacode.pdf

import {TestExt} from '../../test';
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var substring = function(s,t) {
    let result = 'non';
    if(s.length===0 && t.length === 0 ) return 'yes';
    if(s.length < t.length  ) return result;
    let pos = 0;
    let start = 0;
    let arrPos=[];
    arrPos[-1]=s.length;
    arrPos[pos] = start;
    while(pos>=0 && pos<t.length && start < s.length){
        const newStart = s.indexOf(t[pos], start);
        if(newStart === -1 ) {
            if (pos === 0 || t[pos]===t[pos-1]) return result;
            start = arrPos[--pos] + 1;
        }else{
            if (start === newStart || (newStart - arrPos[pos]) % 2 !== 0) {
                arrPos[++pos] = newStart;
            }
            start = newStart + 1;
        }
    }
    //console.log(arrPos);
    if(pos === t.length) result = 'yes';
    return result;
};



let test = [
    {in:   ['a','a'], expected :  'yes', show:true},
    {in:   ['ababab','ba'], expected :  'yes', show:true},
     {in:  ['abc','abc'], expected :  'yes' , show:true},
    {in:   ['abbc','abc'], expected :  'non', show:true },
    {in:   ['ababa','ba'], expected :  'yes' , show:true},
    {in:   ['ababa','bb'], expected :  'non' , show:true},
    {in:   ['aaa','aaaa'], expected :  'non' , show:true},
    {in:   ['aababa','ababa'], expected :  'yes', show:true }
];
TestExt(test , substring);
