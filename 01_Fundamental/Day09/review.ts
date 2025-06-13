/**         //javascipt hanya bisa dijalankan di browser kalo mau jalan di computer pake v8 engine seperti node js
 * 
 *          //kondisi ? hasilJikaTrue : hasilJikaFalse; // tenari operator
 *          
 *          //var function block-scoped
 *          
 *          //brute force: teknik nested loop
 * algorithm
// ● Linear Search
// ● Binary Search
// ● Jump Search
// ● Interpolation Search
// ● Exponential Search
// ● Sublist Search (Search a linked list in another list)
// ● Fibonacci Search
// ● Etc

big O notation
/**
 * Big O Notation
 * 
 * Notasi Big O digunakan untuk mengukur kompleksitas algoritma, yaitu:
 * - Seberapa cepat kode berjalan (Time Complexity)
 * - Seberapa banyak memori yang digunakan (Space Complexity)
 * 
 * =============================
 * NOTASI UMUM BIG O:
 * 
 * O(1)   -> Konstan
 * - Waktu tetap, tidak tergantung ukuran input.
 * - Contoh: akses langsung ke array.
 * 
 * O(n)   -> Linear
 * - Waktu bertambah sebanding dengan jumlah input.
 * - Contoh: loop satu kali pada array.
 * 
 * O(log n) -> Logaritmik
 * - Input dibelah setiap langkah (divide and conquer).
 * - Contoh: Binary Search.
 * 
 * O(n^2) -> Kuadratik
 * - Nested loop, waktu naik drastis saat input besar.
 * - Contoh: Bubble Sort, Selection Sort.
 * 
 * =============================
 
    setTimeout(() => {

    // kode yang mau dijalankan setelah delay

 }, delayDalamMs);


 * Kisi-kisi exam modul 01:
 * - indroduction programing
 * - Data Type(primitive,non primitive)
 * - var, let and const;
 * - introduction tS
 * - looping statement
 * - interface and object declaration
 * - function hoisting
 * - encapsulation              //menyembunyikan property object contoh private protected
 * - data structure
 * - big 0 notation
 */

//variable : penampung data

/**
 * Rumus penulisan variabel ====> keywordVariabel namaVariable = value;
 * keywordVariabel : var, let, const
 * namaVariable : - tidak boleh diawali dengan angka
 *                - boleh diawli simbol _ dan $
 *                - jika terdiri dari lebih dari satu suku kata harus digabung dengan metode camelCase
 *              
 * 
 */

// karakter keyword variable
// Keyword var: redeclare, reassign, global variabel
var nama: string = "Abdi";
var nama: string = "Edo";


// Reassign 
nama = "Aldo";

// Keyword Let: non-redeclare, reassign, block-scoped vaiable
// Non-redeclare
let usia: number = 20;
// let usia: number = 20;

// reassign
usia = 40;

//contoh block-scoped
function introduce() {
    let usia: number = 15;

    return `usiaku${usia}`;
}

//keyword const: Non-redeclare, Non-reassign, constant variable
const PI = Math.PI;
const listAngka: number[] = [2, 3, 4, 5, 2, 6, 3, 4];

interface IHuman {
    nama: string,
    tglLahir: string,
    gender: "Pria" | "Wanita"
}

const human: IHuman = {
    nama: "Abdi",
    tglLahir: "2000-12-03",
    gender: "Pria"
};

// looping statement : merupakan penulisan code yang ditujukan unutk mnegulang eksekusi suatu code
/**
 * WHILE LOOP: perulangan program yang akan selalu dijalankan kondisi masih terpenuhi
 * aturan penulisan : 
 * while(condition){
 *      //code
 * }
 */

let count: number = 1;
while (count < 10) {
    console.log(`loop ke-${count}`);
    count++;
}
let random: number = Math.random();
console.log(random);
while (true) {
    if (random < 0.25) {
        break;
    }
}

/**
 * DO...WHILE
 * aturan pennulisan :
 *  do{
 *      //code
 * }while(condition)
 */

let counter: number = 1;
do {
    console.log(counter);
    counter++;
} while (counter < 10)

