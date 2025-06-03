// Function
/**
 * defenisi : sekumpulan program yang disatukan unutk mengerjakan proses khusus yang biasanya bersifat reusable.
 * Kategori : built-in function dan User-defined function
 * Aturan penulisan :
 * - Penamaan function mengikuti aturan nama variable
 * - Bisa menerima parameter/argumen : penampung dari function, untuk menerima nilai dari luar function/tidak
 * - function biasanya menghasilkan nilai output melalui keyword return didalamnya 
 * - opsi penulisan bisa menggunakan declarative func, Function atau arrow function
 */

//contoh tanpa function
//input : dua variabel yag menampung data unutk dijumlahkan
let angkaA: number = 10;
let angkaB: number = 13;
//proses : memproses penjumlahan kedua variabel
const hasil: number = angkaA + angkaB;
//output : menampilkan hasil penjumlahan
console.log(hasil);

//buat kode diatas menjadi declarative function
/**
 * declaarative func : 
 * function namaFunc(parameter1,prameter2,...){
 *      // code
 * }
 */
//membuat function
function penjumlahan(){
    let angkaA: number = 3;
    let angkaB: number = 5;

    const hasil : number = angkaA + angkaB;

    return hasil;
}
let printpenjumlahan = penjumlahan();
console.log (printpenjumlahan);

console.log (penjumlahan());

//function with parameter for  reusable
function pengurangan(angkaA: number, angkaB: number){
    const hasil: number = angkaA-angkaB;
    return hasil;
}
console.log (pengurangan(10, 20));
console.log (pengurangan(20, 5));
console.log (pengurangan(15, 5));