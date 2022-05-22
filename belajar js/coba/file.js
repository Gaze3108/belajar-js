var coba=['nama','makanan','yang','ada'];
var cetak=function(array){
    console.log(array.join());
}
cetak(coba);
coba [1]=undefined;
cetak(coba);
cetak