// VARIABLE : penampung data
/*
-rumus penulisan variable ==> keywordVariable namaVariable = data;
-keywordVariable : var, let, const
-namaVariable : -Harus diawali dengan huruf atau _ atau $
                -jika terdiri dari dua suku kata atau lebih, maka tidak boleh dipisah dengan spasi.
-data: tipe data yang ingin disimpan diantaranya string, number, boolean, undefined, array, object.
*/

// mendeklarasikan variable
var namaMurid;

// meng-inisialisasi variable
var usiaMurid = 17;

//karakter tiap keyword variable 
//keyword var: redeclare, reassign
//redeclare
var alamat = "Jl. pemuda Surabaya";
var alamat = "Sukolilo Surabaya"; //membuat ulang variable yang sudah ada

//reassign
alamat = "Rungkut Surabaya";

//keyword let: non redeclare, reaassign
let program = "Web Development";
// let program = "digital marketing"; //non-redeclare
program = "Data Science";

//keyword const : non-redeclare, non-reassign
const PI = 3.14;
const UrlDomain = "https://google.com";

