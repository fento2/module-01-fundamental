//exercise looping and condition
//fento
{
    //● Write a code to check whether the number is odd or even
    //○ Example: 25 → odd number, 2 → even number

    const input: number = 2;           //👈input user
    let print: string = "";            //string buat menyimpan hasil

    if (input % 2 === 1) {               //jika true print bakal berisi odd number            
        print = `${input} → odd number`;
    } else {                              //jika false print bakal berisi even number
        print = `${input} → even number`;
    }
    console.log(print);
    //nih hasilnya  👆
}

{
    //● Write a code to check whether the number is prime number or not
    //○ Example: 7 → 7 is a prime number
    //○ Example: 6 → 6 is not a prime number

    const input: number = 6;                                        //👈input user 
    let n: number = 0;                                             //variabel n menjadi patokan berapakali harus mengecek prime💪 or not🙅
    let print: string = "";                                        //fungsinya sama kayak program di atas
    let notPrime: Boolean = false;                                 //variabel boolean buat ngecek prime💪 or not🙅, nilainya masih false

    n = Math.floor(Math.sqrt(input));                               //n diisi oleh akar dari angka inputan user, dibulatkan pakai floor

    if (input <= 1) {                                                 //karna angka 1 kekiri bukan bilangan prima jadi kita hapus dari kemungkinan
        print = `${input} → ${input} is not a prime number`;       //bakal jalan kalau true kalau false lanjut dibawah
    } else {
        for (let i: number = 2; i <= n; i++) {                         //jika angkanya lebih dari 1 (false) maka for loop akan jalan mencari kemungkina faktorial angka tersebut lebih dari 2 sesuai n
            if (input % i === 0) {                                    //logika if mengecek setiap loop ke-n apakah sisabaginya 0 atau bukan
                notPrime = true;                                    //jika sisahbaginya = 0 (true), maka variabel notPrime berubah nilainya menjadi true
                break;                                              //yang berarti loop bakal dipaksa berhenti
            }                                                       //jika tidak maka (false) logika if gak bakal jalan, berati boolean notPrime tetap false
        }

        if (notPrime) {                                               //jika logika if didalam for gak jalan maka if ini bakal tetap false nilainya
            print = `${input} → ${input} is not a prime number`;    //yang berarti variabel print gak bakal nyimpan string ini 
        } else {                                                      //karena ifnya false berarti logika else menjadi opsi kedua
            print = `${input} → ${input} is prime number`;          //yang berarti variabel print bakal diisi oleh string ini
        }                                                           //begitupun sebaliknya jika if-nya bernilai (true),
    }
    console.log(print);
}               //nih hasilnya 👆

{
    //● Write a code to find the sum of the numbers 1 to N
    //○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
    //○ Example: 3 → 1 + 2 + 3 = 6

    const input: number = 5;                       //👈input user
    let print: string = "";                        //sama kayak 2 di atas                
    let n: number = 0;                             //buat nilai hasilnya

    print += `${input}  →`;                         //input string pada variabel print biar awalanya sama kayak example diatas😉
    for (let i: number = 1; i <= input; i++) {         //for loop buat ngitung berapakali perulangan sesuai angka input user
        if (i === input) {                           //logika if kalau i nilainya sama nilainya seperti angka(yang berarti terakhir perulangan), tambahan angka terakhir-nya gak ngikut ada simbol tambah (+)
            print += ` ${i}`;                       //pake shorthand operator buat nambahin string, spasi dan variabel ke-inya (yang berarti terakhir)
            n += i;                                     //pake shorthand operator juga buat ngisi nilai n terakhir(hasilnya)
        } else {                                      //sebelum logika if jalan, logika else dulu yang jalan (kecuali kamu inputnya 1)
            print += ` ${i} + `;                        //sama kayak diatas tapi ini ditambahin "+"
            n += i;                                     //sama juga kayak diatas (n=n+i) kayak gitulah
        }                                           //kalau input 0 for lop gak jalan langsung ke tampahan variabel string ""= hasil"
    }
    print += ` = ${n}`;                             //kalau loopnya sudah selesai bakal diisi lagi string = n ke variabel print buat nampilin hasilnya 
    console.log(print);
    //nih hasilnya 👆
}

{
    //● Write a code to find factorial of a number
    //○ Example: 4! → 4 x 3 x 2 x 1 = 24
    //○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

    const input: number = 4;                               //👈input user
    let print: string = "";                                //kayak di atas lah ya(cape jelasinya)
    let n: number = 1;                                     //mirip di atas juga tapi mulainya dari 1

    print += `${input}! → `;                                //yah sama kayak di atas lah ya
    for (let i: number = input; i >= 1; i--) {                 //nah kalo ini kebalikan kayak di atas jadi kita mulai loopingnya dari angka inputan user terus, pakai decrement operator sampai batas dibawah 1
        if (i === 1) {                                       //sama kayak di atas ifnya bakal jalan kalo i-nya sudah sampai 1(terakhir), kecuali inputnya satu ifnya bakal diskip langsung ke else (kan sama kayak di atas)
            print += `${i}`;                                //sama kayak di atas
            n *= i;                                         //n-nya bakal diisi (n = n x i) biasanya perkalian yang terakhir(hasilnya)
        } else {                                              //sama kayak di atas lagi
            print += `${i} x `;                             //sama jugabedanya cuman di string "x"
            n *= i;                                         //sama cuman ini dikali                                         
        }
    }
    print += ` = ${n}`;                                     //sama juga buat nambahin = hasilnya
    console.log(print);
}          //nih hasilnya 👆

{
    //● Write a code to print the first N fibonacci numbers
    //○ Example: 15 → 610

    const input: number = 15;
    let f1: number = 1;
    let f2: number = 1;
    let fn: number = 1;

    for (let i = 3; i <= input; i++) {
        fn = f1 + f2;
        f1 = f2;
        f2 = fn;
    }

    console.log(`${input} → ${fn}`);

}                          //nih hasilnya 👆
