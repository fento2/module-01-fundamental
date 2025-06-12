/**
 * Kisi-kisi exam modul 01:
 * - indroduction programing
 * - Data Type(primitive,non primitive)
 * - var, let and const;
 * - introduction tS
 * - looping statement
 * - interface and object declaration
 * - function hoisting
 * - encapsulation
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

