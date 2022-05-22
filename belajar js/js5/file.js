
var jmlAngkot =10;
for(var angkot =1; angkot <=jmlAngkot; angkot++){
    if (angkot  <=6 ) {
        if (angkot === 5) {
            console.log('Angkot No. '+angkot+" sedang lembur");  
        }
        console.log('Angkot No. '+angkot+" beroperasi dengan baik");
        
    }else if (angkot === 8 || angkot ===10) {
        console.log('Angkot No. '+angkot+" sedang lembur");  
    }else {
        console.log('Angkot No. '+angkot+"  tidak beroperasi");
    }
}
// fungsi parseInt() memaksa tipe data menjadi integer;

var angka = prompt('masukan angka :') //data yang diterima prompt bertipe data string
switch (angka) {
    case "1":
        console.log('anda memasukkan angka 1')
        break;
    case "2":
        console.log('anda memasukkan angka 2')
    break;
    case "3":
        console.log('anda memasukkan angka 3')
    break;
    default:
        console.log('anda memasukkan bukan angka ')
        break;
}

var data =prompt('masukan makanan/minuman : \n (contoh : nasi,ayam goreng,babi,burger,soda)');

switch (data) {
    case 'nasi':
        
    case 'ayam goreng':

    case 'babi':
        alert('makanan sehat');
        break;
    case 'burger':

    case 'soda':
        alert('makanan  tidak sehat');
        break;                   
    default:
        alert('bukan makanan')
        break;
}