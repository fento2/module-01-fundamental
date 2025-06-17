
//STRING : data yang berisi karakter huruf, angka atau symbol dan ditandai dengan symbol quotes.
let namaTOKO : string = "TOKO OLGA";
namaTOKO = "TOKO DONAT";

//template literal
let alamatToko: string= 'Jl. Genteng Kali Surabaya';

//penggambungan data string
//Cara 1 : menggunakan penjumlahan +
let printinfo:string = namaTOKO + " " + alamatToko + " telp. 0812345678";
console.log(printinfo);

//Cara 2: template literal
printinfo = `${namaTOKO} ${alamatToko} Telp. 0812345678`;
console.log(printinfo);

//fungsi bawaan tipe data string
//string.length : menghitung panjang data sstring
let message :string = "hello@mail.com";
console.log(message.length);

//string.toLowerCase() : merubah semua karakter menjadi huruf kecil
console.log(message.toLowerCase());

//string.toUpperCase() : merubah semua karakter menjadi huruf besar
console.log(message.toUpperCase());

//string.includes() : memastikan suatu angka atau karakter ada didalam data string atau number
console.log(message.includes("e"));
console.log(message.includes("s"));

console.log(message.indexOf("hello")); //jika kata ditemukan indexof akan memerikan nilai nol(0),
// karena karakter hello pertama ditemukan ada pada urutan ke-0 jika tidak (-1)
console.log(message.lastIndexOf("Hello"));
console.log(message.startsWith("o",4))
console.log(message.split("@"));//memecah string dengan menghilangkan tanda @ jadi terdapat 2 array string