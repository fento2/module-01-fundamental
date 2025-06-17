//  Callback Function : - sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukkan melalui parameter
//                      - sebuah fungsi yang langsung dibuat didalam parameter fungsi lain

/**
 * Aturan penulisan :
 *
 * function mainFunction(callbackFn){
 *      callbackFn();
 * }
 *
 * - callbackFn : parameter yang harus diisi dengan fungsi
 */

// mainFunction declaration
function printCalculation(callbackFn) {
  let angkaA: number = 15;
  let angkaB: number = 40;
  // menjalankan fungsi dari parameter callbackFn dan ditampunng outputnya kedalam variable result
  const result = callbackFn(angkaA, angkaB);

  return `Hasil perhitungan dari callback adalah ${result}`;
}

console.log(
  printCalculation(function (angkaA: number, angkaB: number) {
    console.log(angkaA);
    console.log(angkaB);
    return angkaA + angkaB;
  })
);

// console.log(
//   printCalculation(function () {
//     let numbA: number = 20;
//     let numbB: number = 3;

//     return numbA * numbB;
//   })
// );

// console.log(
//   printCalculation(() => {
//     let numbA: number = 20;
//     let numbB: number = 3;

//     return numbA - numbB;
//   })
// );

// function pembagian() {
//   let numbA: number = 15;
//   let numbB: number = 3;

//   return numbA / numbB;
// }

// console.log(printCalculation(pembagian));

// Array function : forEach, map, filter
// array.forEach(callbackFn) : sebagai pilihan selain for loop untuk mengakses isi dari tiap data array
const students: string[] = ["Abdi", "Edi", "Aldo"];

// for loop
for (let index = 0; index < students.length; index++) {
  const value = students[index];
  console.log(`${index + 1}. ${value}`);
}

students.forEach((value, index) => {
  console.log(value);
});

// Duplikasi cara kerja array.forEach
function duplicateForEach(arrayData: any[], callbackFn) {
  // isi code ?
  for (let index = 0; index < arrayData.length; index++) {
    const value = arrayData[index];
    callbackFn(value, index);
  }
}

duplicateForEach(students, (value: any, index: number) => {
  console.log(`${index + 1}. ${value}`); // result
});

// array.map(callbackFn): untuk merubah seluruh data array menjadi data array yang baru
// [1, 2, 3] -> [2, 4, 6]
// ["Abdi", "Edo", "Aldo"] -> ["1. Abdi", "2. Edo", "3. Aldo"]
// ["Abdi", "Edo", "Aldo"] -> ["Nama saya Abdi", "Nama saya Edo", "Nama saya Aldo"]
// [1, 2, 3] -> ["Ganjil", "Genap", "Ganjil"]
// [1, 2, 3] -> ["1", "2", "3"]
// [1000, 2000, 3000] -> ["Rp. 1.000", "Rp. 2.000", "Rp. 3000"]

const dataArray: any[] = [1, 2, 3, 4, 5];

const newArray = dataArray.map((value, index) => {
  return value * 2;
});

console.log(newArray);

const uang: number[] = [2000, 5000, 10000];

const newUang = uang.map((value, index) => {
  return value.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
  });
});
console.log(newUang);

// Exercise Duplicate map
function duplicateMap(arrayData: any[], callbackFn) {
  // isi code
  const arr: any[] = [];
  for (let index = 0; index < arrayData.length; index++) {
    const value = arrayData[index];
    console.log(value);
    console.log(callbackFn(value, index));

    arr.push(callbackFn(value, index));
  }

  return arr;
}

const numberToCurrency = duplicateMap(uang, function (value) {
  return value * 2;
});
console.log(numberToCurrency);

// array.filter(callbackFn) :untuk menhasilkan array baru sesuai acuan filter yang diberikan
// [1, 2, 3, 7, 20, 12] -> [2, 20, 12]

const angka: number[] = [1, 2, 3, 7, 20, 12];

const angkaGenap: number[] = angka.filter((value, index) => {
  
  return value % 2 === 0;
});
console.log(angkaGenap);

const angkaGanjil: number[] = angka.filter((value, index) => {
  return value % 2 !== 0;
});
console.log(angkaGanjil);



{

  // exercise buat callbackFn

function filterAndTransform(arr, filterFn, transformFn) {
  let result: number[] = [];
  for(let i:number = 0; i<arr.length; i++){
    if(filterFn(arr[i])){
    result.push(transformFn(arr[i]));
    }
  }
  return result;
}

const angka = [1, 2, 3, 4, 5, 6];

const hasil = filterAndTransform(
  angka,
  (index) => index % 2 === 0,      // filter genap
  (index) => index * 10            // kalikan dengan 10
);

console.log(hasil);


}



