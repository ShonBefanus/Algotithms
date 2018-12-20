exports.Test=function test(arr,func){
    console.log(`Execute - ${func.name}`);
    for(let i=0;i<arr.length;i++){
        let r=func(arr[i].in);
        let ex=arr[i].expected
        console.log(`Test ${arr[i].in}, result = ${r}, expexted = ${ex}  -  ${r===ex}`);
    }
};
exports.TestExt=function(arr,func){
    console.log(`Execute - ${func.name}`);
    for(let i=0;i<arr.length;i++){
        let timeStart=new Date().getTime();
        let r=func.apply(this,arr[i].in);
        let timeEnd=new Date().getTime();
        let ex=arr[i].expected;
        let inArg='';
        if(typeof(arr[i].show)!=='undefined' && arr[i].show!==false){
            for (let j=0;j<arr[i].in.length;j++){
                inArg+=`arg${j+1} =  ${arr[i].in[j]}, `;
            }
        }
        console.log(`Test ${inArg} result = ${r}, expexted = ${ex}  -  ${r===ex}, ------ time = ${timeEnd-timeStart}`);
    }
};
