var sisi= parseInt(prompt('masukan angka'));
function hitung_luas(sisi){
   return sisi*sisi;
}
function hitung_volume(sisi){
    return sisi*sisi*sisi;
 }

 alert('volume :'+hitung_volume(sisi)+' m3');

 function tambah_volume(s1,s2){
    var volume_A = s1*s1*s1;
     var volume_B = s2*s2*s2;
     return volume_A+volume_B;
 }
//  jika dalam fungsi arguments lebih banyak dari parameter maka akan diabaikan
//  jika dalam fungsi  parameter lebih sedikit dari argumen yang dibutuhkan maka akan bernilai undifind/tak terdefinisi

function tambah() {
    var hasil = 0;
    for(var i=0; i < arguments.length; i++){     
        
         hasil += arguments[i];
    }
    return hasil;
}
var coba=tambah(3,3,3,3,3,3);
console.log(coba);
// refactoring sebuah proses mengubah kode agar menjadi lebih 'baik' tampa mengubah fungsionalitasnya