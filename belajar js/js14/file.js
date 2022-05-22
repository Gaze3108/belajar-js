// belajar object
// object literal
var siswa={
    nama : 'donnie',
    nis : 2313133 ,
    email : 'asutoni@gmail.com',
    jurusan : 'teknik nganggur'
};
//  function Declaration
function buat(nama,nis,email,jurusan){
    var siswa = {};
        siswa.nama = nama;
        siswa.nis = nis;
        siswa.email = email;
        siswa.jurusan = jurusan;
        
    
    return siswa;
}
// var aso= buat('sfsfs',233133,'fsfsfsf','sffsffs');
// lebih ringkas bisa diulang ulang
// constructor function (keyword new)
function Siswa(nama,nis,email,jurusan,){
    // var this ={};
    this.nama = nama;
    this.nis = nis;
    this.email= email;
    this.jurusan= jurusan;
    // return this;
    // keyword new sebagai indikator mamakai fungsi konstruktor jika tidak memaki new komputer akan menganggap fungsi deklarasi
}
// var as=new Siswa();
// // object.creat()
// // memahami this
// // deklarasi
// // this == window 
// function halo(){
//     console.log(this)
//     console.log('hallo');
// }
// halo();

// fungsi leteral
// var obj={};
// obj.halo = function(){
//     console.log(this);
//     console.log('hallo');
//     }
//  obj.halo();

// fungsi konstruktor
function Hello(){
    console.log(this);
    console.log('hallo');
}
var x=new Hello();
