//BOOLEAN : data yang bernilai benar(true) atau salah(false);
let isActive: boolean = true;
let isDeleted: boolean = false;


//menghasilkan nilai boolean
//1. Berdesarkan tipe data lain
//2. TRUTLY
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(12));
console.log(Boolean(-12));
//3. FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));//NaN (not a number)

//2.Comparison operator: >, <, >=, <=, ==, ===
let valueA: number = 12;
let valueB: number = 15;

console.log(valueA<valueB);
console.log(valueA>valueB);
console.log(valueA>=12);
console.log(valueA<=14);
console.log(valueA!=15);
//console.log(valueA==="15");//triple equel menecek dengan tipedatanya juga


//3. Logical operator: AND (&&), OR (||), NOT(!)
//AND : akan menghasilkan nilai TRUE jika kedua kondisi juga bernilai true
console.log(Boolean("ABC") && Boolean(2));
console.log(valueA < 12 && valueB === 15);
console.log(valueA === 10 && valueB === 1);

//OR : akan menghasilkan nilai True jika salah satu data bernilai true
console.log(Boolean("ABC") || Boolean(2));
console.log(valueA < 12 || valueB === 15);
console.log(valueA === 10 || valueB === 1);

//NOT : membalikan nilai
console.log(!Boolean(valueA));
console.log(!(valueA < 12) && valueB === 15);// valueA lebih besar dari 12