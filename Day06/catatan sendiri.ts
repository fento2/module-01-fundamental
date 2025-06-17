{

    // XOR operator (Exclusive OR) membandingkan setiap bit dari dua angka biner.
    // Jika bit di posisi yang sama sama nilainya (0 dan 0 atau 1 dan 1), hasilnya 0.
    // Jika bit berbeda (0 dan 1 atau 1 dan 0), hasilnya 1.
    // Hasil akhir adalah angka baru yang terbentuk dari gabungan semua bit hasil perbandingan tersebut.

    // Contoh:
    console.log(5 ^ 5); // hasilnya 0 karena semua bit-nya sama
    // 5 = 0101
    // 5 = 0101
    // XOR = 0000 -> hasil: 0 

    console.log(5 ^ 3); // hasilnya 6 karena ada dua bit yang berbeda
    // 5 = 0101
    // 3 = 0011
    // XOR = 0110 -> hasil: 6


    let a = 5;     // biner: 0101
    a ^= 3;        // jadi a = 5 ^ 3 = 6
    console.log(a); // output: 6

}

{
    // ======= Operator Bitwise di TypeScript =======

    // 1. AND (&)
    // Menghasilkan 1 jika kedua bit bernilai 1
    const FLAG_READ: number = 0b001;  // 1
    const FLAG_WRITE: number = 0b010; // 2
    const FLAG_EXEC: number = 0b100;  // 4

    let permission: number = 0b011; // read dan write

    // Cek apakah ada permission write
    console.log('Has write permission?', (permission & FLAG_WRITE) !== 0); // true

    // 2. OR (|)
    // Menghasilkan 1 jika salah satu bit bernilai 1
    permission = permission | FLAG_EXEC;
    console.log('Add exec permission:', permission.toString(2)); // "111"

    // 3. XOR (^)
    // Menghasilkan 1 jika bit berbeda
    let featureFlags: number = 0b1010; // fitur 2 dan 4 aktif
    const toggleFeature2: number = 0b0010; // bit ke-2

    featureFlags ^= toggleFeature2; // toggle bit ke-2
    console.log('Toggle feature 2:', featureFlags.toString(2)); // "1000"

    // 4. NOT (~)
    // Membalik semua bit (two's complement)
    const mask: number = 0b1111;
    console.log('NOT mask:', (~mask).toString(2)); // hasil negatif

    // 5. Left Shift (<<)
    // Geser bit ke kiri = kali 2^n
    console.log('5 << 2 =', 5 << 2); // 20

    // 6. Right Shift (>>)
    // Geser bit ke kanan = bagi 2^n (memperhatikan tanda)
    console.log('20 >> 2 =', 20 >> 2); // 5

    // 7. Zero-fill Right Shift (>>>)
    // Geser bit ke kanan, isi dengan 0 tanpa memperhatikan tanda
    console.log('-20 >>> 2 =', (-20) >>> 2); // angka besar positif

    // XOR assignment (^=)
    let a: number = 5;
    a ^= 3;
    console.log('a ^= 3:', a); // 6

    // Swap tanpa variabel tambahan dengan XOR
    let x: number = 5;
    let y: number = 3;

    x ^= y;
    y ^= x;
    x ^= y;

    console.log('Swap tanpa temp: x =', x, ', y =', y); // x=3, y=5

}
{
    //soal leetcode miising number jika angkanya berurut dari 0-n
    function missingNumber(nums: number[]): number {
        nums.sort((a, b) => a - b); // urutkan dulu
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i) {
                return i;
            }
        }
        return nums.length;//jika angka yang hilang adalah yang terakhir sesai panjang array
    }

    console.log(missingNumber([0, 1, 2, 3, 4, 6, 7, 8, 9]));
}
{
    //soal leet code  path sum

    function minPathSum(grid: number[][]): number {
        let step1kanan = 0;
        let step1turun = 0;
        let step2kanan = 0;
        let step2turun = 0;

        grid.forEach((subGrid, index) => {
            if (index === 0) {
                subGrid.forEach((value) => {
                    step1kanan += value;
                });
            }
            step1turun += grid[index][grid[0].length - 1];
        });
        step1turun -= grid[0][grid[0].length - 1]; // mengurangi angka pojok kiri atas

        grid.forEach((subGrid, index) => {
            if (index === grid.length - 1) {
                subGrid.forEach((value) => {
                    step2kanan += value;
                });
            }
            step2turun += subGrid[0];
        });
        step2turun -= grid[grid.length - 1][0]; // mengurangi angka pojok kanan bawah

        let cara1 = step1kanan + step1turun;
        let cara2 = step2kanan + step2turun;

        if (cara1 < cara2) {
            return cara1;
        } else if (cara2 < cara1) {
            return cara2;
        }

        return cara1;
    }


}


let test: string = "babad";

