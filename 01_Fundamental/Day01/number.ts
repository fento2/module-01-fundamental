{
//NUMBER : data angka
let jarak : number = 1500; //Nilai INT/INTEGER
let berat : number = 90.25; //Nilai FLOAT

//Aritmetic: +,-,*,/,%

//Algorithm kode perhitungan penjumlahan 
//1. menyiapkan data yang harus di jumlahkan
let angka1: number = 50;
let angka2: number = 30;
//2. memproses data yang diberikan
const result: number = angka1+angka2;
//3. menampilkan hasil akhir penjumlahan di terminal 
console.log(result);

//fungsi math object
const PIMath: number = Math.PI;
console.log (PIMath);

//pembulatan nilai
console.log(Math.round(20.2)); //pembulatan terdekat atas atau bawah
console.log(Math.ceil(25.1));//pembulatan ke atas
console.log(Math.floor(25.6));// pembulatan ke bawah

console.log(Math.pow(4,2));//pangkat
console.log(Math.sqrt(16));//mengecek akar sqrt (square rooot)
console.log(Math.cbrt(8));
console.log(Math.abs(-5));//nilai akan selalu positive

//MIN dan MAX
console.log(Math.min(1, 2, 4, 3, -20));
console.log(Math.max(1, 2, 4, 3, -20));

//random
console.log(Math.random())

//parsing data
let price: number = 255000;
console.log(price.toLocaleString("id",{
    style: "currency",
    currency: "IDR",
})
);

}
