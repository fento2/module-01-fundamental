{
  // =======================
  // 📌 Catatan Tentang Set di TypeScript
  // =======================

  /*
    Set adalah struktur data yang menyimpan nilai-nilai unik.
    Tidak ada elemen yang duplikat.
  */

  // 🔸 Membuat Set
  const angka = new Set<number>();

  // 🔸 Menambahkan elemen
  angka.add(1);
  angka.add(2);
  angka.add(2); // Tidak akan ditambahkan karena sudah ada

  // 🔸 Mengecek apakah elemen ada di dalam Set
  console.log(angka.has(1)); // true
  console.log(angka.has(3)); // false

  // 🔸 Menghapus elemen dari Set
  angka.delete(2); // Hapus elemen 2

  // 🔸 Mendapatkan jumlah elemen dalam Set
  angka.size; // contoh: 1

  // 🔸 Menghapus semua isi Set
  angka.clear(); // Sekarang Set kosong

  // 🔸 Melakukan iterasi pada Set
  const buah = new Set<string>(["apel", "jeruk", "pisang"]);
  for (const item of buah) {
    console.log(item); // apel, jeruk, pisang
  }

  // 🔸 Menghapus duplikat dari array dengan Set
  const arr = [1, 2, 2, 3, 3, 3];
  const unik = [...new Set(arr)]; // [1, 2, 3]

  /*
    🔹 Kapan Menggunakan Set?
    - Saat ingin menyimpan data yang harus unik
    - Saat perlu menghapus duplikat dengan cepat
    - Saat butuh cek kehadiran elemen dengan performa tinggi (O(1))
  */

}
{
  // =======================
  // 📌 Catatan Tentang Map di TypeScript
  // =======================

  /*
    Map adalah struktur data yang menyimpan pasangan key-value.
    Mirip seperti object, tapi:
    - Key bisa berupa tipe data apa saja (termasuk objek, array, dsb)
    - Menjaga urutan data sesuai saat dimasukkan
  */

  // 🔸 Membuat Map
  const skor = new Map<string, number>();

  // 🔸 Menambahkan pasangan key-value
  skor.set("Alice", 90);
  skor.set("Bob", 80);

  // 🔸 Mengambil nilai berdasarkan key
  skor.get("Alice"); // 90

  // 🔸 Mengecek apakah key ada
  skor.has("Bob"); // true

  // 🔸 Menghapus item berdasarkan key
  skor.delete("Bob");

  // 🔸 Ukuran Map
  skor.size; // 1

  // 🔸 Menghapus semua item
  skor.clear();

  // 🔸 Iterasi Map
  const data = new Map<string, number>([
    ["apel", 10],
    ["jeruk", 15]
  ]);

  for (const [key, value] of data) {
    console.log(`${key} : ${value}`);
  }

  // 🔸 Bisa juga ambil semua key atau value
  data.keys();    // iterator semua key
  data.values();  // iterator semua value
  data.entries(); // iterator [key, value]

  // 🔸 Map vs Object
  /*
    - Object hanya bisa pakai string atau symbol sebagai key
    - Map bisa pakai apa saja sebagai key
    - Map punya urutan, Object tidak menjamin urutan
    - Map lebih cocok untuk struktur data dinamis
  */

}
{
  // =======================
  // 📌 Catatan Tentang WeakSet & WeakMap
  // =======================

  /*
    WeakSet dan WeakMap adalah versi "lemah" dari Set dan Map.
    Mereka TIDAK mencegah garbage collection.
    Artinya: jika tidak ada referensi lain ke object, object itu bisa dihapus otomatis dari WeakSet/WeakMap.
  */

  // =======================
  // 🔸 WeakSet
  // =======================

  /*
    - Hanya bisa menyimpan OBJECT
    - Tidak bisa menyimpan primitif (string, number, boolean, dll)
    - Tidak bisa di-loop (tidak ada .forEach atau for..of)
    - Tidak punya properti .size
  */

  const ws = new WeakSet();

  const obj1 = { nama: "Fen" };
  const obj2 = { nama: "Mina-chan" };

  ws.add(obj1);
  ws.add(obj2);
  ws.has(obj1); // true
  ws.delete(obj2); // hapus obj2 dari WeakSet

  // Tidak bisa:
  // ws.size
  // for (const item of ws) { ... }

  // =======================
  // 🔸 WeakMap
  // =======================

  /*
    - Key hanya bisa berupa OBJECT (bukan string, number, dsb)
    - Nilai (value) bisa tipe apa saja
    - Tidak bisa di-loop atau dilihat isinya
    - Tidak punya .size
  */

  const wm = new WeakMap();

  const key1 = { id: 1 };
  const key2 = { id: 2 };

  wm.set(key1, "Rahasia 1");
  wm.set(key2, "Rahasia 2");

  wm.get(key1); // "Rahasia 1"
  wm.has(key2); // true
  wm.delete(key2); // hapus key2 dari WeakMap

  // Tidak bisa:
  // wm.size
  // wm.keys()
  // wm.forEach()

  /*
    🔸 Kapan pakai WeakSet atau WeakMap?
    - Saat ingin menyimpan data yang bersifat sementara
    - Saat tidak ingin mencegah object dihapus dari memori
    - Untuk caching atau private data dalam class (karena tidak bisa diakses sembarangan)
  */

  // =======================
  // 🔍 Perbandingan Singkat
  // =======================

  /*
  | Struktur   | Key Bisa Apa       | Value Bisa Apa | Bisa Di-loop | Garbage Collected |
  |------------|--------------------|----------------|---------------|--------------------|
  | Set        | Value langsung     | -              | ✅             | ❌ (permanen)       |
  | WeakSet    | Object saja        | -              | ❌             | ✅ (otomatis)       |
  | Map        | Apa saja           | Apa saja       | ✅             | ❌                 |
  | WeakMap    | Object saja        | Apa saja       | ❌             | ✅                 |
  */


}
{
  // =======================
  // 📌 Catatan Array Methods di TypeScript
  // =======================

  const angka: number[] = [1, 2, 3, 4, 5];

  /*
    🔸 .push(value)
    Menambahkan elemen ke akhir array
  */
  angka.push(6); // [1, 2, 3, 4, 5, 6]

  /*
    🔸 .pop()
    Menghapus elemen terakhir
  */
  angka.pop(); // [1, 2, 3, 4, 5]

  /*
    🔸 .shift()
    Menghapus elemen pertama
  */
  angka.shift(); // [2, 3, 4, 5]

  /*
    🔸 .unshift(value)
    Menambahkan elemen ke awal array
  */
  angka.unshift(0); // [0, 2, 3, 4, 5]

  /*
    🔸 .slice(start, end)
    Mengambil sebagian array (tanpa mengubah aslinya)
  */
  const bagian = angka.slice(1, 3); // [2, 3]

  /*
    🔸 .splice(index, jumlah, item1?, item2?, ...)
    Menghapus/mengganti/menyisipkan elemen
  */
  angka.splice(2, 1); // Hapus 1 elemen dari index ke-2 => [0, 2, 4, 5]
  angka.splice(2, 0, 99); // Sisipkan 99 di index ke-2 => [0, 2, 99, 4, 5]

  /*
    🔸 .map(fn)
    Ubah setiap item array sesuai fungsi
  */
  const kaliDua = angka.map(n => n * 2); // [0, 4, 198, 8, 10]

  /*
    🔸 .filter(fn)
    Ambil item yang memenuhi syarat
  */
  const genap = angka.filter(n => n % 2 === 0); // [0, 2, 4]

  /*
    🔸 .find(fn)
    Cari satu item yang cocok pertama kali
  */
  const cari99 = angka.find(n => n === 99); // 99

  /*
    🔸 .findIndex(fn)
    Cari index dari item yang cocok pertama kali
  */
  angka.findIndex(n => n === 99); // 2

  /*
    🔸 .forEach(fn)
    Loop tanpa return
  */
  angka.forEach(n => console.log(n));

  /*
    🔸 .reduce(fn, initialValue)
    Hitung nilai gabungan dari semua item
  */
  const total = angka.reduce((acc, curr) => acc + curr, 0); // jumlah total

  /*
    🔸 .includes(value)
    Cek apakah value ada di array
  */
  angka.includes(4); // true

  /*
    🔸 .indexOf(value)
    Cari index dari value
  */
  angka.indexOf(4); // 3

  /*
    🔸 .sort()
    Urutkan array (secara default berdasarkan string)
  */
  const angkaLain = [3, 1, 10, 2];
  angkaLain.sort(); // [1, 10, 2, 3] ❌ salah kalau angka!
  angkaLain.sort((a, b) => a - b); // [1, 2, 3, 10] ✅ benar

  /*
    🔸 .reverse()
    Balik urutan array
  */
  angkaLain.reverse(); // [10, 3, 2, 1]

  /*
    🔸 .join(separator)
    Gabungkan array jadi string
  */
  const gabung = angka.join(","); // "0,2,99,4,5"

}
{
  // =======================
  // 📌 Catatan Object Methods di TypeScript
  // =======================

  const user = {
    nama: "Fen",
    umur: 20,
    aktif: true
  };

  /*
    🔸 Object.keys(obj)
    Mengembalikan array dari nama properti (key)
  */
  const keys = Object.keys(user); // ["nama", "umur", "aktif"]

  /*
    🔸 Object.values(obj)
    Mengembalikan array dari semua nilai properti
  */
  const values = Object.values(user); // ["Fen", 20, true]

  /*
    🔸 Object.entries(obj)
    Mengembalikan array berisi pasangan [key, value]
  */
  const entries = Object.entries(user);
  // [["nama", "Fen"], ["umur", 20], ["aktif", true]]

  /*
    🔸 Object.fromEntries(entries)
    Mengubah array [key, value] jadi object
  */
  const baru = Object.fromEntries(entries); // { nama: "Fen", umur: 20, aktif: true }

  /*
    🔸 Object.assign(target, ...sources)
    Menyalin properti dari satu atau lebih object ke object target
  */
  const tambahan = { hobi: "ngoding", umur: 21 };
  const gabung = Object.assign({}, user, tambahan);
  // { nama: "Fen", umur: 21, aktif: true, hobi: "ngoding" }

  /*
    🔸 Object.hasOwn(obj, key)
    Cek apakah object punya key tertentu (tanpa mewarisi)
  */
  Object.hasOwn(user, "umur"); // true

  /*
    🔸 Object.freeze(obj)
    Membekukan object (tidak bisa diubah, tambah, atau hapus)
  */
  const dibekukan = Object.freeze({ a: 1 });
  // dibekukan.a = 2; ❌ tidak akan berubah

  /*
    🔸 Object.seal(obj)
    Mencegah tambah/hapus properti, tapi nilai masih bisa diubah
  */
  const tersegel = Object.seal({ b: 2 });
  tersegel.b = 3; // ✅ bisa
  // tersegel.c = 4; ❌ tidak bisa tambah

  /*
    🔸 typeof object
    Cek tipe data
  */
  typeof user; // "object"
  typeof null; // "object" (quirk JS)


}