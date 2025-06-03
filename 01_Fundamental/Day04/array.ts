//Array : tipe data yang mampu menampung berbagai macam tipe data lain.
/**
 * ciri-ciri dari data array diantaranya adalah -diungkus oleh kurung siku contoh : [1, 2, 3]
 *                                              -setiap data didalam array memiliki alamat index, yang dimulai dari index ke 0
 * tujuan : mempermudah pengelolaan data.                 
 */

let siswa1: string = "edo";
let siswa2: string = "edi";
let siswa3: string = "eda";

// jika disimpan kedalam array

const daftarSiswa: string[] = ["edo", "edi", "eda"];            //kalo pake array harus pakai const biar gak ada kemungkinan di reassign
                                                                //kalo mau diubah nanti pakai fungsi array
const daftarKelas: string[] = new Array("IPA","IPS", "BAHASA");
//cara mengakses suatu data dari array : namaVariabel[index_data_yang _dipilih]
console.log(daftarSiswa[1]); 
console.log(daftarKelas);

//array destructure : merupakan cara unutk mengakses data pada array dengan menandai tiap data menggunakan variabel
const data: any[] = ["abdi", 20, "siduarjo"];
let [nama, usia, alamat] = data;
console.log(nama);
console.log(usia);
console.log(alamat);

//memperbaharui suatu data array
daftarSiswa[2] = "andre";
console.log(daftarSiswa);

//fungsi bawaan array unutk mengelola data 
//array.push(newData) : menambahkan data baru di akhir array
daftarSiswa.push("olga");
console.log(daftarSiswa);

//array.pop() : menghapus data terakhir
daftarSiswa.pop();
console.log(daftarSiswa);

//array.unshift(newData) : menambahkan data baru di awal array
daftarSiswa.unshift("rafi");
console.log(daftarSiswa);

//array.shift() : menghapus data terdepan
daftarSiswa.shift();
console.log(daftarSiswa);

//array.length : unutuk mengetahui banyaknya data didalam array
console.log(daftarSiswa.length);

//array.splice(pilihanIndex, jumlahDataYangDihapus, newData?) : menghapus, memperbaharui dab menyisipkan data baru pada index yang dipilih
daftarSiswa.splice(1, 1);
console.log(daftarSiswa);

//menyisipkan data
daftarSiswa.splice(1,0,"edi", "Dimas", "El");
console.log(daftarSiswa);

//memperbaharui data
daftarSiswa.splice(2,1,"Eki");
console.log(daftarSiswa);

{
    //deskripsi:
    //dari data array berikut:
    //const daftarSiswa: string[] = ["edo, "edi", "eda"]:
    //cetak semua nama dengan nomor urut

    //output
    //1. edo
    //2. edi
    //3. eda

    const daftarSiswa: string[] = ["edo", "edi", "eda"];
    let print: string = "";
    for(let i: number = 0; i<daftarSiswa.length; i++){
        print += `${i + 1}. ${daftarSiswa[i]} \n`;
    }
        console.log(print);
}

