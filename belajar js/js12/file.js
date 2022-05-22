var penumpang =[];
var cetak= function(array){
    console.log(array.join());
}
var tambahPenumpang= function(nama , array){

    if( b == nama){
        console.log('nama penumpang sudah ada');
        exit;
    }
    var id=array.indexOf(undefined);
    if(id >=0){
        array.splice(id,1,nama);
        
    }
    else{
    array.push(nama);
    }
    cetak(array);
}


tambahPenumpang("donnie", penumpang);
console.log(penumpang.join());
tambahPenumpang("magelan", penumpang);
console.log(penumpang.join());

var turunPenumpang=function(nama, array){
var id=array.indexOf(nama);
array.splice(id,1,undefined);
cetak(array);
} 
turunPenumpang('donnie',penumpang);
console.log(penumpang.join());
tambahPenumpang('aljabar',penumpang);
console.log(penumpang.join());
tambahPenumpang('barbara',penumpang);
console.log(penumpang.join());
tambahPenumpang('dono',penumpang);
tambahPenumpang('kle',penumpang);
turunPenumpang('dono',penumpang);
tambahPenumpang('lili',penumpang);
tambahPenumpang('lili',penumpang);