/**
 * FOR LOOP: digunakan ketika batas looping diketahui sejak awal
 * aturan penulisannn: 
 * for(counterDeclaration; counter_condition; counter){
 *      //code
 * }
 */
for (let i: number = 1; i < 10; i++) {
    console.log(i);
}

//for...in: looping yang berkaitan dengan tipe data object

for (const property in human) {
    console.log(property);
    console.log(human[property]);

}

console.log(human.nama);
console.log(human["nama"]);

//for...of: looping yang berhubungan dengan akses value data array

const listProduct: string[] = ["Kopi", "Teh", "Es Jeruk"];

for (const value of listProduct) {
    console.log(value);
}

// array : tipe data yang mampu menampung berbagai macam tipe data lain
/**
 * ciri -ciri: - data yang disimpan didalam array akan dibungkus kurung siku, contoh :[1, 2, 3]
 *             - setiap data yang disimpan dalam array ,akan memiliki alamat index yang dimulai dari 0
 */

const listNamaSiswa: string[] = ["Aldo", "Aldi"];

interface ISiswa {
    nis: string;
    nama: string,
    kelas: 'IPA' | "IPS";
}
const listSiswa: ISiswa[] = [{
    nis: "0230223043",                  //angka kalau bukan unutk dihitung tidak perlu pakai tipe number
    nama: "Aldo",
    kelas: "IPS"
},
{
    nis: "35345234354",                  //angka kalau bukan unutk dihitung tidak perlu pakai tipe number
    nama: "Aldi",
    kelas: "IPA"
}
];
const stringObject = `${JSON.stringify(listSiswa[0])}`;
console.log(`${JSON.stringify(listSiswa[0])}`);
console.log(stringObject);
console.log(JSON.parse(stringObject));

//interface unutk yang pasti (sudah tau struktur datanya) / typeof unutk tipe data baru atau gabungan


//Function : cara unutk menyatukan sekumpulan program unutk mneyelesaikan tugas khusus
/**
 * Kategori : Built-in function dan User-defined function
 * atran penerapan function :
 * - function harus tesedia leih dulu
 * - penamaan function mengikuti aturan penamaan variable
 * - secara opsional bisa menerima paramete/atau argumen: penampung data dari function unutk menerima data dari luar function
 * - function secara opsional bisa menghasilkan output melalui keyword return didalamnnya
 * - opsi penulisan function ada tiga : declarative function ,func.expression dan arraw function
 * 
 */



/**
 * Declarative function :                                   //PUNYA SIFAT FUNCTION HOISTING
 * function namaFunction(parameter?, parameter?,...){
 *          //code
 * }
 * 
 */
//contoh:
function penjumlahan(): number {
    let angkaA: number = 2;
    let angkaB: number = 3;

    const result: number = angkaA + angkaB;

    return result;
}
console.log(penjumlahan());

function penjumlahanB(angkaA: number, angkaB: number): number {
    const result: number = angkaA + angkaB;
    return result;
}
console.log(penjumlahanB(1, 3));
console.log(penjumlahanB(3, 3));
console.log(penjumlahanB(5, 3));

/* function expression :
* const namaFunction = function (parameter?, parameter?,...){
*          //code
* }
* 
*/
//contoh:
const pengurangan = function (): number {
    let angkaA: number = 2;
    let angkaB: number = 3;

    const result: number = angkaA - angkaB;

    return result;
}

console.log(pengurangan());

const penguranganB = function (angkaA: number, angkaB: number): number {

    const result: number = angkaA - angkaB;

    return result;
}
console.log(penguranganB(5, 3));

/* Arrow function:
 * const namaFunction = (parameter?, parameter?,...) => {
 *          //code
 * }
 * 
 */
//contoh:

const perkalian = (): number => {
    let angkaA: number = 10;
    let angkaB: number = 20;

    const result: number = angkaA * angkaB;

    return result;
}
console.log(perkalian());

const perkalianB = (angkaA: number, angkaB: number): number => angkaA * angkaB; //kalo ingin menyederhanakan penulisan tinggal hapus kurung kurawa{} beralaku khusus unutk arraw function

console.log(perkalianB(5,6));
