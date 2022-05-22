// masukan input/aksi pemain
var pilihan=prompt('pilih : \n batu, gunting, kertas');
// pilihan komputer
var batu='batu',
    kertas='kertas',
    gunting='gunting';
var kom=Math.random();

if (kom <0.3) {
    kom ="kertas";    
}else if (kom >0.3 && kom <0.7) {
    kom ="batu";
}else {
    kom ="gunting"
}
if (pilihan == kom) {
    alert('seri');
}else if (kom) {
    
}
// if (kom <0.3) {
//     console.log('komputer mengeluarkan batu');
//     if (pilihan == batu) {
//         alert('seri!');
//     }else if (pilihan == gunting) {
//         alert('kalah!');
//     }else if (pilihan == kertas) {
//         alert('menang!');
//     }
    
// }else if (kom >0.3 && kom <0.7) {
//     console.log('komputer mengeluarkan gunting');
//     if (pilihan == batu) {
//         alert('menang!');
//     }else if (pilihan == gunting) {
//         alert('seri!');
//     }else if (pilihan == kertas) {
//         alert('kalah!');
//     }
    
// }else if (kom >0.7) {
//     console.log('komputer mengeluarkan kertas');
//     if (pilihan == batu) {
//         alert('kalah!');
//     }else if (pilihan == gunting) {
//         alert('menang!');
//     }else if (pilihan == kertas) {
//         alert('seri!');
//     }
    
// }