// Mengambil substring dari index ke-0 sampai sebelum index ke-5
// Index:  0 1 2 3 4
// Huruf:  b a b a d
// Hasil: "babad"
// cara pemakaian : string.substring(indexPertama, sebelum indexke-n);

console.log(test.substring(2,3));
console.log(test.slice(0,1)+test.slice(2,5)); // kalu mau hapus  1 hurf pada 1 string


{
    // Contoh string awal
const kalimat: string = "Saya suka belajar TypeScript";

// replace() digunakan untuk mengganti bagian string yang cocok dengan pola
// Syntax: string.replace(pola, pengganti)
// pola bisa berupa string atau Regular Expression (RegEx)

// Contoh 1: Menghapus semua huruf 'a' menggunakan RegEx dengan flag 'g' (global)
const hasil1 = kalimat.replace(/a/g, "");
// hasil1 = "Sy suk beljr TypeScript"

// Contoh 2: Menghapus huruf 'a' dan 'e' sekaligus menggunakan character class []
const hasil2 = kalimat.replace(/[ae]/g, "");
// hasil2 = "Sy suk bljr TypScript"

// Contoh 3: Menghapus huruf 'a' tanpa case sensitive (huruf besar dan kecil)
const hasil3 = kalimat.replace(/a/gi, "");
// hasil3 = "Sy suk beljr TypeScript"

// Contoh 4: Menghapus satu huruf pertama yang ditemukan saja (tanpa flag 'g')
const hasil4 = kalimat.replace(/a/, "");
// hasil4 = "Sy suka belajar TypeScript" (hanya huruf 'a' pertama yang dihapus)
console.log(hasil1);
// Catatan:
// Jika huruf yang dicari tidak ada, string akan tetap sama tanpa error
// .replace() tidak mengubah string asli, tapi menghasilkan string baru

}

// Teknik Pemecahan Masalah Lanjutan dalam Pemrograman

// 1. Greedy Algorithm
// Pilih solusi terbaik di setiap langkah dengan harapan hasil akhirnya optimal.
// Contoh: Penukaran uang dengan jumlah koin paling sedikit, MST (Kruskal).

// 2. Dynamic Programming (DP)
// Pecah masalah jadi sub-masalah dan simpan hasilnya agar tidak dihitung ulang.
// Contoh: Fibonacci, Knapsack, Pathfinding.

// 3. Backtracking
// Coba semua kemungkinan, dan mundur (backtrack) jika jalan yang dicoba salah.
// Contoh: Sudoku Solver, N-Queens, Permutasi.

// 4. Recursion
// Fungsi memanggil dirinya sendiri untuk menyelesaikan sub-masalah.
// Contoh: Faktorial, DFS, Binary Search.

// 5. Memoization
// Teknik mengingat hasil fungsi rekursif agar tidak dihitung ulang.
// Contoh: Optimasi Fibonacci, DP Top-Down.

// 6. Graph Traversal
// Menelusuri node dan edge dari struktur graph.
// Contoh: DFS, BFS, Dijkstra, A* Algorithm.

// 7. Sliding Window
// Gunakan "jendela" tetap untuk menghitung nilai dalam array secara efisien.
// Contoh: Subarray maksimum, rata-rata subarray.

// 8. Two Pointers
// Gunakan dua indeks untuk mencari solusi efisien dalam array atau string.
// Contoh: Palindrom, pasangan dengan jumlah tertentu.

// 9. Divide and Conquer (Lanjutan)
// Pecah → Selesaikan → Gabungkan solusi dari sub-masalah (biasanya rekursif).
// Contoh: Merge Sort, Quicksort, Binary Search.

// 10. Bit Manipulation
// Gunakan operasi bit-level untuk menyelesaikan masalah dengan efisiensi tinggi.
// Contoh: XOR, bit counting, deteksi angka unik.

{
    // filename: reduceExample.ts

// Contoh array angka
const angka: number[] = [1, 2, 3, 4];

// Menggunakan reduce untuk menjumlahkan semua angka dalam array
const totalJumlah: number = angka.reduce((accumulator, currentValue) => {
  // accumulator: nilai hasil penjumlahan sebelumnya
  // currentValue: nilai elemen saat ini di array
  return accumulator + currentValue; // tambahkan nilai sekarang ke accumulator
}, 0); // 0 adalah nilai awal accumulator

console.log('Total jumlah:', totalJumlah); // Output: 10

// Menggunakan reduce untuk mengalikan semua angka dalam array
const totalKali: number = angka.reduce((accumulator, currentValue) => {
  return accumulator * currentValue; // kalikan nilai sekarang ke accumulator
}, 1); // 1 adalah nilai awal accumulator

console.log('Total hasil kali:', totalKali); // Output: 24

// Menggunakan reduce untuk membuat string dari array angka
const gabungString: string = angka.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.toString(); // gabungkan string hasil sebelumnya dengan string angka sekarang
}, '');

console.log('Gabungan string:', gabungString); // Output: "1234"

}