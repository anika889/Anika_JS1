console.log("Hello World")
let nilai = 60
if (nilai > 60) {
    console.log("A")
    // Jika nilainya lebih dari 60 maka nilainya benar
    // 
}else {
    console.log("D")
    // Jika nilainya tidak lebih dari 60 maka nilainya salah
    //
}

let angka = 90;
if (angka > 80) {
    console.log("A");
} else if (angka > 70) {
    console.log("B");
} else {
    console.log("C");
}

let bunga = "bunga matahari"
switch (bunga) {
    case "bunga mawar":
       console.log("bunga mawar 1 tangkai harganya 2e4");
       break;
    case "bunga anggrek":
       console.log("bunga anggrek 1 tangkai harganya 15e3");
       break;
    case "bunga tulip":
        console.log("bunga tulip 1 tangkai harganya 8e3");
        break;
    case "bunga matahari":
        console.log("bunga matahari 1 tangkai harganya 1e4");
        break;
    case "bunga dahlia":
        console.log("bunga dahlia 1 tangkai harganya 5e3");
        break;
    default:
        console.log('maaf,kita kehabisan jenis bunga.');
}
console.log("apakah ada hal lain yang kamu inginkan?");

let buku = 7;
for (let i= 0; i < 6; i++) {
    console.log("buku ke-" + (i+1));
} 

let buah = 5;
let jeruk = 5;
while ( buah < 10) {
    buah++;
    jeruk += buah;
    console.log ("buah jeruk itu besar");
}

let nomor= 2;
do {
    console.log("nomor yang sering muncul:" + nomor);
    nomor ++;
} while (nomor <= 6);

function jumlahluasduabuahpersegi(a,b) {
    var luasA;
    var luasB;
    var total;

    luasA = a * a;
    luasB = a * a;

    total = luasA + luasB;

    return total;
}

console.log(jumlahluasduabuahpersegi(5, 5));
console.log(jumlahluasduabuahpersegi(8, 8));