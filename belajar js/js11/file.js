// array method
// length untuk mengetahui banyak index/value/key/elemen di dalam variabel array
// join untuk saat menampilkan isi array/nilai array bukan berbentuk objek
// push,pop, shift,unshift
var array =['nama','alamat','umur'];
console.log(array.join());


array [1]= undefined;
console.log(array.join());
array [1]="amaoan";
console.log(array.join());
for(i=0;i<array.length;i++){
    console.log(array[i]);
}

// push dan pop
array.push('dodi','fdff','fsfsfsf');//menambah array dari belakang
console.log(array.join());
array.pop();//menghapus array dari belakang
console.log(array.join());

// unshift & shift
array.unshift('fsdfsfsfsf');// menambah array dari depan
console.log(array.join());
array.shift('fodjgogjgdg');// menghapus array dari depan
console.log(array.join());
// slice & splice mengiris dan & menyambung
array.splice(array.length,20,'lala','donifsifjf','sdfsf');  
// splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru)

console.log(array.join());
// slice key dan value disimpan di array baru array lama bisa disimpan
// slice(awal,akhir) menghasilkan array baru
// foreach
var array2=array.slice(1,7);
console.log(array2.join('?'));
var print= function(a){
    console.log(a);
}
var umur =[1,2,3,4,5,6,7,8,9];
umur.forEach(print);// a =elemen // bingung
// map mengembalikan isi array / bisa di return

umur.forEach(function(a,b){
    console.log('urutan nomer :'+b+" angka :"+a);
})
var umurTua=umur.map(function (a){
    return a*3;
    // map mengembalikan array foreach tidak bisa
})
console.log(umurTua.join('/'));
//  short untuk mengurutkan nilai array dari kecil kebesar berdasarkan karakter pertama
var tdkBeraturan=[4,3,2,5,6,7,8,5,6,10];
tdkBeraturan.sort(function(a,b){
    return a-b;
});
console.log(tdkBeraturan.join());
// filter dan find
// filter mengembalikan array
// find mengembalikan satu nilai tidak bisa pakai method join karena mengembalikan hanya 1 nilai
var coba=tdkBeraturan.filter(function(cari){
    return cari>5;
})
console.log(coba.join());
var coba1=tdkBeraturan.find(function(cari){
    return cari>5;
})
console.log(coba1);