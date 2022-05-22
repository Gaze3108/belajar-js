let siswa ={
    nama : "donnie",
    energi : 10,
    makan : function(makan) {
            this.energi+=makan
    }
}

function dataSiswa(nama,energi){
    let objek={}
    objek.nama = nama
    objek.energi = energi
    objek.makan= function(a) {
        this.energi+=a
    }
    return objek
}
let anj=dataSiswa("badu",32)
anj.makan(3)
