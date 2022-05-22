function ulang(a){
    if(a===0) return;
    console.log(a);
    return ulang(a-1);
}
ulang(10);
console.log('\n');

var faktorial=function(n){
    if(n ===0 )return;
    
    console.log(n*faktorial(n-1));
// gurung mari
}
faktorial(5);