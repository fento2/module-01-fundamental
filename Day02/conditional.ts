//CONDITIONAL STATEMENT

/**
 * - IF STATEMENT : untuk memeriksa satu buah kondisi
 * - IF...ELSE STATEMENT : Uuntuk memeriksa dua kondisi
 * - IF...ELSE IF...ELSE STATEMENT : unutuk memeriksa tiga kondisi atau lebih
 * - SWITCH CASE STATEMENT : unutuk memeriksa data dalam pencocokan nilai
 */

//Contoh data
let nama: string = "Edo";
let usia: number = 20;

//IF
/**
 * aturan penulisan:
 * if(condition){
      //code
    }
 * note:
    -condition : kondisi yang diinginkan dalam bentuk boolean (TRUTLY / FALSY/COMPERASION/LOGICAL)
    -code : baris yang ingin dijalankan dalam if terpenuhi (bernilai TRUE)
 */

// example : memvalidasi batas usia
if (usia > 16) {
    console.log(`${nama} sudah dewasa`);
}

//IF...ELSE
/**
 * aturan penulisan:
 * if(condition){
      //code
    }else(condition){
    //code
    }
 * note:
    -condition : kondisi yang diinginkan dalam bentuk boolean (TRUTLY / FALSY/COMPERASION/LOGICAL)
    -code : baris yang ingin dijalankan dalam if terpenuhi (bernilai TRUE)
 */
usia = 17
if (usia > 16) {
    const print: string = `${nama} sudah dewasa`;
    console.log(print);
}else{
    const print: string = `${nama} Belum dewasa`;
    console.log(print);
}

let isNgantuk: Boolean = true;
if (isNgantuk){
    console.log("beli Kopi");

}else{
    console.log("Beli Es Krims");
}
//IF...ELSE
/**
 * aturan penulisan:
 * if(condition){
      //code
    }else if(condition){
    //code
    }else (condition{
    //code
    })
 * note:
    -condition : kondisi yang diinginkan dalam bentuk boolean (TRUTLY / FALSY/COMPERASION/LOGICAL)
    -code : baris yang ingin dijalankan dalam if terpenuhi (bernilai TRUE)
 */
//example klasifikasi nilai ujian 
//INPUT
const examGrade: number= 70 ;
let result : string;

//PROCESS
if (examGrade >=90){
    result ="GradeA";
}else if(examGrade >=80 && examGrade < 90){
    result ="GradeB";
}else if(examGrade >=70 && examGrade < 80){
    result ="GradeC";
}else{
    result ="GradeF";
}
//OUTPUT 
console.log(result);

//SWITCH...CASE
/**
 * Aturan penulisan :
 * switch(data){
 *      case balue:
 *          //code
 *       default:
 *          //code
 * }
 */

const job: string = "Driver";

switch(job){
    case"Code": //job === "code"
    console.log("membuat aplikasi");
        break;
    case "Driver":
        console.log("mengemudi");
        break;
    default:
        console.log("tidak tau");
}