//LOOPING STATEMENT : penulisan code yang ditujukan unutk mengulang eksekusi suatu program hingga kondisi tertentu

console.log("1. edo");
console.log("2. abdi");
console.log("3. andre");
/**
 * WHILE LOOP : perulangan program yang akan selalu berjalan selama kondisi masih terpenuhi
 * aturan penulisan  
 * while(condition){
 *      //code
 * };
 *  -condition : kondisi yang diinginkan dalam bentuk boolean (TRUTLY / FALSY/COMPERASION/LOGICAL)
 */


let count : number = 1;

while(count <= 10){
    console.log(count);
    count++; //count = count+1 
}


let isBoolean : boolean = true;
while(isBoolean){
   count++;
   
   if(count === 15){
    console.log(count);
    isBoolean = false;
   }
}

while(true){
   count++;
   
   if(count === 25){
    console.log(count);
    break;
   }
}

/**
 * DO...WHILE
 * aturan penulisan :
 * do{
 *      //code
 * }while(codition)
 */

let counter: number = 5;
do{
    console.log(counter);
    counter++;
}while(counter < 1);

//FOR LOOP : digunakan keika batas looping sudah ditentukan sejak awal
/**
 *  for(counter_declaration; ccounter_condition; counter){
 *      //code
 * }
 * 
 * -counter_declatation : yang mendefenisikan nilai awal dari hitungan batas looping
 * -counter_ condition : kondisi unutk menentukan batas looping
 * -counter : proses perhitungan increment atau decrement
 */

for(let i:number = 0; i<10; i++){
    console.log(i);
}

//exercise
let limit: number = 2;
let ganjil: string ="ganjil";
let genap: string ="genap";
let cetak: string ="";
for(let i:number = 0; i<limit; i++){
    if(i%2 === 0){
        cetak = genap;
    }
    else{
        cetak = ganjil;
    }
    console.log(`${i} | ${cetak}`);
}
//versi lebih tepat
let limit2: number = 6;
let cetak2: string ="";
for(let i:number = 0; i<limit2; i++){
    if(i%2 === 0){
        cetak2 += `${i} : Ganjil |`;// cetak2 += `${i} : Ganjil |` artinya variabel cetak2 ditambah 1x oleh karakter "`${i} : Ganjil |`"
    }
    else{
        cetak2 += `${i} : Genap |`;
    }
}
console.log(cetak2);
