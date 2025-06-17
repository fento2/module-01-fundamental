/*Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15*/
//1.input data
let panjang1: number = 5;
let lebar1: number = 3;
//2.pengoperasian 
const luas: number = panjang1*lebar1;
//3.menmpilkan hasil
console.log(luas);

/*Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16 */
//1.input data
let panjang2: number = 5;
let lebar2: number= 3;
//2.pengoperasian
const keliling: number = 2*(panjang2+lebar2);
//3.menampilkan hasil
console.log(keliling);

/*Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539*/
//1. input data
let radius: number = 5;
//2. pengoperasian
const area: number = Math.PI*radius;
const circumference: number = 2*Math.PI*radius;
const diameter3: number = circumference/Math.PI;
//3. menampilkan hasil
console.log(diameter3,circumference,area);

/*Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35*/
//1. input data
//let a: number = 90;
//let b: number = 30;
//2. pengoperasian
//const c: number = 180-(a+b);
//3. menampilkan hasil
//console.log(c);

/*write a code to convert temperature from celsius to fahrenheit
example:
celsius = 25
output: 77*/
//1. input data
let celsius: number = 25;
//2. pengoperasian
const fahrenheit: number = celsius*9/5+32;
//3. menampilkan hasil
console.log(fahrenheit);

/*write code to swap two numbers*/
//1. input data
let a1: number = 4;
let b1: number = 7;
let c1: number;
//2. mengreassign data
c1=a1;
a1=b1;
b1=c1;
//3. menampilkan hasil
console.log(a1,b1)

/*write a code to get first and last character form a string*/
//1. input data
let kata: string="programming";
//2. mengambil data yaitu karakter pertama dan terakhir dari data
const firstCharacter : string= kata.charAt(0);
const lastCharacter : string= kata.charAt(kata.length-1); //length hitung dari 1
//4.menampilkan data
console.log(firstCharacter,lastCharacter);


/*write a code to calculate the square and cube of a number*/
//1. input data
let number: number= 4;
//2. memakai fungsi math pow untuk memangkatkan
const hasilSquare: number= (Math.pow)(number,2);
const hasilCube: number= (Math.pow(number,3));
//3. menampilkan hasil
console.log(hasilSquare,hasilCube);


/*write a code to convert minutes to hours and minute*/
//1. menginput data dan mendeklarasi variabel
const menitAwal: number= 135;
let jam: number;
let menit : number;
//2. pengoperasian
jam=menitAwal/60;
menit=menitAwal%60;
//3/ menampilkan hasil
console.log((Math.floor)(jam),menit);