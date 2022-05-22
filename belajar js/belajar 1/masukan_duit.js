var saldo;
var setuju=true;
while (setuju) {
    var dana = prompt('masukan dana anda kesini : ');
    alert('dana yang akan ditransfer : '+ dana);

    setuju = !confirm('konfirmasi');
}
alert('transaksi berhasil');
var saldo =+ dana;
console.log(saldo);