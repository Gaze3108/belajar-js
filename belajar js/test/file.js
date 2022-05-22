// mana yang lebih besar

var pembanding=function(a,b){
    if (a < b) {
        console.log('lebih besar : '+b)
        
    }else{
        console.log('lebih besar : '+a)
    }
}

// ganjil atau genap

var ganjilGenap=function(a){
    if (a%2===0) {
        console.log('genap : '+a)
    }
    else{
        console.log('ganjil : '+a)
    }
}

// berapakah jumlahnya
var tambahTambahan = function(n){
 var hasil=0;
    for(y=1;y<=n;y++){
      
    if(y<n){
        console.log(y +' +')
    }else{
        console.log(y);
    }
 hasil += y;
}console.log(hasil);
}

// ganjil genap 2
var ganjilGenap2= function(n){
    for(i=0;i<n.length;i++)
    if(n[i]%2==0){
        console.log('genap : '+n[i])
    }
    else{
        console.log('ganjil : '+n[i])
    }
}

// nilai maksimum
var nilaiMaksimum= function(n){
    for(i=0;i<=n.length;i++){
        if(i==0){
            var nilaiMaksimum=n[i];
        }
        else{
            if (n[i]> nilaiMaksimum) {
                nilaiMaksimum = n[i];
            }
        }
    }
     console.log(nilaiMaksimum)
}

// mungkinkah 
var mungkin=function(n,b){
    if(b.length==n){
        for(i=0;i<=b.length;i++){
            
        }
    }
}